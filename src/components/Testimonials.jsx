import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/siteData';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent(c => (c + 1) % testimonials.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const go = (dir) => {
    setDirection(dir);
    setCurrent(c => (c + dir + testimonials.length) % testimonials.length);
    startTimer();
  };

  const variants = {
    enter: (d) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <LazyMotion features={domAnimation}>
      <section id="testimonials" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946]/30 to-transparent" />

        {/* Background quote mark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Bebas_Neue'] text-[30rem] text-white/[0.015] select-none pointer-events-none leading-none">
          "
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="section-subtitle mb-4">Real People, Real Results</div>
            <h2 className="section-title">
              What Members <span className="text-gradient">Say</span>
            </h2>
          </div>

          <div className="relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="glass-red rounded-sm p-8 md:p-12 relative"
              >
                <Quote size={40} className="text-[#E63946]/30 absolute top-8 left-8" />

                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={t.img}
                        alt={`${t.name} Testimonial`}
                        loading="lazy"
                        decoding="async"
                        className="w-20 h-20 rounded-full object-cover border-2 border-[#E63946]/40"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#E63946] rounded-full flex items-center justify-center">
                        <Star size={10} fill="white" className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#E63946" className="text-[#E63946]" />
                      ))}
                    </div>
                    <p className="text-white/70 text-lg leading-relaxed font-['Barlow'] font-light mb-6 italic">
                      "{t.text}"
                    </p>
                    <div>
                      <div className="font-['Bebas_Neue'] text-xl tracking-wide text-white">{t.name}</div>
                      <div className="section-subtitle mt-1">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={() => go(-1)}
                aria-label="Previous Testimonial"
                className="w-12 h-12 glass border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#E63946]/50 transition-all"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to Testimonial ${i + 1}`}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); startTimer(); }}
                    className="transition-all duration-300"
                    style={{
                      width: i === current ? 32 : 8,
                      height: 8,
                      borderRadius: 4,
                      background: i === current ? '#E63946' : 'rgba(255,255,255,0.15)',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => go(1)}
                aria-label="Next Testimonial"
                className="w-12 h-12 glass border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#E63946]/50 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
