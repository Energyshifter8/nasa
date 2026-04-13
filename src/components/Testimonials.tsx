import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useInView, } from 'framer-motion';

const testimonials = [
  {
    name: 'Энхбаяр Т.',
    role: 'Junior Frontend Developer @ Mobifinance',
    avatar: '👩‍💻',
    rating: 5,
    text: 'Сургалт авахаасаа өмнө React-ийн талаар бараг юу ч мэдэхгүй байсан. Одоо бол компанид бодит төсөлд ажиллаж байна.',
    company: 'Mobifinance',
    highlight: '6 сарын дараа бүрэн ажилтан болов',
  },
  {
    name: 'Болд-Эрдэнэ М.',
    role: 'Full Stack Developer @ Monpay',
    avatar: '👨‍🎓',
    rating: 5,
    text: 'TypeScript ба 3D хэсэг надад таалагдсан! Three.js-ийн талаар энд суралцаагүй бол хаанаас суралцах байсан аа?',
    company: 'Monpay',
    highlight: 'Freelance-ээс full-time болов',
  },
  {
    name: 'Номин С.',
    role: 'Freelance Web Developer',
    avatar: '🧑‍🎨',
    rating: 5,
    text: 'Хэрэглэгчид баригдах боломжтой 3D вэбсайт хийж чаддаг болсон. Харилцагч нар маш сонирхдог.',
    company: 'Independent',
    highlight: 'Төсөл авлага 40% өсөв',
  },
  {
    name: 'Гантулга Б.',
    role: 'Tech Lead @ Turelt',
    avatar: '🧑‍💼',
    rating: 5,
    text: 'Багийнхаа хүмүүсийг бүгдийг нь энэ сургалтад бүртгүүлсэн. Маш чанартай сургалт.',
    company: 'Turelt',
    highlight: '5 хүнийг ажилд авчирсан',
  },
  {
    name: 'Ундрал Ч.',
    role: 'UI/UX → Frontend Developer',
    avatar: '🎨',
    rating: 5,
    text: 'Дизайнераас хөгжүүлэгч болж чадсан. Tailwind CSS ба Framer Motion-г судлаад л бүх зүйл дэлэрсэн.',
    company: 'Career Change',
    highlight: 'UI designer → Developer',
  },
  {
    name: 'Мөнхбаяр Э.',
    role: 'React Developer @ StartupMN',
    avatar: '🚀',
    rating: 5,
    text: 'Практик дасгалын чанар нь харьцуулшгүй. Бодит ажлын орчинд ашиглаж болохуйц код бичихийг заасан.',
    company: 'StartupMN',
    highlight: 'Startup сонирхолтой болсон',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);
  const [filter, setFilter] = useState<'all' | 'company' | 'freelance'>('all');

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredTestimonials = testimonials.filter((t) => {
    if (filter === 'company') return t.company !== 'Independent' && t.company !== 'Career Change';
    if (filter === 'freelance') return t.company === 'Independent';
    return true;
  });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-40 px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #05030a 50%, #000000 100%)'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <motion.div
              className="section-label mb-4 text-purple-300"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              — Оюутнуудын Амжилт
            </motion.div>
            <h2 className="display-heading text-7xl md:text-8xl">
              2,400+<br /><span style={{ color: 'var(--orange)' }}>Сэтгэгдэл</span>
            </h2>
          </div>

          {/* Filter & Controls */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              {[
                { label: 'Бүгд', value: 'all' },
                { label: 'Компани', value: 'company' },
                { label: 'Freelance', value: 'freelance' },
              ].map((f) => (
                <motion.button
                  key={f.value}
                  onClick={() => setFilter(f.value as any)}
                  className="chip transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    background: filter === f.value ? 'var(--purple)' : 'rgba(255,255,255,0.08)',
                    border: filter === f.value ? 'none' : '1px solid rgba(255,255,255,0.15)',
                    color: filter === f.value ? '#fff' : 'rgba(255,255,255,0.7)',
                  }}
                >
                  {f.label}
                </motion.button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrent((p) => (p - 1 + filteredTestimonials.length) % filteredTestimonials.length)}
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
              >
                ←
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrent((p) => (p + 1) % filteredTestimonials.length)}
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                style={{ background: 'var(--purple)', color: 'white' }}
              >
                →
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="divider mb-12" />

        {/* Featured quote — full width like sgapes video card */}
        <div className="relative overflow-hidden mb-8" style={{ minHeight: '200px' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: i === current ? 1 : 0, x: i === current ? 0 : 40 }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0"
              style={{ pointerEvents: i === current ? 'auto' : 'none' }}
            >
              <div className="flex items-start gap-8 p-8"
                style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px' }}>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: 'var(--purple)' }}
                >
                  {t.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="font-condensed text-xl md:text-2xl text-white/80 leading-snug mb-5">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="font-condensed font-700 text-white uppercase tracking-wide">{t.name}</div>
                    <div className="w-px h-4 bg-white/20" />
                    <div className="font-condensed text-white/40 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-[200px] mb-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                height: '3px',
                borderRadius: '2px',
                background: i === current ? 'var(--orange)' : 'rgba(255,255,255,0.15)',
                width: i === current ? '32px' : '16px',
                transition: 'all 0.3s',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        {/* Grid of 3 mini cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
              className="card-dark p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                  style={{ background: 'var(--purple-dark)' }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-condensed font-700 text-white text-sm uppercase">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-xs">★</span>
                ))}
              </div>
              <p className="text-white/50 text-sm leading-relaxed">"{t.text.slice(0, 100)}..."</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
