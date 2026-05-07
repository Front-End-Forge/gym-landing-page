import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email needed';
    if (!form.message.trim()) e.message = 'Required';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    setSent(true);
  };

  const inputClass = (f) =>
    `w-full bg-white/5 border ${errors[f] ? 'border-red-500/60' : 'border-white/10'} text-white placeholder-white/30 px-4 py-3 font-['Barlow'] text-sm outline-none focus:border-[#E63946]/60 transition-all duration-300 resize-none`;

  return (
    <section id="contact" className="py-24 bg-[#0d0d0d] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="section-subtitle mb-4">Get In Touch</div>
          <h2 className="section-title">
            Contact <span className="text-gradient">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Visit Us', value: '47, 5th Block, Koramangala, Bengaluru – 560095' },
                { icon: Phone, label: 'Call Us', value: '+91 80 4141 2200' },
                { icon: Mail, label: 'Email Us', value: 'hello@apexfitness.in' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 glass border border-white/5 p-5 rounded-sm">
                  <div className="w-12 h-12 glass-red flex items-center justify-center border border-[#E63946]/20 flex-shrink-0">
                    <Icon size={20} className="text-[#E63946]" />
                  </div>
                  <div>
                    <div className="section-subtitle mb-1">{label}</div>
                    <div className="text-white/70 font-['Barlow'] text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="relative h-64 overflow-hidden rounded-sm border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.478!2d77.6267!3d12.9279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159161aea283%3A0x3b1e7a38ab8a5f0f!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="APEX Gym Location"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-red border border-[#E63946]/30 p-12 text-center h-full flex flex-col items-center justify-center rounded-sm"
              >
                <CheckCircle size={60} className="text-[#E63946] mb-6" />
                <h3 className="font-['Bebas_Neue'] text-4xl tracking-wide text-white mb-3">Message Sent!</h3>
                <p className="text-white/50 font-['Barlow']">We'll get back to you within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                  className="btn-primary mt-8">Send Another</button>
              </motion.div>
            ) : (
              <div className="glass border border-white/5 p-8 rounded-sm h-full">
                <h3 className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-6">Send a Message</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className={inputClass('name')} aria-label="Your Name" placeholder="Your Name" />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        className={inputClass('phone')} aria-label="Phone Number" placeholder="Phone (optional)" />
                    </div>
                  </div>
                  <div>
                    <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className={inputClass('email')} aria-label="Email Address" placeholder="Email Address" type="email" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className={inputClass('message')} aria-label="Your Message" placeholder="Your Message..." rows={6} />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button onClick={handleSubmit} className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send size={16} /> Send Message
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
