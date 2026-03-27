import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Cylinder, RoundedBox, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useInView } from 'framer-motion';

function Monitor() {
  return (
    <group position={[0, 0.3, 0]}>
      <RoundedBox args={[3, 2, 0.1]} radius={0.08} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#0f0f1a" metalness={0.6} roughness={0.2} />
      </RoundedBox>
      <RoundedBox args={[2.7, 1.7, 0.05]} radius={0.05} position={[0, 0.5, 0.06]}>
        <meshStandardMaterial color="#6B3FDB" emissive="#6B3FDB" emissiveIntensity={0.5} />
      </RoundedBox>
      <Cylinder args={[0.05, 0.05, 0.5, 8]} position={[0, -0.75, 0]}>
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </Cylinder>
      <RoundedBox args={[1.2, 0.06, 0.5]} radius={0.03} position={[0, -1.05, 0]}>
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
      </RoundedBox>
    </group>
  );
}

function Keyboard() {
  return (
    <group position={[0, -0.85, 0.8]}>
      <RoundedBox args={[2.4, 0.08, 0.8]} radius={0.04}>
        <meshStandardMaterial color="#111" metalness={0.7} roughness={0.3} />
      </RoundedBox>
      {[-0.25, 0, 0.25].map((z, i) => (
        <group key={i} position={[0, 0.05, z]}>
          {Array.from({ length: 10 }).map((_, j) => (
            <RoundedBox key={j} args={[0.18, 0.04, 0.18]} radius={0.02} position={[(j - 4.5) * 0.22, 0, 0]}>
              <meshStandardMaterial color="#222" metalness={0.5} roughness={0.4} />
            </RoundedBox>
          ))}
        </group>
      ))}
    </group>
  );
}

function FloatingParticles() {
  const particles = useRef<THREE.Points>(null!);
  useFrame((state) => {
    if (particles.current) particles.current.rotation.y = state.clock.elapsedTime * 0.05;
  });
  const positions = new Float32Array(Array.from({ length: 200 * 3 }, () => (Math.random() - 0.5) * 10));
  return (
    <points ref={particles}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial color="#FF4D00" size={0.04} transparent opacity={0.4} />
    </points>
  );
}

function WorkstationGroup() {
  const groupRef = useRef<THREE.Group>(null!);
  useFrame((state) => {
    if (groupRef.current) groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
  });
  return (
    <group ref={groupRef}>
      <Monitor />
      <Keyboard />
      <RoundedBox args={[0.25, 0.06, 0.4]} radius={0.08} position={[1.5, -0.85, 0.8]}>
        <meshStandardMaterial color="#111" metalness={0.7} roughness={0.3} />
      </RoundedBox>
      <Box args={[5, 0.1, 2.5]} position={[0, -0.95, 0.5]}>
        <meshStandardMaterial color="#0a0a0a" metalness={0.3} roughness={0.6} />
      </Box>
      <FloatingParticles />
    </group>
  );
}

export default function ThreeDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="demo"
      ref={ref}
      className="py-28 px-8"
      style={{ background: '#000000' }}
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="section-label mb-4">— 3D Туршлага</div>
            <h2 className="display-heading text-6xl md:text-7xl">
              Вэбийг <span style={{ color: 'var(--orange)' }}>3D</span>
              <br />
              Амилуул
            </h2>
          </div>
          <a href="#register">
            <button className="btn-primary">
              ▷ &nbsp;Сургалтад Элсэх
            </button>
          </a>
        </motion.div>

        <div className="divider mb-12" />

        {/* 3D Canvas — full width like sgapes video section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full overflow-hidden"
          style={{
            height: '520px',
            background: '#06020D',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '12px',
          }}
        >
          {/* Instruction chip */}
          <div
            className="absolute top-5 left-5 z-10 chip chip-ghost"
          >
            🖱️ &nbsp;Drag to rotate • Scroll to zoom
          </div>

          {/* Purple badge top-right like sgapes branding */}
          <div
            className="absolute top-5 right-5 z-10 chip chip-purple"
          >
            Live Demo
          </div>

          <Canvas camera={{ position: [4, 2, 5], fov: 55 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[5, 5, 5]} intensity={2} color="#FF4D00" />
            <pointLight position={[-5, 3, -5]} intensity={1.5} color="#6B3FDB" />
            <pointLight position={[0, -3, 0]} intensity={0.8} color="#9747FF" />
            <WorkstationGroup />
            <OrbitControls enablePan={false} minDistance={4} maxDistance={10} maxPolarAngle={Math.PI / 2} />
            <Environment preset="city" />
          </Canvas>
        </motion.div>

        {/* Stats — orange card like sgapes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 mt-6"
        >
          {[
            { value: '50+', label: 'Дасгал & Төсөл' },
            { value: '9.5', label: 'Долоо хоног' },
            { value: '∞', label: 'Насан туршийн хандалт' },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center py-6 px-4"
              style={{ background: i === 0 ? 'var(--orange)' : '#0D0D0D', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px' }}
            >
              <div className="font-condensed font-900 text-3xl text-white">{stat.value}</div>
              <div className="font-condensed text-xs uppercase tracking-widest text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
