import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { dietPlans } from '../data/siteData';

export default function DietPlans() {
  return (
    <section id="diet" className="py-24 bg-[#0d0d0d] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="section-subtitle mb-4">Fuel Your Goals</div>
          <h2 className="section-title">
            Diet <span className="text-gradient">Plans</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto font-['Barlow']">
            Science-backed nutrition programs crafted by certified dietitians to fuel your specific goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dietPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-sm overflow-hidden ${
                plan.recommended ? 'border border-[#E63946]/50 shadow-[0_0_40px_rgba(230,57,70,0.15)]' : 'glass border border-white/5'
              }`}
            >
              {plan.recommended && (
                <div className="bg-[#E63946] text-white text-center py-2 font-['Rajdhani'] font-bold text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-2">
                  <Star size={12} fill="white" /> Recommended Plan <Star size={12} fill="white" />
                </div>
              )}

              <div className={`p-8 ${plan.recommended ? 'bg-[#1a0a0b]' : 'bg-[#111]'}`}>
                {/* Plan header */}
                <div className="mb-8">
                  <div
                    className="font-['Rajdhani'] text-xs tracking-[0.3em] uppercase font-bold mb-2"
                    style={{ color: plan.color }}
                  >
                    {plan.tagline}
                  </div>
                  <h3 className="font-['Bebas_Neue'] text-4xl tracking-wide text-white">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-['Bebas_Neue'] text-5xl text-white">{plan.price}</span>
                    <span className="text-white/40 font-['Barlow'] text-sm">/month</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Check size={14} style={{ color: plan.color }} className="flex-shrink-0" />
                      <span className="text-white/60 text-sm font-['Barlow']">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-3 font-['Rajdhani'] font-bold tracking-[0.2em] uppercase text-sm transition-all duration-300"
                  style={{
                    background: plan.recommended ? '#E63946' : 'transparent',
                    border: `1px solid ${plan.recommended ? '#E63946' : 'rgba(255,255,255,0.15)'}`,
                    color: plan.recommended ? 'white' : 'white',
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.recommended) {
                      e.target.style.borderColor = plan.color;
                      e.target.style.color = plan.color;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.recommended) {
                      e.target.style.borderColor = 'rgba(255,255,255,0.15)';
                      e.target.style.color = 'white';
                    }
                  }}
                >
                  Get This Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
