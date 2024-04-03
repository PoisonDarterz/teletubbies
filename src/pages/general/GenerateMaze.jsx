import React, { useEffect, useState } from 'react';
import * as THREE from 'three'; // Import Three.js library

const GenerateMaze = ({ onGenerateMaze }) => {
    const [blockPositions, setBlockPositions] = useState([]);
    const [map, setMap] = useState([]);

    useEffect(() => {
        generateMaze(22); // Call generateMaze method with the desired size
    }, []);

    const generateMaze = (size) => {
        const materialsblock = {
            blue: new THREE.MeshBasicMaterial({ color: 0x0000ff }), // blue
            purple: new THREE.MeshBasicMaterial({ color: 0x800080 }), // purple
            green: new THREE.MeshBasicMaterial({ color: 0x008000 }), // green
            navy: new THREE.MeshBasicMaterial({ color: 0x000080 }), // navy
            teal: new THREE.MeshBasicMaterial({ color: 0x008080 })  // teal
        };

        // The specific maze you want to generate
        const map = [null,
            [null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [null, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
            [null, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
            [null, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
            [null, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
            [null, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 0],
            [null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
            [null, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [null, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [null, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [null, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [null, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0],
            [null, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
            [null, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
            [null, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            [null, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [null, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [null, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
            [null, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
            [null, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0],
            [null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

        // The positions of the blue blocks
        const blockPositions = [];

        let value = 1;

        // Iterate over the map
        for (let x = 1; x < map.length; x++) {
            for (let y = 1; y < map[x].length; y++) {
                // Check if the position in the map is 2 (blue block)
                if (map[x][y] === 2) {
                    const blueBlockGeometry = new THREE.BoxGeometry(1, 1, 1); // Adjust dimensions as needed
                    let blueBlock;
                    switch (value) {
                        case 1:
                            blueBlock = new THREE.Mesh(blueBlockGeometry, materialsblock.blue);
                            break;
                        case 2:
                            blueBlock = new THREE.Mesh(blueBlockGeometry, materialsblock.purple);
                            break;
                        case 3:
                            blueBlock = new THREE.Mesh(blueBlockGeometry, materialsblock.green);
                            break;
                        case 4:
                            blueBlock = new THREE.Mesh(blueBlockGeometry, materialsblock.teal);
                            break;
                        case 5:
                            blueBlock = new THREE.Mesh(blueBlockGeometry, materialsblock.navy);
                            break;
                        default:
                            blueBlock = new THREE.Mesh(blueBlockGeometry, materialsblock.blue);
                    }
                    value++;
                    blueBlock.position.set(x, 0.5, y); // Adjust position as needed
                    // this.scene.add(blueBlock); // Add the blue block to the scene
                    blockPositions.push({ x, y }); // Add the position to blockPositions
                }
            }
        }

        console.log(blockPositions); // Log the positions of the blocks to the console
        console.log(map);

        // Set the state with blockPositions and map
        setBlockPositions(blockPositions);
        setMap(map);
    }

    return (
        <div>
            This is the MazeGenerator component
        </div>
    );
}

module.exports = {
    GenerateMaze,
    blockPositions,
};