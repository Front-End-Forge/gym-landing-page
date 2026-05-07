// import { motion } from 'framer-motion';
import { Share2, MessageCircle, Video, Globe, Zap, ArrowUp } from 'lucide-react';
import { navLinks } from '../data/siteData';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#080808] border-t border-white/5 relative">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#E63946] flex items-center justify-center"
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                <Zap size={16} fill="white" className="text-white" />
              </div>
              <span className="font-['Bebas_Neue'] text-3xl tracking-widest text-white">APEX</span>
            </div>
            <p className="text-white/40 text-sm font-['Barlow'] leading-relaxed max-w-xs mb-6">
              India's premium fitness destination. Transform your body, elevate your life. Est. 2015.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Share2, label: 'Share' },
                { Icon: MessageCircle, label: 'Message' },
                { Icon: Video, label: 'Video Call' },
                { Icon: Globe, label: 'Website' }
              ].map(({ Icon, label }, i) => (
                <a key={i} href="#"
                  aria-label={label}
                  className="w-10 h-10 glass border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#E63946]/40 transition-all duration-300"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))' }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="section-subtitle mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="text-white/40 hover:text-[#E63946] text-sm font-['Barlow'] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-subtitle mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-white/40 font-['Barlow']">
              <li>47, 5th Block, Koramangala</li>
              <li>Bengaluru – 560095</li>
              <li className="pt-2">+91 80 4141 2200</li>
              <li>hello@apexfitness.in</li>
              <li className="pt-2">Mon–Sat: 5AM–11PM</li>
              <li>Sun: 7AM–9PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-['Barlow'] tracking-widest">
            © 2026 APEX Elite Fitness. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/20 font-['Barlow']">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/50 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>

      {/* Back to top */}

      <button
        onClick={scrollTop}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 w-12 h-12 bg-[#E63946] text-white flex items-center justify-center z-50 shadow-lg active:scale-90 hover:scale-110 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
