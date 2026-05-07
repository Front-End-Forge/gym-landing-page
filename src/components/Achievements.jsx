import { motion } from 'framer-motion';
import { achievements } from '../data/siteData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946]/30 to-transparent" />

      {/* Background text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-['Bebas_Neue'] text-[20rem] text-white/[0.012] select-none pointer-events-none leading-none pr-8">
        APEX
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="section-subtitle mb-4">Our Journey</div>
          <h2 className="section-title">
            Achievements &<br /><span className="text-gradient">Awards</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#E63946] via-[#E63946]/30 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {achievements.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1.5 md:-translate-x-2 bg-[#E63946] rounded-full border-2 border-[#0a0a0a] z-10"
                  style={{ top: '1.25rem', boxShadow: '0 0 20px rgba(230,57,70,0.6)' }}
                />

                {/* Year badge */}
                <div className={`md:w-1/2 flex ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} pl-12 md:pl-0`}>
                  <div className="flex flex-col md:items-center">
                    <div className="font-['Bebas_Neue'] text-5xl text-gradient leading-none">{item.year}</div>
                  </div>
                </div>

                {/* Card */}
                <div className="md:w-1/2 pl-12 md:pl-0">
                  <div className="glass border border-white/5 rounded-sm p-6 hover:border-[#E63946]/20 transition-all duration-300 group">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white group-hover:text-[#E63946] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed font-['Barlow']">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
