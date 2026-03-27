import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    number: '01',
    icon: '🚀',
    title: 'Практик Төслүүд',
    description: 'Бодит дэлхийн төслүүд хийж, портфолиогоо баяжуулна. Онолоос практик руу тэр даруй шилждэг.',
    accent: 'var(--orange)',
  },
  {
    number: '02',
    icon: '⚡',
    title: 'TypeScript Суурь',
    description: 'TypeScript-ийн хүчийг ашиглан найдвартай, scalable код бичиж сурна. Алдааг эрт илрүүлнэ.',
    accent: 'var(--purple-light)',
  },
  {
    number: '03',
    icon: '🎮',
    title: '3D Вэб Интеграц',
    description: 'React Three Fiber ашиглан гайхалтай 3D туршлага бүтээнэ. Ирээдүйн вэбийг өнөөдөр суралцана.',
    accent: 'var(--orange)',
  },
  {
    number: '04',
    icon: '🧠',
    title: 'Туршлагатай Ментор',
    description: '10+ жилийн туршлагатай мэргэжилтэнтэй нэг-нэгээрээ ажиллана. Шууд хариулт, шууд дэмжлэг.',
    accent: 'var(--purple-light)',
  },
];

export default function Features() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="features"
      className="py-28 px-8"
      style={{ background: '#000000' }}
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header row — sgapes style: label left, title bold */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20"
        >
          <div>
            <div className="section-label mb-4">— Яагаад энэ сургалт?</div>
            <h2 className="display-heading text-6xl md:text-7xl">
              Давуу
              <br />
              <span style={{ color: 'var(--orange)' }}>Талууд</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-md font-condensed text-lg leading-snug">
            Энэ сургалт нь таныг шинэхэн хөгжүүлэгчээс мэргэжлийн 3D вэб хөгжүүлэгч болоход бүхий л хэрэгсэл, мэдлэгийг олгоно.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="divider mb-12" />

        {/* Feature list — horizontal numbered items like sports media sites */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: 'rgba(255,255,255,0.06)' }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group p-8 cursor-pointer transition-all duration-300"
              style={{ background: '#000' }}
            >
              {/* Number */}
              <div
                className="font-condensed font-900 text-6xl mb-6 transition-colors duration-300"
                style={{ color: 'rgba(255,255,255,0.08)', lineHeight: 1 }}
              >
                {f.number}
              </div>

              {/* Icon */}
              <div className="text-3xl mb-5">{f.icon}</div>

              {/* Accent line */}
              <div
                className="h-0.5 w-12 mb-5 transition-all duration-300 group-hover:w-full"
                style={{ background: f.accent }}
              />

              <h3 className="font-condensed font-800 text-xl uppercase tracking-wide text-white mb-3">
                {f.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
