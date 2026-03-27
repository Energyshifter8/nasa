import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useInView } from 'framer-motion';

function MentorBackground() {
  const r1 = useRef<THREE.Mesh>(null!);
  const r2 = useRef<THREE.Mesh>(null!);
  const s = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (r1.current) { r1.current.rotation.x = state.clock.elapsedTime * 0.4; r1.current.rotation.y = state.clock.elapsedTime * 0.2; }
    if (r2.current) { r2.current.rotation.x = -state.clock.elapsedTime * 0.3; r2.current.rotation.z = state.clock.elapsedTime * 0.5; }
    if (s.current) s.current.rotation.y = state.clock.elapsedTime * 0.6;
  });

  return (
    <>
      <Torus ref={r1} args={[1, 0.03, 16, 60]}>
        <meshStandardMaterial color="#6B3FDB" emissive="#6B3FDB" emissiveIntensity={1} transparent opacity={0.7} />
      </Torus>
      <Torus ref={r2} args={[1.4, 0.02, 16, 60]}>
        <meshStandardMaterial color="#FF4D00" emissive="#FF4D00" emissiveIntensity={0.7} transparent opacity={0.5} />
      </Torus>
      <Sphere ref={s} args={[0.3, 32, 32]}>
        <meshStandardMaterial color="#9747FF" emissive="#9747FF" emissiveIntensity={0.5} wireframe />
      </Sphere>
    </>
  );
}

const stats = [
  { value: '10+', label: 'Жилийн туршлага' },
  { value: '2,400+', label: 'Оюутнууд' },
  { value: '18', label: 'Нийт сургалт' },
  { value: '4.9', label: 'Үнэлгээ / 5' },
];

export default function Mentor() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="mentor"
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
          <div className="section-label mb-4">— Таны Ментор</div>
          <h2 className="display-heading text-6xl md:text-7xl">
            Багшаа <span style={{ color: 'var(--orange)' }}>Танилц</span>
          </h2>
        </motion.div>

        <div className="divider mb-12" />

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0"
          style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', overflow: 'hidden' }}>

          {/* Left — 3D scene card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
            style={{ height: '400px', background: '#06020D', borderRight: '1px solid rgba(255,255,255,0.07)' }}
          >
            <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} style={{ background: 'transparent' }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[3, 3, 3]} intensity={2} color="#6B3FDB" />
              <pointLight position={[-3, -3, 3]} intensity={1.5} color="#FF4D00" />
              <MentorBackground />
            </Canvas>

            {/* Overlay name */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="chip chip-purple mb-3 w-fit">Senior React Developer</div>
              <h3 className="display-heading text-4xl text-white">Батбаяр Д.</h3>
            </div>
          </motion.div>

          {/* Right — bio & stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-10 flex flex-col justify-between"
            style={{ background: '#0D0D0D' }}
          >
            <div>
              <p className="font-condensed text-lg text-white/60 leading-relaxed mb-8">
                10+ жилийн туршлагатай, Silicon Valley компаниудад ажилласан React болон 3D вэб технологийн мэргэжилтэн.
                Монголын хөгжүүлэгчдэд зориулсан дэлхийн стандарттай сургалт явуулж байна.
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'TypeScript', 'Three.js', 'Node.js', 'AWS', 'Docker'].map((tech) => (
                  <span key={tech} className="chip chip-ghost">{tech}</span>
                ))}
              </div>
            </div>

            {/* Stats grid — sgapes card style */}
            <div className="grid grid-cols-2 gap-px"
              style={{ background: 'rgba(255,255,255,0.07)' }}>
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="p-5"
                  style={{ background: i === 0 ? 'var(--orange)' : '#0D0D0D' }}
                >
                  <div className="font-condensed font-900 text-3xl text-white">{s.value}</div>
                  <div className="font-condensed text-xs uppercase tracking-wider text-white/60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
