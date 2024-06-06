// src/RotatingCylinder.js
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Cylinder = () => {
    const meshRef = useRef();

    // Cylinder dimensions and position
    const cylinderHeight = 4; // Height of the cylinder
    const cylinderRadiusTop = 2; // Radius of the top
    const cylinderRadiusBottom = 2; // Radius of the bottom
    const cylinderPosition = [0, 0, 0]; // Position of the cylinder (x, y, z)

    // Rotate the cylinder around the Y-axis
    useFrame(() => {
        meshRef.current.rotation.y += 0.03;
        meshRef.current.rotation.x += 0.03;
    });

    // Create the texture with text
    const createTextTexture = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 512;
        canvas.height = 512;
        context.fillStyle = '#FF715B';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#000000';
        context.font = '48px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText('SKILLS', canvas.width, canvas.height / 2);
        context.fillText('SKILLS', 0, canvas.height / 2);
        context.fillText('SKILLS', canvas.width / 2, canvas.height / 2);
        return new THREE.CanvasTexture(canvas);
    };

    const texture = useMemo(() => createTextTexture(), []);

    return (
        <mesh ref={meshRef} position={cylinderPosition}>
            <cylinderGeometry args={[cylinderRadiusTop, cylinderRadiusBottom, cylinderHeight, 32]} />
            <meshBasicMaterial map={texture} />
        </mesh>
    );
};

const RotatingCylinder = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[0, 0, 0]} />
            <Cylinder />
        </Canvas>
    );
};

export default RotatingCylinder;
