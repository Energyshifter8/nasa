import { useRef, useEffect, useState } from 'react';
import { motion, useInView, } from 'framer-motion';

const testimonials = [
  {
    name: 'Энхбаяр Т.',
    role: 'Junior Frontend Developer @ Mobifinance',
    avatar: '👩‍💻',
    rating: 5,
    text: 'Сургалт авахаасаа өмнө React-ийн талаар бараг юу ч мэдэхгүй байсан. Одоо бол компанид бодит төсөлд ажиллаж байна.',
  },
  {
    name: 'Болд-Эрдэнэ М.',
    role: 'Full Stack Developer @ Monpay',
    avatar: '👨‍🎓',
    rating: 5,
    text: 'TypeScript ба 3D хэсэг надад таалагдсан! Three.js-ийн талаар энд суралцаагүй бол хаанаас суралцах байсан аа?',
  },
  {
    name: 'Номин С.',
    role: 'Freelance Web Developer',
    avatar: '🧑‍🎨',
    rating: 5,
    text: 'Хэрэглэгчид баригдах боломжтой 3D вэбсайт хийж чаддаг болсон. Харилцагч нар маш сонирхдог.',
  },
  {
    name: 'Гантулга Б.',
    role: 'Tech Lead @ Turelt',
    avatar: '🧑‍💼',
    rating: 5,
    text: 'Багийнхаа хүмүүсийг бүгдийг нь энэ сургалтад бүртгүүлсэн. Маш чанартай сургалт.',
  },
  {
    name: 'Ундрал Ч.',
    role: 'UI/UX → Frontend Developer',
    avatar: '🎨',
    rating: 5,
    text: 'Дизайнераас хөгжүүлэгч болж чадсан. Tailwind CSS ба Framer Motion-г судлаад л бүх зүйл дэлэрсэн.',
  },
  {
    name: 'Мөнхбаяр Э.',
    role: 'React Developer @ StartupMN',
    avatar: '🚀',
    rating: 5,
    text: 'Практик дасгалын чанар нь харьцуулшгүй. Бодит ажлын орчинд ашиглаж болохуйц код бичихийг заасан.',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
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
            <div className="section-label mb-4">— Оюутнуудын Сэтгэгдэл</div>
            <h2 className="display-heading text-6xl md:text-7xl">
              2,400+ <br /><span style={{ color: 'var(--purple-light)' }}>Амжилт</span>
            </h2>
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-200 hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
            >
              ←
            </button>
            <button
              onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-200"
              style={{ background: 'var(--purple)', color: 'white' }}
            >
              →
            </button>
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
