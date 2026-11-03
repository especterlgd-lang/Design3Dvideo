import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";

// Objeto 3D simples: um cubo que gira em sincronia com o frame do vídeo.
export const Object3DTest: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const rotationY = interpolate(frame, [0, durationInFrames], [0, Math.PI * 2]);
  const rotationX = interpolate(frame, [0, durationInFrames], [0, Math.PI / 2]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} />
      <mesh rotation={[rotationX, rotationY, 0]}>
        <boxGeometry args={[1.6, 1.6, 1.6]} />
        <meshStandardMaterial color="#4fc3f7" metalness={0.3} roughness={0.35} />
      </mesh>
    </>
  );
};
