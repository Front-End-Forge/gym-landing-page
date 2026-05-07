import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { pricingPlans } from '../data/siteData';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0a0a0a] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="section-subtitle mb-4">Invest In Yourself</div>
          <h2 className="section-title">
            Fee <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto font-['Barlow']">
            Transparent pricing with no hidden charges. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                plan.bestValue
                  ? 'bg-gradient-to-b from-[#1a0a0b] to-[#0a0a0a] border border-[#E63946]/50 shadow-[0_0_50px_rgba(230,57,70,0.2)]'
                  : 'glass border border-white/5 hover:border-white/20'
              }`}
            >
              {plan.bestValue && (
                <div className="bg-gradient-to-r from-[#E63946] to-[#ff4757] text-white py-2 text-center font-['Rajdhani'] font-bold text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-2">
                  <Zap size={12} fill="white" /> Best Value <Zap size={12} fill="white" />
                </div>
              )}

              <div className="p-8">
                <h3 className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-1">{plan.name}</h3>
                <div className="w-8 h-px mb-6" style={{ background: plan.color }} />

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="font-['Bebas_Neue'] text-6xl text-white">{plan.price}</span>
                  <span className="text-white/30 text-sm font-['Barlow']">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: plan.color + '20', border: `1px solid ${plan.color}50` }}
                      >
                        <Check size={10} style={{ color: plan.color }} />
                      </div>
                      <span className="text-white/60 text-sm font-['Barlow']">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-4 font-['Rajdhani'] font-bold tracking-[0.2em] uppercase text-sm transition-all duration-300"
                  style={{
                    background: plan.bestValue ? '#E63946' : 'transparent',
                    border: `1px solid ${plan.bestValue ? '#E63946' : 'rgba(255,255,255,0.15)'}`,
                    color: 'white',
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                  }}
                  onMouseEnter={(e) => !plan.bestValue && (e.target.style.borderColor = plan.color)}
                  onMouseLeave={(e) => !plan.bestValue && (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
