import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei';

export function Color(props) {
  const { nodes, materials, animations } = useGLTF('/color.gltf');
  const group = useRef();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001
    }
  });

  return (
    <group ref={group} {...props}>
      <group scale={0.02}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh geometry={nodes.Object_9.geometry} material={materials.z_kt1_stardust01__Opacity__F} skeleton={nodes.Object_9.skeleton} />
      </group>
    </group>
  );
}

useGLTF.preload('/color.gltf');
