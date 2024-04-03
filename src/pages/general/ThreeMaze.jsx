import * as THREE from './libs/three.min.js';
import * as TWEEN from '@tweenjs/tween.js';
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';
import React, { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls
import {MazeGenerator} from './ThreeMaze'; // Import generateMaze module
import { MeshLambertMaterial } from 'three';
import { AmbientLight } from 'three';
import { DirectionalLight } from 'three';
import { Object3D } from 'three';
import { SphereGeometry } from 'three';
import { CylinderGeometry, Mesh } from 'three';
import { BoxGeometry } from 'three';
import { Vector3 } from 'three';
import { GenerateMaze } from './GenerateMaze';
import { BufferGeometry, Float32BufferAttribute, Line } from 'three';

// Define MazeApp component
const MazeApp = () => {
    useEffect(() => {
        const wrapper = document.querySelector('.three');
        const button = document.querySelector('.generate');
        const { blockPositions, render } = GenerateMaze({});

        // Maze class converted to React componentf
        class ThreeMaze {
            constructor(wrapper, button) {
                this.state = {
                    side: 21,
                    thickness: 20,
                    map: [],
                    player: {
                        path: [],
                        mazePosition: { x: 0, z: 0 },
                    },
                    end: {},
                    materials: {},
                    blockPositions: [],
                };

                this.wrapper = wrapper;
                this.camera = {};
                this.cameraHelper = {};
                this.scene = {};
                this.renderer = {};

                this.initScene();
                this.onWindowResize();
                this.render();

                this.wrapper.addEventListener('mousemove', this.onMouseMove.bind(this));
                this.wrapper.addEventListener('mousedown', this.onMouseDown.bind(this));
                this.wrapper.addEventListener('mouseup', this.onMouseUp.bind(this));
                button.addEventListener('click', this.onGenerateMaze.bind(this));
                button.dispatchEvent(new Event('click'));
                window.addEventListener('resize', this.onWindowResize.bind(this));
                document.addEventListener('keydown', this.onKeyDown.bind(this));
                this.generateMaze = GenerateMaze;
                this.blockPositions = blockPositions;
            }

            // Inside the ThreeMaze class
            initScene() {
                // Scene
                this.scene = new Scene();

                // Materials
                this.materials = {
                    grey: new MeshLambertMaterial({ color: 0xffffff, wireframe: false }),
                    red: new MeshLambertMaterial({ color: 0xf18260, ambient: 0xf18260, lineWidth: 1 }),
                    yellow: new MeshLambertMaterial({ color: 0xffff00, wireframe: false }) // Yellow material
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
                var geometry = new BufferGeometry();
                var vertices = new Float32Array([
                    0, 0, 0, // x, y, z coordinates for the first vertex
                    Math.sqrt(3) * (this.side * this.thickness), 0, 0 // x, y, z coordinates for the second vertex
                ]);
                geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));

                this.cameraHelper = new Line(geometry);
                this.scene.add(this.cameraHelper);
                this.cameraHelper.visible = false;
                this.cameraHelper.targetRotation = false;
                this.cameraHelper.rotation.set(0, 1.362275, 0.694716);

                // Renderer
                this.renderer = typeof WebGLRenderingContext !== 'undefined' && window.WebGLRenderingContext ? new WebGLRenderer({ antialias: true }) : new THREE.CanvasRenderer({});
                this.wrapper.appendChild(this.renderer.domElement);
            };

            onGenerateMaze = () => {
                const new_map = this.generateMaze(this.state.side); // Assuming side is stored in component state
                const new_player_path = [];
                const latency = 50;
                const self = this;
                let tween = null;

                for (let x = this.state.side; x > 0; x -= 1) { // Assuming side is stored in component state
                    new_player_path[x] = [];

                    for (let y = 1; y < this.state.side + 1; y += 1) { // Assuming side is stored in component state
                        const delay = ((this.state.side - x) * latency) + ((this.state.side - y) * latency);

                        // Initialize player path
                        new_player_path[x][y] = false;

                        // Remove old mesh if needed
                        if (this.state.map[x] && this.state.map[x][y] && typeof this.state.map[x][y] === 'object') {
                            tween = new TWEEN.Tween({ scale: 1, y: this.state.thickness / 2, mesh: this.state.map[x][y] })
                                .to({ scale: 0, y: 0 }, 200)
                                .delay(delay)
                                .onUpdate(this.onUpdateTweeningMesh)
                                .onComplete(function () {
                                    this.mesh.visible = false;
                                    self.scene.remove(this.mesh);
                                });
                            tween.start();
                        }

                        // Remove player path if needed
                        if (
                            this.state.player.path &&
                            this.state.player.path[x] &&
                            this.state.player.path[x][y] &&
                            typeof this.state.player.path[x][y] === 'object'
                        ) {
                            this.removePlayerPath(x, y, delay);
                        }

                        // Add a new mesh if needed
                        if (new_map[x][y] === 0) {
                            // Generate the mesh
                            const wall_geometry = new BoxGeometry(this.state.thickness, this.state.thickness, this.state.thickness, 1, 1, 1);
                            new_map[x][y] = new Mesh(wall_geometry, this.state.materials.grey);
                            new_map[x][y].visible = false;
                            new_map[x][y].position.set(x * this.state.thickness - (this.state.side * this.state.thickness) / 2, 0, y * 20 - (this.state.side * this.state.thickness) / 2);
                            this.scene.add(new_map[x][y]);

                            // Build the related tween
                            tween = new TWEEN.Tween({ scale: 0, y: 0, mesh: new_map[x][y] })
                                .to({ scale: 1, y: this.state.thickness / 2 }, 300)
                                .delay(delay)
                                .onUpdate(this.onUpdateTweeningMesh)
                                .onStart(function () {
                                    this.mesh.visible = true;
                                });
                            tween.start();
                        } else {
                            new_map[x][y] = false;
                        }
                    }
                }

                // Animate the end block
                const end_hide_tween = new TWEEN.Tween({ scale: 1, y: this.state.thickness / 2, mesh: this.state.end })
                    .to({ scale: 0, y: 0 }, 300);
                const end_show_tween = new TWEEN.Tween({ scale: 0, y: 0, mesh: this.state.end })
                    .to({ scale: 1, y: this.state.thickness / 2 }, 300)
                    .delay((this.state.side * 2) * latency);
                end_hide_tween.onUpdate(this.onUpdateTweeningMesh);
                end_show_tween.onUpdate(this.onUpdateTweeningMesh);
                end_show_tween.onStart(function () {
                    this.mesh.visible = true;
                });
                end_hide_tween.onComplete(function () {
                    this.mesh.visible = false;
                });
                if (this.state.end.scale !== 0) {
                    end_hide_tween.start();
                }
                end_show_tween.start();

                // Update the state with new_map, new_player_path, and player position
                this.setState({
                    map: new_map,
                    player: {
                        ...this.state.player,
                        path: new_player_path,
                        mazePosition: { x: this.state.side - 1, z: this.state.side - 1 },
                    },
                });

                // Move the player
                this.movePlayer(false);
            };


            checkBlockPosition = () => {
                const playerX = this.state.player.mazePosition.x;
                const playerZ = this.state.player.mazePosition.z;
            
                let foundBlockPosition = false; // Flag to track if end position is found
            
                // Check if the value at new_map[playerX][playerZ] is 2
                if (this.new_map[playerX][playerZ] === 2) {
                    foundBlockPosition = true;
                }
            
                if (foundBlockPosition) {
                    // Perform action if end position is found
                    window.location.href = "page.html"; // Redirect to the desired page
                }
            };

            onUpdateTweeningMesh = () => {
                this.setState(prevState => ({
                    mesh: {
                        ...prevState.mesh,
                        scale: {
                            ...prevState.mesh.scale,
                            y: this.state.scale
                        },
                        position: {
                            ...prevState.mesh.position,
                            y: this.state.y
                        }
                    }
                }));
            };

            removePlayerPath = (x, y, delay) => {
                const tween = new TWEEN.Tween({ scale: 1, y: this.state.thickness / 8, mesh: this.state.player.path[x][y] })
                    .to({ scale: 0, y: this.state.thickness * 5 }, 300)
                    .delay(delay);
                const self = this;
                this.setState(prevState => ({
                    player: {
                        ...prevState.player,
                        path: {
                            ...prevState.player.path,
                            [x]: {
                                ...prevState.player.path[x],
                                [y]: false
                            }
                        }
                    }
                }));
                tween.onUpdate(() => {
                    this.setState(prevState => ({
                        mesh: {
                            ...prevState.mesh,
                            scale: {
                                ...prevState.mesh.scale,
                                x: this.state.scale,
                                y: this.state.scale,
                                z: this.state.scale
                            },
                            position: {
                                ...prevState.mesh.position,
                                y: this.state.y
                            }
                        }
                    }));
                });
                tween.onComplete(function () {
                    self.setState(prevState => ({
                        scene: {
                            ...prevState.scene,
                            remove: {
                                ...prevState.scene.remove,
                                mesh: this.state.mesh
                            }
                        }
                    }));
                });
                tween.onStart(function () {
                    this.setState(prevState => ({
                        mesh: {
                            ...prevState.mesh,
                            visible: true
                        }
                    }));
                });
                tween.start();
            };

            onKeyDown = (evt) => {
                // Gets the direction depending on the pressed key
                const code = evt.keyCode;
                let direction = { x: 0, z: 0 };
                const directions = {
                    37: { x: 1, z: 0 },
                    39: { x: -1, z: 0 },
                    38: { x: 0, z: 1 },
                    40: { x: 0, z: -1 }
                };

                if (directions[code] !== undefined) {
                    direction = directions[code];
                } else {
                    return;
                }

                const x = this.player.mazePosition.x;
                const z = this.player.mazePosition.z;

                const target_block = this.map[x + direction.x][z + direction.z];
                if (target_block === false) {
                    // If the player moves forward, adds a block to the path
                    if (this.player.path[x + direction.x][z + direction.z] === false) {
                        // Builds the mesh
                        this.player.path[x][z] = new Mesh(
                            new BoxGeometry(this.thickness, this.thickness / 4, this.thickness, 1, 1, 1),
                            this.materials.red
                        );
                        this.player.path[x][z].position.set(
                            -((this.side * this.thickness) / 2) + x * this.thickness,
                            this.thickness * 5,
                            -((this.side * this.thickness) / 2) + z * this.thickness
                        );
                        this.player.path[x][z].scale.set(0, 0, 0);
                        this.scene.add(this.player.path[x][z]);

                        // Builds the related tween
                        const tween = new TWEEN.Tween({ scale: 0, y: this.thickness * 5, mesh: this.player.path[x][z] }).to(
                            { scale: 1, y: this.thickness / 8 },
                            300
                        ).delay(150);
                        tween.onUpdate(() => {
                            this.mesh.scale.set(this.scale, this.scale, this.scale);
                            this.mesh.position.y = this.y;
                        });
                        tween.start();
                    } else {
                        this.removePlayerPath(x + direction.x, z + direction.z, 0);
                    }

                    // Updates the player position
                    this.player.mazePosition.x += direction.x;
                    this.player.mazePosition.z += direction.z;

                    // Store the player's position in localStorage
                    localStorage.setItem('playerX', this.player.mazePosition.x);
                    localStorage.setItem('playerZ', this.player.mazePosition.z);

                    this.movePlayer(true);

                    this.checkBlockPosition(); // Add these lines
                }
            };

            movePlayer = (animate) => {
                const storedPlayerX = localStorage.getItem('playerX');
                const storedPlayerZ = localStorage.getItem('playerZ');

                if (storedPlayerX !== null && storedPlayerZ !== null) {
                    this.player.mazePosition = { x: parseInt(storedPlayerX), z: parseInt(storedPlayerZ) };
                } else {
                    // Set the default starting position
                    this.player.mazePosition = { x: this.side - 1, z: this.side - 1 };
                }

                const from = { height: -Math.PI, x: this.player.position.x, z: this.player.position.z, mesh: this.player };
                const to = {
                    height: Math.PI,
                    x: -((this.side * this.thickness) / 2) + this.player.mazePosition.x * this.thickness,
                    z: -((this.side * this.thickness) / 2) + this.player.mazePosition.z * this.thickness
                };

                const tween = new TWEEN.Tween(from).to(to, animate ? 300 : 0);
                const self = this;

                tween.onUpdate(function () {
                    this.mesh.position.x = this.x;
                    this.mesh.position.y = (Math.cos(this.height) + 1) * (self.thickness / 4);
                    this.mesh.position.z = this.z;
                });

                tween.start();
            };

            onMouseMove = (evt) => {
                if (this.camera.clicked !== false) {
                    const target_rotation = {
                        z: this.cameraHelper.rotation.z + ((evt.pageY - this.camera.clicked.y) / 800),
                        y: this.cameraHelper.rotation.y + ((this.camera.clicked.x - evt.pageX) / 800)
                    };
                    if (target_rotation.z < 0) {
                        target_rotation.z = 0;
                    }
                    if (target_rotation.z > (Math.PI / 2) - 0.1) {
                        target_rotation.z = Math.PI / 2 - 0.1;
                    }
                    this.cameraHelper.targetRotation = target_rotation;
                }
            };

            onMouseDown = (evt) => {
                evt.preventDefault();
                this.camera.clicked = { x: evt.pageX, y: evt.pageY };
            };


            

            onMouseUp = (evt) => {
                evt.preventDefault();
                this.camera.clicked = false;
            };
            render = () => {
                // console.log('Camera Helper:', this.cameraHelper);
                // console.log('Camera Helper Geometry:', this.cameraHelper.geometry);
                // console.log('Camera Helper Vertices:', this.cameraHelper.geometry.vertices);

                requestAnimationFrame(this.render);
                TWEEN.update();

                if (this.cameraHelper && this.cameraHelper.geometry && this.cameraHelper.geometry.getAttribute('position')) {
                    var positionAttribute = this.cameraHelper.geometry.getAttribute('position');
                    var vertex = new Vector3().fromBufferAttribute(positionAttribute, 1); // get the second vertex
                    this.camera.position.copy(vertex).applyMatrix4(this.cameraHelper.matrixWorld);
                }

                this.camera.lookAt(this.scene.position);
                this.renderer.render(this.scene, this.camera);
            };


            onWindowResize = () => {
                const width = window.innerWidth || document.body.clientWidth;
                const height = window.innerHeight || document.body.clientHeight;
                this.renderer.setSize(width, height);
                this.camera.aspect = width / height;
                this.camera.updateProjectionMatrix();
            };

        }

        new ThreeMaze(wrapper, button);

        // Cleanup function on unmount
        return () => {
            // Cleanup code if needed
        };
    }, []);

    return (
        <div>
            <div className="three">
                <div className="button-wrapper">
                    <button className="generate">
                        Rebuild maze
                    </button>
                </div>
            </div>
            <div className="icon-container">
                <img src="chatroom-icon.png" alt="Chatroom" className="icon" />
                <img src="profile-icon.png" alt="Profile" className="icon" />
                <img src="third-icon.png" alt="Third icon" className="icon" />
            </div>
        </div>
    );
};

export default MazeApp;
