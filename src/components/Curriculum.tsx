import { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

interface CurriculumModule {
  id: number;
  icon: string;
  title: string;
  duration: string;
  weeks: number;
  accent: string;
  level: string;
  projects: number;
  lessons: number;
  prerequisites: string;
  outcomes: string[];
  topics: string[];
}

const modules: CurriculumModule[] = [
  {
    id: 1,
    icon: '⚛️',
    title: 'React Үндэс',
    duration: '2 долоо хоног',
    weeks: 2,
    accent: '#F97316',
    level: 'Эхлэн суралцагч',
    projects: 2,
    lessons: 12,
    prerequisites: 'JavaScript үндэс',
    outcomes: ['React архитектур', 'JSX синтакс', 'Props & State'],
    topics: ['Component & JSX', 'Props & State', 'Event handling', 'React Router'],
  },
  {
    id: 2,
    icon: '🔗',
    title: 'Advanced Hooks',
    duration: '2 долоо хоног',
    weeks: 2,
    accent: '#A855F7',
    level: 'Дунд түвшин',
    projects: 3,
    lessons: 15,
    prerequisites: 'React Үндэс',
    outcomes: ['Custom hooks', 'Performance', 'State management'],
    topics: ['useState, useEffect', 'useReducer', 'Optimization', 'React.memo'],
  },
  {
    id: 3,
    icon: '🔷',
    title: 'TypeScript интеграц',
    duration: '1.5 долоо хоног',
    weeks: 1.5,
    accent: '#3B82F6',
    level: 'Дунд түвшин',
    projects: 2,
    lessons: 10,
    prerequisites: 'React Үндэс',
    outcomes: ['Type safety', 'Generic types', 'Utility types'],
    topics: ['TS суурь', 'Interface & Type', 'Generics', 'React + TS'],
  },
  {
    id: 4,
    icon: '🎨',
    title: 'Tailwind CSS',
    duration: '1 долоо хоног',
    weeks: 1,
    accent: '#06B6D4',
    level: 'Эхлэн суралцагч',
    projects: 4,
    lessons: 8,
    prerequisites: 'HTML/CSS',
    outcomes: ['Responsive design', 'Utility-first', 'Animations'],
    topics: ['Utility-first', 'Responsive', 'Custom config', 'Transitions'],
  },
  {
    id: 5,
    icon: '🌐',
    title: '3D: React Three Fiber',
    duration: '3 долоо хоног',
    weeks: 3,
    accent: '#F43F5E',
    level: 'Дэвшилтэт',
    projects: 3,
    lessons: 18,
    prerequisites: 'React & 3D суурь',
    outcomes: ['3D Сцен үүсгэх', 'Анимаци', 'Post-processing'],
    topics: ['R3F суурь', 'Light & Material', 'useFrame Loop', '3D Effects'],
  },
];

const ModuleCard = ({ mod, index, isOpen, onToggle, isInView }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div 
        onClick={onToggle}
        className={`relative h-full bg-gray-900/50 backdrop-blur-md rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${isOpen ? 'border-white/30 ring-1 ring-white/10' : 'border-white/10 hover:border-white/20'}`}
      >
        <div className="p-6">
          <div className="flex items-center gap-5">
            <div className="text-4xl w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/10" style={{ color: mod.accent }}>
              {mod.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">{mod.title}</h3>
              <div className="flex items-center gap-2 text-white/40 text-sm mt-1">
                <span>{mod.duration}</span>
                <span>•</span>
                <span style={{ color: mod.accent }}>{mod.level}</span>
              </div>
            </div>
            <div className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-white' : 'text-white/30'}`}>+</div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-6 border-t border-white/10 grid grid-cols-1 gap-6">
                  <div>
                    <h4 className="text-xs font-bold text-white/40 uppercase mb-3 tracking-widest">📚 Сэдвүүд</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {mod.topics.map((t: string, i: number) => (
                        <div key={i} className="text-sm text-white/70 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full" style={{ backgroundColor: mod.accent }} /> {t}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-lg font-bold text-white">{mod.lessons}</div>
                      <div className="text-[10px] text-white/40 uppercase">Хичээл</div>
                    </div>
                    <div className="flex-1 p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-lg font-bold text-white">{mod.projects}</div>
                      <div className="text-[10px] text-white/40 uppercase">Төсөл</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default function Curriculum() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 bg-[#050505] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header - Цэгцэлсэн хувилбар */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-white leading-none">
            МОДУЛЬ & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
              АГУУЛГА
            </span>
          </h2>
          <p className="text-white/40 mt-6 max-w-xl text-lg">
            React-аас React Three Fiber хүртэлх хамгийн сүүлийн үеийн технологиудыг бодит төсөл дээр суурилж эзэмшинэ.
          </p>
        </div>

        {/* Modules Grid - 2 Баганаар дүүргэв */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {modules.map((mod, index) => (
            <ModuleCard
              key={mod.id}
              mod={mod}
              index={index}
              isOpen={open === mod.id}
              onToggle={() => setOpen(open === mod.id ? null : mod.id)}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          {[
            { label: 'Нийт Модуль', val: modules.length },
            { label: 'Нийт Төсөл', val: '14+' },
            { label: 'Хугацаа', val: '10 Долоо хоног' },
            { label: 'Түвшин', val: 'All Levels' }
          ].map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-white/30 text-xs uppercase font-bold tracking-widest mb-1">{s.label}</div>
              <div className="text-2xl font-black text-white">{s.val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
