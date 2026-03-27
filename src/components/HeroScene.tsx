import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, Box, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { useScrollProgress } from '../hooks/useScrollProgress';

function AtomicRing({ radius, speed, color, rotationAxis }: {
  radius: number;
  speed: number;
  color: string;
  rotationAxis: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed * rotationAxis[0];
      ref.current.rotation.y += delta * speed * rotationAxis[1];
      ref.current.rotation.z += delta * speed * rotationAxis[2];
    }
  });

  return (
    <Torus ref={ref} args={[radius, 0.04, 16, 100]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        transparent
        opacity={0.85}
      />
    </Torus>
  );
}

function FloatingCube({ position, color, speed }: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + speed) * 0.3;
    }
  });

  return (
    <Box ref={ref} position={position} args={[0.25, 0.25, 0.25]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} wireframe />
    </Box>
  );
}

function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={ref} args={[0.7, 64, 64]}>
      <MeshDistortMaterial
        color="#00d4ff"
        emissive="#00d4ff"
        emissiveIntensity={0.4}
        distort={0.4}
        speed={2}
        transparent
        opacity={0.85}
      />
    </Sphere>
  );
}

function SceneGroup() {
  const groupRef = useRef<THREE.Group>(null!);
  const mouse = useMouseParallax();
  const { scrollY } = useScrollProgress();

  useFrame(() => {
    if (groupRef.current) {
      const targetX = mouse.current.normalizedX * 0.4;
      const targetY = mouse.current.normalizedY * 0.4;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
      const scrollScale = 1 - scrollY.current * 0.0003;
      const clampedScale = Math.max(0.4, Math.min(1, scrollScale));
      groupRef.current.scale.setScalar(clampedScale);
    }
  });

  return (
    <group ref={groupRef}>
      <CoreSphere />
      <AtomicRing radius={1.5} speed={0.5} color="#00d4ff" rotationAxis={[1, 0.2, 0]} />
      <AtomicRing radius={1.8} speed={0.35} color="#8b5cf6" rotationAxis={[0.3, 1, 0.1]} />
      <AtomicRing radius={2.1} speed={0.25} color="#f472b6" rotationAxis={[0.1, 0.3, 1]} />
      <FloatingCube position={[2.5, 0.5, 0]} color="#00d4ff" speed={0.8} />
      <FloatingCube position={[-2.5, -0.5, 0]} color="#8b5cf6" speed={0.6} />
      <FloatingCube position={[0, 2.5, -1]} color="#f472b6" speed={1.0} />
      <FloatingCube position={[0, -2.5, 0.5]} color="#06b6d4" speed={0.7} />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
      <pointLight position={[0, 0, 8]} intensity={0.8} color="#f472b6" />
      <Stars radius={80} depth={50} count={3000} factor={4} />
      <SceneGroup />
    </Canvas>
  );
}
