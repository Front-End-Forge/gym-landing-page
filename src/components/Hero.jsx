import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Play, TrendingUp, Users, Award } from 'lucide-react';

const stats = [
  { value: '15K+', label: 'Members', icon: Users },
  { value: '10', label: 'Branches', icon: TrendingUp },
  { value: '50+', label: 'Trainers', icon: Award },
];

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const scrollDown = () => {
    document.querySelector('#equipment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/banner.webp"
          alt="APEX Gym Facility"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="sync"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      {/* Animated grid lines */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[20, 40, 60, 80].map((left) => (
          <div
            key={left}
            className="absolute top-0 bottom-0 w-px bg-white/[0.05]"
            style={{ left: `${left}%` }}
          />
        ))}
      </div>


      {/* Glowing accent */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(230,57,70,0.15) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-px bg-[#E63946]" />
            <span className="section-subtitle">India's #1 Premium Fitness Chain</span>
          </motion.div>

          {/* Headline */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="font-['Bebas_Neue'] text-[clamp(4rem,12vw,9rem)] leading-[0.9] tracking-wide text-white mb-6"
          >
            Transform<br />
            Your <span className="text-gradient">Body</span>,<br />
            Your <span className="text-gradient">Life</span>
          </motion.h1>


          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/60 text-lg font-['Barlow'] font-light max-w-md mb-10 leading-relaxed"
          >
            Join 15,000+ members who chose APEX to unlock their peak physical potential. World-class equipment. Elite coaches. Real results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <button
              onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-base"
            >
              Join Now
            </button>
            <button
              onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline text-base"
            >
              Book Free Trial
            </button>
            <button
              onClick={() => setShowVideo(true)}
              aria-label="Watch Tour Video"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#E63946] group-hover:shadow-[0_0_20px_rgba(230,57,70,0.3)] transition-all">
                <Play size={16} fill="currentColor" />
              </div>
              <span className="font-['Rajdhani'] font-semibold tracking-widest text-sm uppercase">Watch Tour</span>
            </button>
          </motion.div>

          {showVideo && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <div className="relative w-[90%] max-w-4xl">

                <button
                  onClick={() => setShowVideo(false)}
                  aria-label="Close Video"
                  className="absolute -top-10 right-0 text-white text-xl"
                >
                  ✕
                </button>

                <video
                  src="/video/Video Project 1.webm"
                  controls
                  autoPlay
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          )}


          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex gap-8 sm:gap-16"
          >
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center sm:text-left">
                <div className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-gradient">{value}</div>
                <div className="font-['Rajdhani'] text-xs tracking-[0.2em] uppercase text-white/40 mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Ticker */}

      <div className="absolute bottom-20 left-0 right-0 overflow-hidden border-y border-[#E63946]/10 py-3 bg-black/40 backdrop-blur-sm">
        <div className="flex gap-12 animate-ticker-css whitespace-nowrap">
          {['STRENGTH', 'POWER', 'GAINS', 'APEX ELITE', 'NO LIMITS'].map((word, i) => (
            <span key={i} className="font-['Bebas_Neue'] text-sm tracking-[0.5em] text-white/20">
              {word} <span className="text-[#E63946] ml-4">⬥</span>
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {['STRENGTH', 'POWER', 'GAINS', 'APEX ELITE', 'NO LIMITS'].map((word, i) => (
            <span key={`dup-${i}`} className="font-['Bebas_Neue'] text-sm tracking-[0.5em] text-white/20">
              {word} <span className="text-[#E63946] ml-4">⬥</span>
            </span>
          ))}
        </div>
      </div>


      {/* Scroll indicator */}

      <button
        onClick={scrollDown}
        aria-label="Scroll Down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 hover:text-[#E63946] transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
