import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';

export function Star(props) {
  const { nodes, materials } = useGLTF('/Star.gltf');
  const groupRef = useRef();
  const [rotationSpeed, setRotationSpeed] = useState(0.001);

  useEffect(() => {
    const updateRotation = () => {
      if (groupRef.current) {
        groupRef.current.rotation.y += rotationSpeed;
      }
    };

    const interval = setInterval(updateRotation, 16);
    return () => clearInterval(interval);
  }, [rotationSpeed]);

  useEffect(() => {
    if (nodes && materials) {
      setRotationSpeed(0.001);
    }
  }, [nodes, materials]);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={177.063}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.material} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group> 
  );
}

useGLTF.preload('/Star.gltf');
