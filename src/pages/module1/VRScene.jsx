import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Environment } from '@react-three/drei';
import { Box, Sphere, Cylinder, Plane } from '@react-three/drei';

function VRScene() {
    return (
        <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color={'green'} />
    </Plane>
    <Box position={[-1.2, 0.5, -2]}>
        <meshStandardMaterial color={'orange'} />
    </Box>
    <Sphere position={[1.2, 0.5, -1]}>
        <meshStandardMaterial color={'yellow'} />
    </Sphere>
    <Cylinder position={[0, 0.6, 0]}>
        <meshStandardMaterial color={'red'} />
    </Cylinder>
    <Environment background={true} files={'/scenery.hdr'} />
    </Canvas>
    );
}

export default VRScene;