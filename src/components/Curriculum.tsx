import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const modules = [
  {
    id: 1,
    icon: '⚛️',
    title: 'React Үндэс',
    duration: '2 долоо хоног',
    weeks: 2,
    accent: 'var(--orange)',
    level: 'Эхлэлтэй',
    projects: 2,
    lessons: 12,
    prerequisites: 'JavaScript үндэс',
    outcomes: [
      'React component архитектур',
      'JSX синтакс эзэмшүүлнэ',
      'Props & State удирдлага',
    ],
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
    weeks: 2,
    accent: 'var(--purple-light)',
    level: 'Дунд түвшин',
    projects: 3,
    lessons: 15,
    prerequisites: 'React Үндэс',
    outcomes: [
      'Custom hooks бүтээлгүүлэх',
      'Performance optimization',
      'State management patterns',
    ],
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
    weeks: 1.5,
    accent: 'var(--orange)',
    level: 'Дунд түвшин',
    projects: 2,
    lessons: 10,
    prerequisites: 'React Үндэс',
    outcomes: [
      'TypeScript ба React интеграц',
      'Type safety эзэмшүүлэх',
      'Generic types сургалт',
    ],
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
    weeks: 1,
    accent: 'var(--purple-light)',
    level: 'Эхлэлтэй',
    projects: 4,
    lessons: 8,
    prerequisites: 'HTML/CSS үндэс',
    outcomes: [
      'Responsive дизайн үүсгэлгүүлэх',
      'Utility-first CSS загвар',
      'Animation ба transitions',
    ],
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
    weeks: 3,
    accent: 'var(--orange)',
    level: 'Дэвшилтэт',
    projects: 3,
    lessons: 18,
    prerequisites: 'React үндэс, JavaScript, 3D суурь',
    outcomes: [
      '3D сцен үүсгэх',
      'Анимаци ба интеракци нэмэлгүүлэх',
      'Post-processing шинэ эффект',
    ],
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
  const [expandedDetails, setExpandedDetails] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const totalWeeks = modules.reduce((sum, mod) => sum + mod.weeks, 0);

  return (
    <section
      id="curriculum"
      ref={ref}
      className="relative py-40 px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #06020D 0%, #0a0a0f 50%, #06020D 100%)',
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-label mb-6 text-purple-300"
            Агуулга &<br />
            <span
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent"
            >
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/60 max-w-2xl mx-auto text-xl leading-relaxed"
          >
            Эрчимжүүлсэн сургалтын хөтөлбөр. 2D-ээс 3D хүртэл бүх түвшинд зориулсан.
            <br />
            <span className="text-purple-300 font-semibold">Нийт {totalWeeks} долоо хоног • {modules.length} модуль</span>
          </motion.p>
        </motion.div>

        {/* Progress Timeline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent flex-1"></div>
            <span className="text-white/40 text-sm font-condensed uppercase tracking-wider">
              Сургалтын явц
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent flex-1"></div>
          </div>
          <div className="flex justify-center items-center gap-2">
            {modules.map((mod, index) => {
              const progress = (modules.slice(0, index + 1).reduce((sum, m) => sum + m.weeks, 0) / totalWeeks) * 100;
              return (
                <div key={mod.id} className="flex items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="w-4 h-4 rounded-full border-2 border-purple-500/30 flex items-center justify-center"
                    style={{
                      background: open === mod.id ? mod.accent : 'transparent',
                      boxShadow: open === mod.id ? `0 0 20px ${mod.accent}40` : 'none'
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  </motion.div>
                  {index < modules.length - 1 && (
                    <div className="w-16 h-px bg-gradient-to-r from-purple-500/30 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-4">
            <span className="text-white/50 text-sm">
              {totalWeeks} долоо хоног • {modules.reduce((s, m) => s + m.projects, 0)}+ төсөл • Профессионал түвшин
            </span>
          </div>
        </motion.div>

        {/* Modules */}
        <div className="space-y-8">
          {modules.map((mod, index) => {
            const isOpen = open === mod.id;
            const detailsOpen = expandedDetails === mod.id;
            return (
              <motion.div
                key={mod.id}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
              >
                {/* Module Card */}
                <motion.div
                  className="relative bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl border border-white/10 cursor-pointer overflow-hidden"
                  onClick={() => setOpen(isOpen ? null : mod.id)}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${mod.accent}20`
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: isOpen ? `0 0 50px ${mod.accent}30` : '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                >
                  {/* Hover Glow Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${mod.accent}10, transparent)`,
                    }}
                  ></div>

                  <div className="relative flex items-center gap-8 p-8">
                    {/* Module Number */}
                    <motion.div
                      className="font-condensed font-black text-6xl w-20 text-center flex-shrink-0"
                      style={{
                        color: isOpen ? mod.accent : 'rgba(255,255,255,0.15)',
                        textShadow: isOpen ? `0 0 20px ${mod.accent}60` : 'none'
                      }}
                      animate={{ scale: isOpen ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {String(mod.id).padStart(2, '0')}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="text-4xl flex-shrink-0 p-4 rounded-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${mod.accent}20, ${mod.accent}10)`,
                        border: `1px solid ${mod.accent}30`
                      }}
                      animate={{
                        rotate: isOpen ? 360 : 0,
                        scale: isOpen ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {mod.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-condensed font-bold text-2xl md:text-3xl uppercase tracking-wide text-white mb-2">
                        {mod.title}
                      </h3>
                      <div className="flex items-center gap-4 text-white/60 flex-wrap">
                        <span className="font-condensed text-sm uppercase tracking-wider">
                          {mod.duration}
                        </span>
                        <span className="text-xs">•</span>
                        <span className="chip chip-ghost text-xs" style={{ color: mod.accent }}>
                          {mod.level}
                        </span>
                        <span className="text-xs">•</span>
                        <span className="text-sm">
                          {mod.projects} პროექт
                        </span>
                      </div>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white/60 font-bold text-2xl border border-white/20 hover:border-white/40 transition-colors"
                    >
                      +
                    </motion.div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 border-t border-white/5">
                          {/* Two Column Layout */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                            {/* Left: Topics & Outcomes */}
                            <div>
                              <motion.div
                                className="h-px mb-6"
                                style={{
                                  background: `linear-gradient(90deg, ${mod.accent}, transparent)`
                                }}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                              />
                              <h4 className="font-condensed font-bold text-white/80 uppercase tracking-wider mb-4 text-lg">
                                📚 Сургалтын сэдэв
                              </h4>
                              <div className="space-y-3">
                                {mod.topics.map((topic, j) => (
                                  <motion.div
                                    key={j}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + j * 0.1 }}
                                    className="flex items-center gap-4 font-condensed text-white/70 text-sm"
                                  >
                                    <motion.span
                                      className="text-sm"
                                      style={{ color: mod.accent }}
                                      animate={{ scale: [1, 1.2, 1] }}
                                      transition={{ delay: 0.5 + j * 0.1, duration: 0.3 }}
                                    >
                                      ▶
                                    </motion.span>
                                    {topic}
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {/* Right: Module Details */}
                            <div>
                              <motion.div
                                className="h-px mb-6"
                                style={{
                                  background: `linear-gradient(90deg, ${mod.accent}, transparent)`
                                }}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                              />
                              <h4 className="font-condensed font-bold text-white/80 uppercase tracking-wider mb-4 text-lg">
                                🎯 Сүүлийн үр дүн
                              </h4>
                              <div className="space-y-3 mb-6">
                                {mod.outcomes.map((outcome, j) => (
                                  <motion.div
                                    key={j}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.35 + j * 0.1 }}
                                    className="flex items-start gap-3 font-condensed text-white/70 text-sm"
                                  >
                                    <span style={{ color: mod.accent }} className="mt-1">✓</span>
                                    {outcome}
                                  </motion.div>
                                ))}
                              </div>

                              {/* Quick Stats */}
                              <div className="grid grid-cols-3 gap-3">
                                <div
                                  className="p-3 rounded-lg text-center"
                                  style={{
                                    background: `${mod.accent}15`,
                                    border: `1px solid ${mod.accent}30`
                                  }}
                                >
                                  <div style={{ color: mod.accent }} className="font-condensed font-black text-xl">
                                    {mod.lessons}
                                  </div>
                                  <div className="text-white/50 text-xs font-condensed uppercase">
                                    Хичээл
                                  </div>
                                </div>
                                <div
                                  className="p-3 rounded-lg text-center"
                                  style={{
                                    background: `${mod.accent}15`,
                                    border: `1px solid ${mod.accent}30`
                                  }}
                                >
                                  <div style={{ color: mod.accent }} className="font-condensed font-black text-xl">
                                    {mod.projects}
                                  </div>
                                  <div className="text-white/50 text-xs font-condensed uppercase">
                                    Төсөл
                                  </div>
                                </div>
                                <div
                                  className="p-3 rounded-lg text-center"
                                  style={{
                                    background: `${mod.accent}15`,
                                    border: `1px solid ${mod.accent}30`
                                  }}
                                >
                                  <div style={{ color: mod.accent }} className="font-condensed font-black text-xl">
                                    {mod.weeks}
                                  </div>
                                  <div className="text-white/50 text-xs font-condensed uppercase">
                                    Хф. хоног
                                  </div>
                                </div>
                              </div>

                              {/* Prerequisites */}
                              <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
                                <div className="text-white/70 text-xs font-condensed uppercase tracking-wider mb-2">
                                  📋 Урьдчилсан нөхцөл
                                </div>
                                <div className="text-white/60 text-sm">
                                  {mod.prerequisites}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Total Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-16 p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-900/20 to-orange-900/20 text-center"
        >
          <p className="text-white/70 mb-4 font-condensed">Сургалтын Статистик</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-3xl font-condensed font-black text-purple-400">{modules.length}</div>
              <div className="text-sm text-white/50">Модуль</div>
            </div>
            <div>
              <div className="text-3xl font-condensed font-black text-orange-400">{totalWeeks}</div>
              <div className="text-sm text-white/50">Долоо хоног</div>
            </div>
            <div>
              <div className="text-3xl font-condensed font-black text-purple-400">
                {modules.reduce((s, m) => s + m.lessons, 0)}
              </div>
              <div className="text-sm text-white/50">Хичээл</div>
            </div>
            <div>
              <div className="text-3xl font-condensed font-black text-orange-400">
                {modules.reduce((s, m) => s + m.projects, 0)}+
              </div>
              <div className="text-sm text-white/50">Төсөл</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="text-center mt-16"
        >
          <p className="text-white/50 text-lg mb-8">
            Модулиудын дэлгэрэнгүй мэдээлэл авахыг хүсэж байна уу?
          </p>
          <motion.a
            href="#pricing"
            className="btn-primary text-lg px-12 py-4 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Үнийн сонголт үзэх
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
