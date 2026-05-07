import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Dumbbell, CheckCircle } from 'lucide-react';

const programs = ['Strength Training', 'HIIT Cardio', 'Yoga & Mobility', 'Powerlifting', 'Body Transformation', 'Functional Fitness'];

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', program: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.date) e.date = 'Date required';
    if (!form.time) e.time = 'Time required';
    if (!form.program) e.program = 'Select a program';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full bg-white/5 border ${errors[field] ? 'border-red-500/60' : 'border-white/10'} text-white placeholder-white/30 px-4 py-3 font-['Barlow'] text-sm outline-none focus:border-[#E63946]/60 transition-all duration-300`;

  return (
    <section id="booking" className="py-24 bg-[#0a0a0a] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-subtitle mb-4">Start Your Journey</div>
            <h2 className="section-title mb-6">
              Book Your <span className="text-gradient">Session</span>
            </h2>
            <p className="text-white/50 font-['Barlow'] leading-relaxed mb-10">
              Your first session is on us. Schedule a free trial with one of our elite trainers and experience the APEX difference.
            </p>

            <div className="space-y-6">
              {[
                { icon: Calendar, title: 'Flexible Scheduling', desc: 'Book sessions 7 days ahead, cancel up to 4 hours before.' },
                { icon: Clock, title: '60-Min Sessions', desc: 'Focused, results-oriented training with zero filler.' },
                { icon: Dumbbell, title: 'Personalized Program', desc: 'Every session built around your goals and fitness level.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-12 h-12 glass-red flex items-center justify-center flex-shrink-0 border border-[#E63946]/20">
                    <Icon size={20} className="text-[#E63946]" />
                  </div>
                  <div>
                    <div className="font-['Rajdhani'] font-bold text-white text-sm tracking-wider">{title}</div>
                    <div className="text-white/40 text-sm font-['Barlow'] mt-1">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-red border border-[#E63946]/30 p-12 text-center rounded-sm"
              >
                <CheckCircle size={60} className="text-[#E63946] mx-auto mb-6" />
                <h3 className="font-['Bebas_Neue'] text-4xl tracking-wide text-white mb-3">Session Booked!</h3>
                <p className="text-white/50 font-['Barlow']">
                  We'll send a confirmation to <strong className="text-white">{form.email}</strong> shortly.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', date: '', time: '', program: '' }); }}
                  className="btn-primary mt-8">
                  Book Another
                </button>
              </motion.div>
            ) : (
              <div className="glass border border-white/5 p-8 rounded-sm">
                <h3 className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-6">Schedule Your Session</h3>

                <div className="space-y-4">
                  <div>
                    <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      className={inputClass('name')} aria-label="Full Name" placeholder="Your Full Name" />
                    {errors.name && <p className="text-red-400 text-xs mt-1 font-['Barlow']">{errors.name}</p>}
                  </div>
                  <div>
                    <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className={inputClass('email')} aria-label="Email Address" placeholder="Email Address" type="email" />
                    {errors.email && <p className="text-red-400 text-xs mt-1 font-['Barlow']">{errors.email}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
                        className={inputClass('date')} aria-label="Session Date" type="date"
                        style={{ colorScheme: 'dark' }} />
                      {errors.date && <p className="text-red-400 text-xs mt-1 font-['Barlow']">{errors.date}</p>}
                    </div>
                    <div>
                      <select value={form.time} onChange={e => setForm({ ...form, time: e.target.value })}
                        className={inputClass('time') + ' cursor-pointer'}
                        aria-label="Session Time"
                        style={{ background: '#111' }}>
                        <option value="">Select Time</option>
                        {['5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      {errors.time && <p className="text-red-400 text-xs mt-1 font-['Barlow']">{errors.time}</p>}
                    </div>
                  </div>
                  <div>
                    <select value={form.program} onChange={e => setForm({ ...form, program: e.target.value })}
                      className={inputClass('program') + ' cursor-pointer'}
                      aria-label="Training Program"
                      style={{ background: '#111' }}>
                      <option value="">Select Program</option>
                      {programs.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                    {errors.program && <p className="text-red-400 text-xs mt-1 font-['Barlow']">{errors.program}</p>}
                  </div>

                  <button onClick={handleSubmit} className="btn-primary w-full text-center mt-2">
                    Schedule My Free Session
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
