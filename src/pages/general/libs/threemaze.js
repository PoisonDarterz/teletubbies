import * as THREE from './three.min.js';
import * as TWEEN from './tween.min.js'; // Import TWEEN with correct casing
import { generateMaze as GenerateMaze, blockPositions } from './generateMaze.js';
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';
import { MeshLambertMaterial } from 'three';
import { AmbientLight } from 'three';
import { DirectionalLight } from 'three';
import { Object3D } from 'three';
import { SphereGeometry } from 'three';
import { CylinderGeometry, Mesh } from 'three';
import { BoxGeometry } from 'three';
import { Vector3 } from 'three';
import { BufferGeometry, BufferAttribute, Line} from 'three';
    /**
     * Maze class
     * @param wrapper
     * @param button
     */


    export default class ThreeMaze {
        constructor(wrapperSelector, buttonSelector) {
        // Object attributes
        this.wrapper = document.querySelector(wrapperSelector);
        const button = document.querySelector(buttonSelector);
        this.camera = {};
        this.cameraHelper = {};
        this.scene = new Scene();
        this.materials = {};
        this.map = [];
        this.renderer = {};
        this.player = {};
        this.end = {};
        this.side = 21;
        this.thickness = 20;
        

        // Inits
        this.initScene();
        this.onWindowResize();
        this.render();

        // Events
        this.wrapper.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.wrapper.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.wrapper.addEventListener('mouseup', this.onMouseUp.bind(this));
        button.addEventListener('click', this.onGenerateMaze.bind(this));
        button.dispatchEvent(new Event('click'));
        window.addEventListener('resize', this.onWindowResize.bind(this));
        document.addEventListener('keydown', this.onKeyDown.bind(this));

       // Import generateMaze function and blockPositions array
    this.generateMaze = GenerateMaze;
    this.blockPositions = blockPositions;

    }
    

    /**
     * Generates a new maze
     * Loops into the maze, removes old blocks and adds new ones
     */
    onGenerateMaze()
    {
        var new_map = this.generateMaze(this.side);
        var new_player_path = [];
        var latency = 50;
        var self = this;
        var tween = null;
        for (var x = this.side; x > 0; x -= 1)
        {
            new_player_path[x] = [];
            for (var y = 1; y < this.side + 1; y += 1)
            {
                var delay = ((this.side - x) * latency) + ((this.side - y) * latency);
                // Inits player path
                new_player_path[x][y] = false;

                // Removes old mesh if needed
                if (typeof this.map[x] != 'undefined' && typeof this.map[x][y] != 'undefined' && typeof this.map[x][y] === 'object')
                {
                    tween = new TWEEN.Tween({scale: 1, y: this.thickness / 2, mesh: this.map[x][y]}).to({scale: 0, y: 0}, 200).delay(delay);
                    tween.onUpdate(this.onUpdateTweeningMesh);
                    tween.onComplete(function()
                    {
                        this.mesh.visible = false;
                        self.scene.remove(this.mesh);
                    });
                    tween.start();
                }

                // Removes player path if needed
                if (typeof this.player.path != 'undefined' && typeof this.player.path[x] != 'undefined' && typeof this.player.path[x][y] != 'undefined' && typeof this.player.path[x][y] === 'object')
                {
                    this.removePlayerPath(x, y, delay);
                }

                // Adds a new mesh if needed
                if (new_map[x][y] === 0)
                {
                    // Generates the mesh
                    var wall_geometry = new BoxGeometry(this.thickness, this.thickness, this.thickness, 1, 1, 1);
                    new_map[x][y] = new Mesh(wall_geometry, this.materials.grey);
                    new_map[x][y].visible = false;
                    new_map[x][y].position.set(x * this.thickness - ((this.side * this.thickness) / 2), 0, y * 20 - ((this.side * this.thickness) / 2));
                    this.scene.add(new_map[x][y]);

                    // Builds the related tween
                    tween = new TWEEN.Tween({scale: 0, y: 0, mesh: new_map[x][y]}).to({scale: 1, y: this.thickness / 2}, 300).delay(delay);
                    tween.onUpdate(this.onUpdateTweeningMesh);
                    tween.onStart(function()
                    {
                        this.mesh.visible = true;
                    });
                    tween.start();
                }
                else
                {
                    new_map[x][y] = false;
                }
            }
        }

        // Animates the end block
        var end_hide_tween = new TWEEN.Tween({scale: 1, y: this.thickness / 2, mesh: this.end}).to({scale: 0, y: 0}, 300);
        var end_show_tween = new TWEEN.Tween({scale: 0, y: 0, mesh: this.end}).to({
            scale: 1,
            y: this.thickness / 2
        }, 300).delay((this.side * 2) * latency);
        end_hide_tween.onUpdate(this.onUpdateTweeningMesh);
        end_show_tween.onUpdate(this.onUpdateTweeningMesh);
        end_show_tween.onStart(function()
        {
            this.mesh.visible = true;
        });
        end_hide_tween.onComplete(function()
        {
            this.mesh.visible = false;
        });
        if (this.end.scale != 0)
        {
            end_hide_tween.start();
        }
        end_show_tween.start();

        this.map = new_map;
        this.player.path = new_player_path;

        // Inits player
        this.player.mazePosition = {x: this.side - 1, z: this.side - 1};
        this.movePlayer(false);

        

    }


    checkBlockPosition() {
        var playerPosition = new Vector3(
            -((this.side * this.thickness) / 2) + this.player.mazePosition.x * this.thickness,
            0,
            -((this.side * this.thickness) / 2) + this.player.mazePosition.z * this.thickness
        );

        console.log(playerPosition); // Log the player position to the console
    
        
        var foundBlockPosition = false; // Flag to track if end position is found
    
        // Loop through blockPositions array
        for (var i = 0; i < this.blockPositions.length; i++) {
            var blockPos = this.blockPositions[i];
            var blockX = blockPos.x;
            var blockZ = blockPos.y;
            var blockPosition = new Vector3(
                -((this.side * this.thickness) / 2) + blockX * this.thickness,
                0,
                -((this.side * this.thickness) / 2) + blockZ * this.thickness
            );
    
            var distance = blockPosition.distanceTo(playerPosition);
            if (distance === 0) {
                // Player is close to a block specified in blockPositions
                foundBlockPosition = true; // Set flag to true
                break; // Exit the loop since action has been performed
            }
        }

    
        if (foundBlockPosition) {
            // Perform action if end position is found
            window.location.href = "page.html"; // Redirect to the desired page
        }
    }



    /**
     * Updates a mesh when doing a tween
     */
    onUpdateTweeningMesh ()
    {
        this.mesh.scale.y = this.scale;
        this.mesh.position.y = this.y;
    }

    /**
     * Removes a mesh from the player path
     * @param x
     * @param y
     * @param delay
     */
    removePlayerPath(x, y, delay)
    {
        var tween = new TWEEN.Tween({scale: 1, y: this.thickness / 8, mesh: this.player.path[x][y]}).to({
            scale: 0,
            y: this.thickness * 5
        }, 300).delay(delay);
        var self = this;
        this.player.path[x][y] = false;
        tween.onUpdate(function()
        {
            this.mesh.scale.set(this.scale, this.scale, this.scale);
            this.mesh.position.y = this.y;
        });
        tween.onComplete(function()
        {
            self.scene.remove(this.mesh);
        });
        tween.onStart(function()
        {
            this.mesh.visible = true;
        });
        tween.start();
    }

    /**
     * Inits the scene
     */
    initScene()
    {
        // Scene
        this.scene = new Scene();

        // Materials
        this.materials =
        {
            grey: new MeshLambertMaterial({color: 0xffffff, wireframe: false}),
            red: new MeshLambertMaterial({color: 0xf18260, ambient: 0xf18260, lineWidth: 1}),
            yellow: new MeshLambertMaterial({color: 0xffff00, wireframe: false}) // Yellow material

        };

        // Camera
        this.camera = new PerspectiveCamera(45, 1, 1, 2000);
        this.camera.clicked = false;

        // Lights
        this.scene.add(new AmbientLight(0xc9c9c9));
        var directional = new DirectionalLight(0xc9c9c9, 0.5);
        directional.position.set(0, 0.5, 1);
        this.scene.add(directional);

        // Player
        this.player = new Object3D();
        var head_mesh = new Mesh(new SphereGeometry(this.thickness / 2, 9, 9), this.materials.red);
        var body_mesh = new Mesh(new CylinderGeometry(this.thickness / 6, this.thickness / 2, this.thickness * 1.5, 12, 1), this.materials.red);
        this.player.add(head_mesh);
        this.player.add(body_mesh);
        head_mesh.position.y = this.thickness * 1.5;
        body_mesh.position.y = this.thickness;
        this.scene.add(this.player);

        // End of the maze
        this.end = new Mesh(new BoxGeometry(this.thickness, this.thickness, this.thickness, 1, 1, 1), this.materials.red);
        this.end.position.set(-((this.side / 2) * this.thickness) + (this.thickness * 2), 0, -((this.side / 2) * this.thickness) + (this.thickness * 2));
        this.end.scale.y = 0;
        this.end.visible = false;
        this.scene.add(this.end);

        // Camera helper
        var vertices = new Float32Array([
            0, 0, 0, // x, y, z coordinates for the first vertex
            Math.sqrt(3) * (this.side * this.thickness), 0, 0 // x, y, z coordinates for the second vertex
          ]);
          
          var geometry = new BufferGeometry();
          geometry.setAttribute('position', new BufferAttribute(vertices, 3));
        this.cameraHelper = new Line(geometry);
        this.scene.add(this.cameraHelper);
        this.cameraHelper.visible = false;
        this.cameraHelper.targetRotation = false;
        this.cameraHelper.rotation.set(0, 1.362275, 0.694716);

        // Renderer
        this.renderer = typeof WebGLRenderingContext != 'undefined' && window.WebGLRenderingContext ? new WebGLRenderer({antialias: true}) : new THREE.CanvasRenderer({});
        var newElement = document.createElement('div');
        this.wrapper.appendChild(newElement);    };

    /**
     * Keydown action
     * @param evt
     */
    onKeyDown (evt)
    {
        // Gets the direction depending on the pressed key
        var code = evt.keyCode;
        var direction = {x: 0, z: 0};
        var directions =
        {
            37: {x: 1, z: 0},
            39: {x: -1, z: 0},
            38: {x: 0, z: 1},
            40: {x: 0, z: -1}
        };
        if (typeof directions[code] != 'undefined')
        {
            direction = directions[code];
        }
        else
        {
            return;
        }

        var x = this.player.mazePosition.x;
        var z = this.player.mazePosition.z;

        var target_block = this.map[x + direction.x][z + direction.z];
        if (target_block === false)
        {
            // If the player moves forward, adds a block to the path
            if (this.player.path[x + direction.x][z + direction.z] === false)
            {
                // Builds the mesh
                this.player.path[x][z] = new Mesh(new BoxGeometry(this.thickness, this.thickness / 4, this.thickness, 1, 1, 1), this.materials.red);
                this.player.path[x][z].position.set(-((this.side * this.thickness) / 2) + x * this.thickness, this.thickness * 5, -((this.side * this.thickness) / 2) + z * this.thickness);
                this.player.path[x][z].scale.set(0, 0, 0);
                this.scene.add(this.player.path[x][z]);

                // Builds the related tween
                var tween = new TWEEN.Tween({scale: 0, y: this.thickness * 5, mesh: this.player.path[x][z]}).to({
                    scale: 1,
                    y: this.thickness / 8
                }, 300).delay(150);
                tween.onUpdate(function()
                {
                    this.mesh.scale.set(this.scale, this.scale, this.scale);
                    this.mesh.position.y = this.y;
                });
                tween.start();
            }
            // If he goes back, removes one
            else
            {
                this.removePlayerPath(x + direction.x, z + direction.z, 0);
            }

            // Updates the player position
            this.player.mazePosition.x += direction.x;
            this.player.mazePosition.z += direction.z;

             // Store the player's position in localStorage
    localStorage.setItem('playerX', this.player.mazePosition.x);
    localStorage.setItem('playerZ', this.player.mazePosition.z);

            this.movePlayer(true);

            this.checkBlockPosition();  // Add this lines

        }
    }



    /**
     * Moves the player depending on its position on the maze
     * @param animate
     */
    movePlayer(animate)
    {
        var storedPlayerX = localStorage.getItem('playerX');
    var storedPlayerZ = localStorage.getItem('playerZ');

    if (storedPlayerX !== null && storedPlayerZ !== null) {
        this.player.mazePosition = { x: parseInt(storedPlayerX), z: parseInt(storedPlayerZ) };
    } else {
        // Set the default starting position
        this.player.mazePosition = { x: this.side - 1, z: this.side - 1 };
    } 
        var from = {height: -Math.PI, x: this.player.position.x, z: this.player.position.z, mesh: this.player};
        var to = {
            height: Math.PI,
            x: -((this.side * this.thickness) / 2) + this.player.mazePosition.x * this.thickness,
            z: -((this.side * this.thickness) / 2) + this.player.mazePosition.z * this.thickness
        };
        var tween = new TWEEN.Tween(from).to(to, animate ? 300 : 0);
        var self = this;
        tween.onUpdate(function()
        {
            this.mesh.position.x = this.x;
            this.mesh.position.y = (Math.cos(this.height) + 1) * (self.thickness / 4);
            this.mesh.position.z = this.z;
        });

        // End of the maze: starts again
        // tween.onComplete(function()
        // {
        //     if (self.player.mazePosition.x === 2 && self.player.mazePosition.z === 2)
        //     {
        //         self.onGenerateMaze();
        //     }
        // });
        tween.start();
    }

    /**
     * Moving the mouse over the container: sets a target rotation for the camera helper
     * @param evt
     */
    onMouseMove (evt)
    {
        if (this.camera.clicked !== false)
        {
            var target_rotation = {
                z: this.cameraHelper.rotation.z + ((evt.pageY - this.camera.clicked.y) / 800),
                y: this.cameraHelper.rotation.y + ((this.camera.clicked.x - evt.pageX) / 800)
            };
            if (target_rotation.z < 0)
            {
                target_rotation.z = 0;
            }
            if (target_rotation.z > (Math.PI / 2) - 0.1)
            {
                target_rotation.z = Math.PI / 2 - 0.1;
            }
            this.cameraHelper.targetRotation = target_rotation;
        }
    }

    /**
     * Mouse down: starts dragging the maze
     * @param evt
     */
    onMouseDown(evt)
    {
        evt.preventDefault();
        this.camera.clicked = {x: evt.pageX, y: evt.pageY};
    }

    /**
     * Mouse up: stops dragging the maze
     * @param evt
     */
    onMouseUp(evt)
    {
        evt.preventDefault();
        this.camera.clicked = false;
    }

    /**
     * Render loop
     * Sets the camera position and renders the scene
     */
    render()
    {
        requestAnimationFrame(this.render.bind(this));
        TWEEN.update();
        if (this.cameraHelper.targetRotation !== false)
        {
            this.cameraHelper.rotation.z += (this.cameraHelper.targetRotation.z - this.cameraHelper.rotation.z) / 10;
            this.cameraHelper.rotation.y += (this.cameraHelper.targetRotation.y - this.cameraHelper.rotation.y) / 10;
        }
        this.camera.position = this.cameraHelper.geometry.vertices[1].clone().applyProjection(this.cameraHelper.matrixWorld);
        this.camera.lookAt(this.scene.position);
        this.renderer.render(this.scene, this.camera);
    }

    /**
     * Sets the scene dimensions on window resize
     */
    onWindowResize()
    {
        var width = window.innerWidth || window.document.body.clientWidth;
        var height = window.innerHeight || window.document.body.clientHeight;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    
}

document.addEventListener('DOMContentLoaded', (event) => {
    let maze = new ThreeMaze('#wrapper', '#button');
});

