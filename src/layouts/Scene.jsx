import React, { useEffect, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Star } from '../components/Star';
function Scene() {
  const skyRef = useRef();
  useGLTF.preload('/Sky.gltf');

  useEffect(() => {
    if (skyRef.current && skyRef.current.startAnimation) {
      skyRef.current.startAnimation();
    }
  }, [skyRef]);

  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[-2, 5, -3]} intensity={1} />
      <Star visible={[1, 100, 100]} scale={2}  />
    </Canvas>
  );
}

export default Scene;
