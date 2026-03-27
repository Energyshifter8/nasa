import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const modules = [
  {
    id: 1,
    icon: '⚛️',
    title: 'React Үндэс',
    duration: '2 долоо хоног',
    accent: 'var(--orange)',
    topics: [
      'Component бүтэц ба JSX',
      'Props ба State удирдлага',
      'Event handling ба form ажиллагаа',
      'React Router ашиглах',
    ],
  },
  {
    id: 2,
    icon: '🔗',
    title: 'Advanced Hooks',
    duration: '2 долоо хоног',
    accent: 'var(--purple-light)',
    topics: [
      'useState, useEffect, useContext',
      'useReducer ба custom hooks',
      'Performance optimization',
      'React.memo ба useMemo',
    ],
  },
  {
    id: 3,
    icon: '🔷',
    title: 'TypeScript интеграц',
    duration: '1.5 долоо хоног',
    accent: 'var(--orange)',
    topics: [
      'TypeScript суурь ойлголт',
      'Interface ба Type тодорхойлох',
      'Generic types ба utility types',
      'React TypeScript дээрх хэрэглээ',
    ],
  },
  {
    id: 4,
    icon: '🎨',
    title: 'Tailwind CSS',
    duration: '1 долоо хоног',
    accent: 'var(--purple-light)',
    topics: [
      'Utility-first загварчлал',
      'Responsive design',
      'Custom configuration',
      'Animations ба transitions',
    ],
  },
  {
    id: 5,
    icon: '🌐',
    title: '3D вэб: React Three Fiber',
    duration: '3 долоо хоног',
    accent: 'var(--orange)',
    topics: [
      'Three.js ба R3F суурь',
      '3D объект, гэрэл, материал',
      'Animation loop ба useFrame',
      'Post-processing ба шинэ эффект',
    ],
  },
];

export default function Curriculum() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="curriculum"
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
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="section-label mb-4">— Сургалтын хөтөлбөр</div>
            <h2 className="display-heading text-6xl md:text-7xl">
              Модуль &<br />
              <span style={{ color: 'var(--purple-light)' }}>Агуулга</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-xs font-condensed text-lg">
            9.5 долоо хоногийн ширүүн сургалт. Click хийгээд агуулгыг харна уу.
          </p>
        </motion.div>

        <div className="divider mb-0" />

        {/* Accordion - full border rows like sgapes schedule table */}
        {modules.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            {/* Row */}
            <div
              className="group flex items-center gap-6 py-6 cursor-pointer transition-all duration-200 hover:bg-white/3"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              onClick={() => setOpen(open === m.id ? null : m.id)}
            >
              {/* Number */}
              <div
                className="font-condensed font-900 text-4xl w-16 text-center flex-shrink-0"
                style={{ color: open === m.id ? m.accent : 'rgba(255,255,255,0.15)' }}
              >
                {String(m.id).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="text-2xl flex-shrink-0">{m.icon}</div>

              {/* Title */}
              <div className="flex-1">
                <h3 className="font-condensed font-800 text-xl md:text-2xl uppercase tracking-wide text-white">
                  {m.title}
                </h3>
              </div>

              {/* Duration chip */}
              <div className="chip chip-ghost hidden md:flex">{m.duration}</div>

              {/* Chevron */}
              <motion.div
                animate={{ rotate: open === m.id ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white/40 font-bold"
                style={{ border: '1px solid rgba(255,255,255,0.12)', fontSize: '1.1rem' }}
              >
                +
              </motion.div>
            </div>

            {/* Expanded content */}
            <AnimatePresence>
              {open === m.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="pl-24 pr-8 pb-8 pt-4">
                    <div
                      className="h-px mb-6"
                      style={{ background: `linear-gradient(90deg, ${m.accent}, transparent)` }}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {m.topics.map((topic, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.06 }}
                          className="flex items-center gap-3 font-condensed text-white/60 text-base"
                        >
                          <span style={{ color: m.accent, fontSize: '0.6rem' }}>▶</span>
                          {topic}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
