import { motion } from 'framer-motion';
import { Calendar, Users, Trophy } from 'lucide-react';
import { competitions } from '../data/siteData';

export default function Competitions() {
  return (
    <section id="competitions" className="py-24 bg-[#0d0d0d] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <div className="section-subtitle mb-4">Compete & Conquer</div>
          <h2 className="section-title">
            Events & <span className="text-gradient">Competitions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitions.map((comp, i) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass border border-white/5 rounded-sm p-6 group hover:border-white/10 transition-all duration-300 relative overflow-hidden"
            >
              {/* Accent */}
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ background: comp.color }}
              />

              <div className="pl-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-2xl mb-2">{comp.icon}</div>
                    <div
                      className="font-['Rajdhani'] text-xs tracking-[0.3em] uppercase font-bold mb-2"
                      style={{ color: comp.color }}
                    >
                      {comp.type}
                    </div>
                    <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white group-hover:text-[#E63946] transition-colors">
                      {comp.name}
                    </h3>
                  </div>
                  <Trophy size={24} className="text-white/10 group-hover:text-white/20 transition-colors" />
                </div>

                <p className="text-white/50 text-sm leading-relaxed font-['Barlow'] mb-4">{comp.description}</p>

                <div className="flex items-center gap-6 text-xs text-white/30 font-['Rajdhani'] tracking-widest uppercase">
                  <span className="flex items-center gap-2">
                    <Calendar size={12} style={{ color: comp.color }} />
                    {comp.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users size={12} style={{ color: comp.color }} />
                    {comp.participants} participants
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
