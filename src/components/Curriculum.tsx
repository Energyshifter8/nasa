import React from "react";
import { useState, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const modules = [
  {
    id: 1,
    icon: '',
    title: 'React Үндэс',
    duration: '2 долоо хоног',
    weeks: 2,
    accent: 'var(--orange)',
    level: 'Эхлэлтэй',
    projects: 2,
    lessons: 12,
    prerequisites: 'JavaScript үндэс',
    outcomes: ['React component архитектур', 'JSX синтакс эзэмшүүлнэ', 'Props & State удирдлага'],
    topics: ['Component бүтэц ба JSX', 'Props ба State удирдлага', 'Event handling ба form ажиллагаа', 'React Router ашиглах'],
  },
  {
    id: 2,
    icon: '',
    title: 'Advanced Hooks',
    duration: '2 долоо хоног',
    weeks: 2,
    accent: 'var(--purple-light)',
    level: 'Дунд түвшин',
    projects: 3,
    lessons: 15,
    prerequisites: 'React Үндэс',
    outcomes: ['Custom hooks бүтээлгүүлэх', 'Performance optimization', 'State management patterns'],
    topics: ['useState, useEffect, useContext', 'useReducer ба custom hooks', 'Performance optimization', 'React.memo ба useMemo'],
  },
  {
    id: 3,
    icon: '',
    title: 'TypeScript интеграц',
    duration: '1.5 долоо хоног',
    weeks: 1.5,
    accent: 'var(--orange)',
    level: 'Дунд түвшин',
    projects: 2,
    lessons: 10,
    prerequisites: 'React Үндэс',
    outcomes: ['TypeScript ба React интеграц', 'Type safety эзэмшүүлэх', 'Generic types сургалт'],
    topics: ['TypeScript суурь ойлголт', 'Interface ба Type тодорхойлох', 'Generic types ба utility types', 'React TypeScript дээрх хэрэглээ'],
  },
  {
    id: 4,
    icon: '',
    title: 'Tailwind CSS',
    duration: '1 долоо хоног',
    weeks: 1,
    accent: 'var(--purple-light)',
    level: 'Эхлэлтэй',
    projects: 4,
    lessons: 8,
    prerequisites: 'HTML/CSS үндэс',
    outcomes: ['Responsive дизайн үүсгэлгүүлэх', 'Utility-first CSS загвар', 'Animation ба transitions'],
    topics: ['Utility-first загварчлал', 'Responsive design', 'Custom configuration', 'Animations ба transitions'],
  },
  {
    id: 5,
    icon: '',
    title: '3D вэб: React Three Fiber',
    duration: '3 долоо хоног',
    weeks: 3,
    accent: 'var(--orange)',
    level: 'Дэвшилтэт',
    projects: 3,
    lessons: 18,
    prerequisites: 'React үндэс, JavaScript, 3D суурь',
    outcomes: ['3D сцен үүсгэх', 'Анимаци ба интеракци нэмэлгүүлэх', 'Post-processing шинэ эффект'],
    topics: ['Three.js ба R3F суурь', '3D объект, гэрэл, материал', 'Animation loop ба useFrame', 'Post-processing ба шинэ эффект'],
  },
];

const ModuleCard = React.memo(({ mod, isOpen, onToggle }: { mod: any; isOpen: boolean; onToggle: () => void }) => {
  const accent = mod.accent;

  return (
    <motion.div
      layout
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        onClick={onToggle}
        className="relative bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl border border-white/10 cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.02, boxShadow: `0 25px 50px -12px ${accent}30` }}
        whileTap={{ scale: 0.98 }}
        style={{ boxShadow: isOpen ? `0 0 60px ${accent}40` : '0 15px 35px rgba(0,0,0,0.3)' }}
      >
        {/* Glow layer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at 30% 20%, ${accent}20, transparent 70%)` }} />

        <div className="relative flex items-center gap-6 p-6 md:p-8">
          {/* Number */}
          <motion.div
            animate={{ scale: isOpen ? 1.15 : 1 }}
            className="font-black text-6xl w-16 text-center flex-shrink-0"
            style={{ color: isOpen ? accent : 'rgba(255,255,255,0.12)' }}
          >
            {String(mod.id).padStart(2, '0')}
          </motion.div>

          {/* Icon */}
          <motion.div
            animate={{ rotate: isOpen ? 360 : 0, scale: isOpen ? 1.15 : 1 }}
            className="text-5xl p-5 rounded-3xl flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${accent}25, ${accent}10)`, border: `2px solid ${accent}30` }}
          >
            {mod.icon}
          </motion.div>

          {/* Info */}
          <div className="flex-1">
            <h3 className="font-bold text-3xl text-white tracking-tight">{mod.title}</h3>
            <div className="flex items-center gap-4 text-white/60 text-sm mt-1">
              <span className="font-medium">{mod.duration}</span>
              <span className="text-xs">•</span>
              <span className="px-3 py-1 text-xs rounded-2xl border" style={{ color: accent, borderColor: `${accent}40` }}>
                {mod.level}
              </span>
              <span className="text-xs">•</span>
              <span>{mod.projects} төсөл • {mod.lessons} хичээл</span>
            </div>
          </div>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-3xl border border-white/20 group-hover:border-white/40 transition-all"
          >
            +
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden border-t border-white/10"
            >
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Topics */}
                <div>
                  <div className="uppercase text-xs tracking-[2px] font-medium mb-6" style={{ color: accent }}>📚 Сэдэв</div>
                  <div className="space-y-4">
                    {mod.topics.map((topic: string, i: number) => (
                      <motion.div key={i} initial={{ x: -20 }} animate={{ x: 0 }} transition={{ delay: i * 0.05 }} className="flex gap-4 items-center text-white/80">
                        <span style={{ color: accent }}>▶</span>
                        <span className="font-medium">{topic}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Outcomes + Stats */}
                <div>
                  <div className="uppercase text-xs tracking-[2px] font-medium mb-6" style={{ color: accent }}>🎯 Үр дүн</div>
                  <div className="space-y-4 mb-8">
                    {mod.outcomes.map((outcome: string, i: number) => (
                      <motion.div key={i} initial={{ x: 20 }} animate={{ x: 0 }} transition={{ delay: i * 0.05 }} className="flex gap-3">
                        <span style={{ color: accent }}>✓</span>
                        <span className="text-white/80">{outcome}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      { label: 'Хичээл', value: mod.lessons },
                      { label: 'Төсөл', value: mod.projects },
                      { label: 'Хугацаа', value: `${mod.weeks} долоо` },
                    ].map((stat, i) => (
                      <div key={i} className="rounded-2xl py-4" style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}>
                        <div className="text-3xl font-black" style={{ color: accent }}>{stat.value}</div>
                        <div className="text-xs uppercase tracking-widest text-white/50">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-xs uppercase bg-white/5 border border-white/10 rounded-2xl p-4">
                    <span className="text-white/60">Урьдчилсан: </span>
                    <span className="font-medium text-white">{mod.prerequisites}</span>
                  </div>
                </div>
              </div>

              {/* Expert CTA */}
              <div className="px-8 pb-8 flex justify-end">
                <button
                  className="px-8 py-3 rounded-2xl font-medium text-sm flex items-center gap-2"
                  style={{ background: accent, color: '#000' }}
                >
                  🚀 Энэ модулийг эхлүүлэх
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
});

export default function Curriculum() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const totalWeeks = useMemo(() => modules.reduce((sum, m) => sum + m.weeks, 0), []);

  const toggleModule = useCallback((id: number) => {
    setOpen(prev => (prev === id ? null : id));
  }, []);

  return (
    <section id="curriculum" ref={ref} className="relative py-32 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #06020D 0%, #0a0a0f 50%, #06020D 100%)' }}>
      {/* Background glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-12 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-12 right-12 w-[500px] h-[500px] bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-screen-2xl mx-auto relative">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-purple-400 text-sm tracking-[3px] uppercase mb-4">Сургалтын хөтөлбөр</div>
          <h2 className="text-7xl md:text-8xl font-black leading-none">Модуль &amp; <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Агуулга</span></h2>
          <p className="text-white/60 mt-6 max-w-xl mx-auto text-xl">2D → 3D бүрэн замын хөтөлбөр • {totalWeeks} долоо хоног • {modules.length} модуль</p>
        </motion.div>

        {/* Modules - denser spacing */}
        <div className="space-y-6">
          {modules.map(mod => (
            <ModuleCard key={mod.id} mod={mod} isOpen={open === mod.id} onToggle={() => toggleModule(mod.id)} />
          ))}
        </div>

        {/* Summary bar - full width fill */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-900/30 to-orange-900/30 border border-white/10 flex flex-wrap justify-between items-center gap-8">
          <div className="flex-1 min-w-[200px] text-center">
            <div className="text-5xl font-black text-purple-400">{modules.length}</div>
            <div className="text-xs uppercase tracking-widest text-white/50">Модуль</div>
          </div>
          <div className="flex-1 min-w-[200px] text-center border-l border-white/10">
            <div className="text-5xl font-black text-orange-400">{totalWeeks}</div>
            <div className="text-xs uppercase tracking-widest text-white/50">Долоо хоног</div>
          </div>
          <div className="flex-1 min-w-[200px] text-center border-l border-white/10">
            <div className="text-5xl font-black text-purple-400">{modules.reduce((a, b) => a + b.lessons, 0)}</div>
            <div className="text-xs uppercase tracking-widest text-white/50">Хичээл</div>
          </div>
          <div className="flex-1 min-w-[200px] text-center border-l border-white/10">
            <div className="text-5xl font-black text-orange-400">{modules.reduce((a, b) => a + b.projects, 0)}+ </div>
            <div className="text-xs uppercase tracking-widest text-white/50">Төсөл</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
