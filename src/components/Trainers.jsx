import { motion } from 'framer-motion';
import { Share2, MessageCircle, Video } from 'lucide-react';
import { trainers } from '../data/siteData';

function TrainerCard({ trainer, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative overflow-hidden rounded-sm"
    >
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={trainer.img}
          alt={`Trainer ${trainer.name}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

        {/* Hover overlay with socials */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            {[
              { Icon: Share2, label: 'Share' },
              { Icon: MessageCircle, label: 'Message' },
              { Icon: Video, label: 'Video Call' }
            ].map(({ Icon, label }, i) => (
              <a
                key={i}
                href="#"
                aria-label={`${label} ${trainer.name}`}
                className="w-10 h-10 glass border border-white/20 flex items-center justify-center text-white hover:text-[#E63946] hover:border-[#E63946]/50 transition-all duration-300"
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Color accent */}
        <div
          className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
          style={{ background: trainer.color, opacity: 0.8 }}
        />
      </div>

      {/* Info */}
      <div className="bg-[#111] border border-white/5 group-hover:border-white/10 p-5 transition-all duration-300">
        <div
          className="font-['Rajdhani'] text-xs tracking-[0.3em] uppercase font-bold mb-1"
          style={{ color: trainer.color }}
        >
          {trainer.specialization}
        </div>
        <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white group-hover:text-[#E63946] transition-colors">
          {trainer.name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-white/30 text-xs font-['Barlow']">{trainer.experience} exp.</span>
          <span className="text-white/30 text-xs font-['Barlow']">{trainer.certifications}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-[#0d0d0d] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end gap-4">
          <div>
            <div className="section-subtitle mb-4">Meet the Experts</div>
            <h2 className="section-title">
              Our Elite <span className="text-gradient">Trainers</span>
            </h2>
          </div>
          <p className="md:ml-auto max-w-xs text-white/40 text-sm font-['Barlow'] md:text-right">
            Certified, experienced, and passionate. Your success is their mission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((t, i) => (
            <TrainerCard key={t.name} trainer={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
