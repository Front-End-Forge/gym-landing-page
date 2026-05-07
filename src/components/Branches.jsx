import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { branches } from '../data/siteData';

export default function Branches() {
  return (
    <section id="branches" className="py-24 bg-[#0a0a0a] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="section-subtitle mb-4">Find Us Near You</div>
          <h2 className="section-title">
            Branches & <span className="text-gradient">Locations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass border border-white/5 rounded-sm overflow-hidden hover:border-[#E63946]/20 transition-all duration-300 group"
            >
              {/* Map */}
              <div className="h-52 relative overflow-hidden">
                <iframe
                  src={branch.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.1)' }}
                  allowFullScreen=""
                  loading="lazy"
                  title={branch.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111]/60 to-transparent pointer-events-none" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-4 group-hover:text-[#E63946] transition-colors">
                  {branch.name}
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: MapPin, value: branch.address },
                    { icon: Phone, value: branch.phone },
                    { icon: Clock, value: branch.hours },
                  ].map(({ icon: Icon, value }, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Icon size={14} className="text-[#E63946] mt-0.5 flex-shrink-0" />
                      <span className="text-white/50 text-sm font-['Barlow']">{value}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-outline mt-5 text-sm py-2 px-5">Get Directions</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
