import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

function SceneGroup() {
  const group = useRef<THREE.Group>(null!);
  // ... parallax + scroll hooks (өмнөхтэй ижил)

  useFrame((state) => {
    // Enhanced rotation + breathing effect
    group.current!.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    group.current!.scale.setScalar(
      0.9 + Math.sin(state.clock.elapsedTime * 1.2) * 0.1,
    );
  });

  return (
    <group ref={group}>
      {/* Core + rings + floating elements (same but emissive boosted) */}
      {/* ... */}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      className="absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[15, 10, 15]} intensity={2.5} color="#ff4d00" />
      <Stars radius={120} depth={80} count={4500} factor={5} saturation={0} />
      <SceneGroup />
    </Canvas>
  );
}
