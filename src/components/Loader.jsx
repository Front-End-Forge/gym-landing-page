import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => { setDone(true); setTimeout(onComplete, 600); }, 200);
          return 100;
        }
        return p + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-[#0a0a0a] flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <div className="font-['Bebas_Neue'] text-8xl tracking-widest text-white">
              APEX
            </div>
            <div className="font-['Rajdhani'] text-xs tracking-[0.5em] uppercase text-[#E63946] mt-1">
              Elite Fitness
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 h-[2px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#E63946] to-[#ff8c94]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.02 }}
            />
            <div
              className="absolute top-0 h-full w-8 bg-white/30 blur-sm"
              style={{ left: `${progress - 4}%`, transition: 'left 0.02s' }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-['Rajdhani'] text-sm tracking-[0.3em] text-white/40 uppercase"
          >
            {progress < 100 ? `Loading... ${progress}%` : 'Ready'}
          </motion.div>

          {/* Decorative */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px bg-gradient-to-b from-transparent via-[#E63946]/20 to-transparent"
                style={{ left: `${10 + i * 16}%`, height: '100%' }}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: i * 0.1, duration: 1 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
