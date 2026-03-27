import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

const HeroScene = lazy(() => import('./HeroScene'));

function NavBar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-0"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-black"
            style={{ background: 'linear-gradient(135deg, #6B3FDB, #FF4D00)' }}
          >
            ⚛
          </div>
          <span className="font-condensed font-black text-lg tracking-widest uppercase text-white">
            React 3D Academy
          </span>
        </div>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Яагаад?', href: '#features' },
            { label: 'Хөтөлбөр', href: '#curriculum' },
            { label: '3D Demo', href: '#demo' },
            { label: 'Ментор', href: '#mentor' },
            { label: 'Мэдэгдэл', href: '#testimonials' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-condensed font-700 text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#register">
          <button className="btn-orange text-xs">
            Бүртгүүлэх
          </button>
        </a>
      </div>
    </nav>
  );
}

export default function Hero() {
  return (
    <>
      <NavBar />

      <section
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        style={{ background: '#06020D' }}
      >
        {/* Full-bleed 3D Scene behind everything */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>

        {/* Gradient overlay — bottom-heavy like sgapes */}
        <div className="absolute inset-0 z-10 hero-overlay" />

        {/* Content — bottom-left like sgapes */}
        <div className="relative z-20 max-w-screen-2xl mx-auto w-full px-8 pb-24 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            {/* Badge chip */}
            <div className="chip chip-orange mb-6 w-fit">
              ◉ &nbsp;2026 • Шинэ сургалт
            </div>

            {/* Display title */}
            <h1 className="display-heading text-[80px] md:text-[100px] lg:text-[120px] mb-4">
              React-ийг
              <br />
              <span style={{ color: 'var(--orange)' }}>Төгс</span>
              <br />
              Эзэмш
            </h1>

            <p className="font-condensed text-xl md:text-2xl text-white/60 font-500 mb-8 max-w-xl leading-tight">
              2D-ээс 3D хүртэл — React, TypeScript, Three.js-ийн бүрэн гүнзгийрүүлсэн сургалт
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#register">
                <button className="btn-primary text-sm">
                  🚀 &nbsp;Одоо Бүртгүүлэх
                </button>
              </a>
              <a href="#demo">
                <button className="btn-outline text-sm">
                  ▷ &nbsp;Demo Үзэх
                </button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats bar — like sgapes score cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative z-20 w-full"
          style={{ background: 'rgba(0,0,0,0.85)', borderTop: '2px solid rgba(255,255,255,0.06)' }}
        >
          <div className="max-w-screen-2xl mx-auto flex overflow-x-auto">
            {/* Orange date card */}
            <div
              className="flex-shrink-0 flex flex-col items-center justify-center px-8 py-4 text-white font-condensed font-black text-center"
              style={{ background: 'var(--orange)', minWidth: '140px' }}
            >
              <span className="text-xs tracking-widest uppercase opacity-80">Эхлэх</span>
              <span className="text-3xl font-900">2026</span>
              <span className="text-xs tracking-widest uppercase opacity-80">Дөрөвдүгээр сар</span>
            </div>

            {/* Stats cards */}
            {[
              { label: 'Нийт оюутан', val: '2,400+', icon: '🎓' },
              { label: 'Долоо хоног', val: '9.5', icon: '📅' },
              { label: 'Модуль', val: '5', icon: '📦' },
              { label: 'Дасгал & Төсөл', val: '50+', icon: '💻' },
              { label: 'Үнэлгээ', val: '4.9 ★', icon: '⭐' },
              { label: 'Дэмжлэг', val: 'Discord', icon: '💬' },
            ].map((s, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-4 px-8 py-4 border-l"
                style={{ borderColor: 'rgba(255,255,255,0.07)', minWidth: '180px' }}
              >
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <div className="font-condensed font-black text-xl text-white">{s.val}</div>
                  <div className="text-xs text-white/40 font-condensed tracking-wider uppercase">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
