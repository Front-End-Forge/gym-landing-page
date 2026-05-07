import { motion } from 'framer-motion';
import { galleryImages } from '../data/siteData';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#0d0d0d] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end gap-4">
          <div>
            <div className="section-subtitle mb-4">Workout Environment</div>
            <h2 className="section-title">
              Our <span className="text-gradient">Space</span>
            </h2>
          </div>
          <p className="md:ml-auto max-w-xs text-white/40 text-sm font-['Barlow'] md:text-right">
            Designed to inspire. Built to perform. Every corner of APEX motivates greatness.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={`APEX Gym Gallery ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Red corner */}
              <div
                className="absolute top-0 left-0 w-0 h-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  borderTop: '40px solid #E63946',
                  borderRight: '40px solid transparent',
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-0 h-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  borderBottom: '40px solid #E63946',
                  borderLeft: '40px solid transparent',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
