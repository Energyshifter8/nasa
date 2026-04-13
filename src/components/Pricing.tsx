import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const pricingPlans = [
  {
    id: 1,
    name: 'Суудлын',
    price: '2,400,000',
    currency: '₮',
    duration: '/сургалт',
    description: 'Бүрэн оф-лайн сургалт + материал',
    features: [
      '✓ 9.5 долоо хоног живе хичээл',
      '✓ React, TypeScript, 3D судлах',
      '✓ 50+ практик дасгал',
      '✓ Шаардлагатай бүх материал',
      '✓ Сертификат авах',
      '✓ Discord дэмжлэг',
      '✓ 3 сарын дараа үнэлгээ',
    ],
    highlight: false,
    badge: '8/9 буланд үнэлээ',
    cta: 'Суудал Сонгох',
  },
  {
    id: 2,
    name: 'Он-лайн',
    price: '1,680,000',
    currency: '₮',
    duration: '/сургалт',
    description: 'Он-лайн живе + бүх материал',
    features: [
      '✓ 9.5 долоо хоног живе хичээл (Zoom)',
      '✓ Бүх видео түүхүүдийг авах',
      '✓ React, TypeScript, 3D судлах',
      '✓ 50+ практик дасгал',
      '✓ Сертификат авах',
      '✓ Discord дэмжлэг',
      '✓ Хязгааргүй нээлтүүлэх эрх',
    ],
    highlight: true,
    badge: 'Хүүхдүүсийн сонгосон',
    cta: 'Он-лайн Үйлчилгээ',
  },
  {
    id: 3,
    name: 'Бие даан',
    price: '1,200,000',
    currency: '₮',
    duration: '/сургалт',
    description: 'Бүх видео + материалд нээлтүүлэх эрх',
    features: [
      '✓ 200+ цаг видео хичээл',
      '✓ Lifelong нээлтүүлэх эрх',
      '✓ React, TypeScript, 3D судлах',
      '✓ 50+ практик дасгал',
      '✓ Сертификат авах',
      '✓ Email дэмжлэг',
      '✓ Төлбөр буцаалцуулах баталгаа',
    ],
    highlight: false,
    badge: 'Эдэлгээгүй',
    cta: 'Үзэх',
  },
];

const faqs = [
  {
    q: 'Төлбөр буцаалцуулалт боломжтой юу?',
    a: '14 өдрийн эргүүлэх баталгаа. Хэрэв сэтгэлдээ сэтгэлтэй биш бол бүрэн төлбөр буцаана.',
  },
  {
    q: 'Анхан шатны ур чадвар хэрэгтэй юу?',
    a: 'Үгүй! React эхлэлүүдийн хувьд完璧です. JavaScript үндсүүдийг судлаад үлдэхийтэй.',
  },
  {
    q: 'Сертификат аverdade ямар утгатай?',
    a: 'Манай сертификат үндэсний түвшинд хүлээн зөвшөөрөгдөнө. LinkedIn-д нэмэхэд маш сайн.',
  },
  {
    q: 'Хичээлээс хойш ажилтан олно уу?',
    a: '100 гаруй компанитай хамтран ажиллаж байна. Сайнаараа хийсэн оюутнуудыг санал болгодог.',
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative py-40 px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #06020D 0%, #0a0a0f 100%)',
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="section-label mb-6 text-orange-300"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            — Үнийн Сонголт
          </motion.div>
          <h2 className="display-heading text-7xl md:text-8xl mb-8">
            Сургалтын<br />
            <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
              Үнэ
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-xl">
            Та хаанд байрлаж байсан ч, боломжтой үнээр сургалтыг авах боломжтой.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.15 }}
              className="relative group"
              whileHover={{ scale: plan.highlight ? 1.02 : 1.01 }}
            >
              <div
                className="relative h-full rounded-3xl border p-8 flex flex-col"
                style={{
                  background: plan.highlight
                    ? 'linear-gradient(135deg, var(--purple)/20, var(--orange)/10)'
                    : '#0D0D0D',
                  border: plan.highlight
                    ? '2px solid var(--purple)'
                    : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: plan.highlight
                    ? `0 0 40px var(--purple)40`
                    : '0 10px 30px rgba(0,0,0,0.3)',
                }}
              >
                {/* Badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-8">
                    <div className="chip chip-purple text-xs">⭐ {plan.badge}</div>
                  </div>
                )}

                {/* Badge for others */}
                {!plan.highlight && (
                  <div className="inline-block w-fit mb-4">
                    <div className="chip chip-ghost text-xs">{plan.badge}</div>
                  </div>
                )}

                {/* Plan name */}
                <h3 className="font-condensed font-black text-3xl text-white mb-2 uppercase tracking-wider">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="font-condensed font-black text-5xl text-white">
                      {plan.price}
                    </span>
                    <span className="text-white/60 font-condensed">{plan.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 flex-1 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 text-white/80"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                    >
                      <span
                        className="text-lg"
                        style={{ color: plan.highlight ? 'var(--purple)' : 'var(--orange)' }}
                      >
                        {feature.split('✓')[0]}✓
                      </span>
                      <span className="text-sm font-condensed">{feature.split('✓')[1]}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href="#register"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-condensed font-bold uppercase tracking-wider transition-all duration-300 text-center block ${
                    plan.highlight ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="divider mb-20" />

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="font-condensed font-black text-4xl text-white uppercase tracking-wider mb-12 text-center">
            Түгээмэл Асуулт
          </h3>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="rounded-xl border border-white/10 overflow-hidden"
                whileHover={{ borderColor: 'var(--purple)' }}
              >
                <motion.button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 bg-gray-900/50 hover:bg-gray-900 transition-colors"
                >
                  <span className="font-condensed font-bold text-lg text-white text-left">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: expandedFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl flex-shrink-0"
                  >
                    ▼
                  </motion.span>
                </motion.button>

                {expandedFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-gray-950/50 border-t border-white/5"
                  >
                    <p className="text-white/70 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <p className="text-white/50 text-lg mb-8">
            Асуулт байна уу? Манайтай холбоо бариарай.
          </p>
          <a href="mailto:info@react3dac.mn">
            <button className="btn-primary text-lg px-12 py-4">
              Холбоо Барих
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
