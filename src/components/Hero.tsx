import { Suspense, lazy, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroScene = lazy(() => import('./HeroScene'));

export default function Hero() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery.toLowerCase().includes('curriculum') || searchQuery.includes('модуль')) {
      document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
    }
    // ... бусад shortcut-ууд
  }, [searchQuery]);

  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 backdrop-blur-2xl border-b border-white/10 bg-black/70">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl font-black bg-gradient-to-br from-purple-600 to-orange-500">⚛</div>
            <span className="font-black text-2xl tracking-[-1px] hidden md:block">React 3D Academy</span>
          </div>

          <div className="hidden lg:flex gap-8 text-sm font-medium tracking-widest uppercase">
            {['Яагаад?', 'Хөтөлбөр', '3D Demo', 'Ментор', 'Мэдэгдэл'].map(l => <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-orange-400 transition-colors">{l}</a>)}
          </div>

          {/* Smart Search */}
          <div className="relative max-w-xs w-full hidden md:block">
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              placeholder="Модуль, ментор, бүртгэл хайх..."
              className="w-full bg-white/10 border border-white/30 focus:border-orange-400 rounded-3xl px-6 py-3 text-sm outline-none transition-all"
            />
          </div>

          <a href="#register" className="px-7 py-3 bg-orange-500 text-black font-semibold rounded-3xl hover:scale-105 active:scale-95 transition-all">Бүртгүүлэх</a>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-end overflow-hidden" style={{ background: '#06020D' }}>
        <Suspense fallback={<div className="absolute inset-0 bg-black/40" />}>
          <HeroScene />
        </Suspense>

        {/* Content */}
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 pb-20">
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex px-5 py-2 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-3xl mb-6">2026 • Дэлхийн түвшин</div>
            <h1 className="text-[92px] md:text-[120px] lg:text-[140px] leading-[0.95] font-black tracking-[-4px]">
              React-ийг<br />
              <span className="text-orange-400">ТӨГС</span><br />ЭЗЭМШ
            </h1>
            <p className="text-2xl text-white/70 max-w-xl mt-4">2D → 3D хүртэлх хамгийн хүчтэй React сургалт Монголд</p>

            <div className="flex gap-4 mt-10">
              <button className="px-10 py-5 bg-white text-black font-semibold rounded-3xl flex items-center gap-3 hover:shadow-2xl hover:shadow-orange-500/50 transition-all">🚀 Одоо бүртгүүлэх</button>
              <button className="px-8 py-5 border border-white/40 hover:border-white rounded-3xl">▶ 3D Demo үзэх</button>
            </div>
          </motion.div>
        </div>

        {/* Stats bar — denser */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 border-t border-white/10 py-6">
          <div className="max-w-screen-2xl mx-auto flex items-center gap-8 px-8 overflow-x-auto">
            {/* ... stats cards (same but tighter) */}
          </div>
        </div>
      </section>
    </>
  );
}
