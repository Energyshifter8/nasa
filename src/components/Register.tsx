import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Cone, Cylinder, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useInView } from 'framer-motion';

function Rocket() {
  const groupRef = useRef<THREE.Group>(null!);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.6;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.25;
    }
  });
  return (
    <group ref={groupRef}>
      <Cylinder args={[0.2, 0.25, 1.2, 16]}>
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
      </Cylinder>
      <Cone args={[0.2, 0.6, 16]} position={[0, 0.9, 0]}>
        <meshStandardMaterial color="#FF4D00" emissive="#FF4D00" emissiveIntensity={0.6} metalness={0.7} />
      </Cone>
      <RoundedBox args={[0.08, 0.08, 0.08]} radius={0.01} position={[0, 0.25, 0.22]}>
        <meshStandardMaterial color="#6B3FDB" emissive="#6B3FDB" emissiveIntensity={1} />
      </RoundedBox>
      {[0, 120, 240].map((deg, i) => (
        <group key={i} rotation={[0, (deg * Math.PI) / 180, 0]}>
          <Cone args={[0.1, 0.35, 4]} position={[0.2, -0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color="#6B3FDB" emissive="#6B3FDB" emissiveIntensity={0.3} />
          </Cone>
        </group>
      ))}
      <Cone args={[0.12, 0.4, 16]} position={[0, -0.85, 0]} rotation={[Math.PI, 0, 0]}>
        <meshStandardMaterial color="#FF4D00" emissive="#FF4D00" emissiveIntensity={2.5} transparent opacity={0.9} />
      </Cone>
    </group>
  );
}

export default function Register() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="register"
      ref={ref}
      className="py-28 px-8"
      style={{ background: '#06020D' }}
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-label mb-4">— Эхлэх Цаг Болсон</div>
          <h2 className="display-heading text-6xl md:text-8xl">
            Ирээдүйгээ
            <br />
            <span style={{ color: 'var(--orange)' }}>Бүтээ</span>
          </h2>
        </motion.div>

        <div className="divider mb-12" />

        {/* Two column: form + 3D rocket */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px' }}>

          {/* Left — form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="p-10"
            style={{ background: '#0D0D0D', borderRight: '1px solid rgba(255,255,255,0.07)' }}
          >
            <h3 className="font-condensed font-800 text-2xl text-white uppercase tracking-wide mb-8">
              Бүртгэлийн Маягт
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Таны нэр"
                className="w-full px-4 py-3 font-condensed text-white placeholder:text-white/25 transition-colors duration-200 outline-none"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--purple)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
              <input
                type="email"
                placeholder="И-мэйл хаяг"
                className="w-full px-4 py-3 font-condensed text-white placeholder:text-white/25 transition-colors duration-200 outline-none"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--purple)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
              <input
                type="tel"
                placeholder="Утасны дугаар"
                className="w-full px-4 py-3 font-condensed text-white placeholder:text-white/25 transition-colors duration-200 outline-none"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--purple)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <button className="btn-primary w-full justify-center mt-6 py-4 text-base">
              🚀 &nbsp;Одоо Бүртгүүлэх
            </button>

            <div className="flex flex-wrap gap-4 mt-6">
              {['✅ Насан туршийн хандалт', '🎓 Сертификат', '💬 Discord'].map((item) => (
                <span key={item} className="font-condensed text-xs tracking-wide text-white/40 uppercase">{item}</span>
              ))}
            </div>
          </motion.div>

          {/* Right — rocket + tagline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative flex flex-col items-center justify-center"
            style={{ background: '#06020D', minHeight: '420px' }}
          >
            <div style={{ height: '260px', width: '100%' }}>
              <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[3, 3, 3]} intensity={3} color="#FF4D00" />
                <pointLight position={[-3, -3, 3]} intensity={2} color="#6B3FDB" />
                <spotLight position={[0, 5, 2]} intensity={3} color="#9747FF" penumbra={0.5} />
                <Rocket />
              </Canvas>
            </div>

            <div className="px-10 pb-10 text-center">
              <p className="font-condensed text-3xl font-800 uppercase text-white leading-tight">
                Эхний 7 хоногийн
                <br />
                <span style={{ color: 'var(--orange)' }}>Хичээл үнэгүй</span>
              </p>
              <p className="text-white/40 font-condensed text-sm mt-3">Trial хугацаанд бүрэн хандалт</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
