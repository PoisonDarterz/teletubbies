// ThreeMaze.js
import * as THREE from './three.min.js';
import * as TWEEN from './tween.min.js'; // Import TWEEN with correct casing


// Define the ThreeMaze constructor
export function generateMaze() {
    // Constructor logic (if needed)
    // For example, you can initialize properties here
    this.materialsblock = {
        blue: new THREE.MeshBasicMaterial({ color: 0x0000ff }), // blue
        purple: new THREE.MeshBasicMaterial({ color: 0x800080 }), // purple
        green: new THREE.MeshBasicMaterial({ color: 0x008000 }), // green
        navy: new THREE.MeshBasicMaterial({ color: 0x000080 }), // navy
        teal: new THREE.MeshBasicMaterial({ color: 0x008080 })  // teal
    };
}
// Define the generateMaze method in the ThreeMaze prototype
generateMaze.prototype.generateMaze = function(size) {
    // The specific maze you want to generate
    var map = [null,
        [null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [null,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0],
        [null,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0],
        [null,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0],
        [null,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0],
        [null,0,1,1,2,1,1,1,1,1,1,1,2,1,1,0,1,1,1,1,1,0],
        [null,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
        [null,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0],
        [null,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0],
        [null,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
        [null,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
        [null,0,1,0,1,1,1,0,1,1,1,1,1,1,2,1,1,1,1,1,1,0],
        [null,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0],
        [null,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0],
        [null,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0],
        [null,0,1,1,1,1,1,0,1,1,1,0,2,1,1,1,1,1,1,1,1,0],
        [null,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0],
        [null,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0],
        [null,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0],
        [null,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,1,1,0],
        [null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

        let value = 0;
        // Iterate over the map
    for (var x = 1; x < map.length; x++) {
        for (var y = 1; y < map[x].length; y++) {
            // Check if the position in the map is 2 (blue block)
            if (map[x][y] === 2) {
                var blueBlockGeometry = new THREE.CubeGeometry(this.thickness, this.thickness, this.thickness, 1, 1, 1);
                switch (value) {
                    case 1:
                        var blueBlock = new THREE.Mesh(blueBlockGeometry, this.materialsblock.blue);
                        break;
                    case 2:
                        var blueBlock = new THREE.Mesh(blueBlockGeometry, this.materialsblock.purple);
                        break;
                    case 3:
                        var blueBlock = new THREE.Mesh(blueBlockGeometry, this.materialsblock.green);
                        break;
                    case 4:
                        var blueBlock = new THREE.Mesh(blueBlockGeometry, this.materialsblock.teal);
                        break;
                    case 5:
                        var blueBlock = new THREE.Mesh(blueBlockGeometry, this.materialsblock.navy);
                        break;
                }
                // Calculate block position and add to the scene
                blueBlock.position.set(x * this.thickness - ((this.side * this.thickness) / 2), this.thickness / 2, y * this.thickness - ((this.side * this.thickness) / 2));
                this.scene.add(blueBlock); // Add the blue block to the scene
                this.blockPositions.push({ x: x, y: y }); // Add the position to blockPositions
            }
        }
    }

    console.log(this.blockPositions); // Log the positions of the blocks to the console
    console.log(map);
    return map;
};

// Export the generateMaze method and blockPositions property from the ThreeMaze prototype
export const blockPositions = [];
