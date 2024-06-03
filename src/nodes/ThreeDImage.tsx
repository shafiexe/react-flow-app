// ThreeDImage.tsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

interface BoxProps {
  image: string;
}

const Box: React.FC<BoxProps> = ({ image }) => {
  const meshRef = useRef<any>(null);
  const texture = useLoader(TextureLoader, image);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

interface ThreeDImageProps {
  image: string;
}

const ThreeDImage: React.FC<ThreeDImageProps> = ({ image }) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box image={image} />
    </Canvas>
  );
};

export default ThreeDImage;
