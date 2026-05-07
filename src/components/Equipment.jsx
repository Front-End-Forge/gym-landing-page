import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { equipment } from '../data/siteData';

function EquipCard({ item, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
      className="group relative overflow-hidden rounded-sm glass border border-white/5 cursor-pointer transition-all duration-300 hover:border-[#E63946]/30"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.img}
          alt={`${item.name} equipment`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute top-4 left-4">
          <span
            className="font-['Rajdhani'] text-xs font-bold tracking-[0.2em] uppercase px-3 py-1"
            style={{ background: item.color + '22', color: item.color, border: `1px solid ${item.color}44` }}
          >
            {item.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 text-3xl">{item.icon}</div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-2 group-hover:text-[#E63946] transition-colors">
          {item.name}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed font-['Barlow']">{item.description}</p>

        {/* Glow line on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px transition-all duration-300 opacity-0 group-hover:opacity-100"
          style={{ background: `linear-gradient(to right, transparent, ${item.color}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end gap-6">
          <div>
            <div className="section-subtitle mb-4">World-Class Facility</div>
            <h2 className="section-title">
              Our <span className="text-gradient">Equipment</span>
            </h2>
          </div>
          <p className="md:ml-auto max-w-sm text-white/40 text-sm leading-relaxed font-['Barlow'] md:text-right">
            Over 300 pieces of premium equipment across 10,000+ sq ft of training space. Every machine maintained daily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, i) => (
            <EquipCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
