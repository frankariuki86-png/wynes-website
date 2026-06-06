import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import GalleryLightbox from '../components/GalleryLightbox';
import Seo from '../components/Seo';
import { galleryImages } from '../data/siteData';

export default function GalleryPage() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      <Seo title="WynesTTI Gallery" description="See campus life, practical sessions, graduation moments and student activities at Wynes Technical Training Institute." />
      <PageHero
        kicker="Student Life"
        title="Campus energy, practical work and real student moments"
        subtitle="A visual tour of the classroom, workshop and students project moments that shape the WynesTTI experience."
        image={`${import.meta.env.BASE_URL}wynes%20photos/gallerly7.jpeg`}
      />
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="section-shell">
          <div className="columns-1 gap-5 md:columns-2 xl:columns-3 [column-fill:_balance]">
            {galleryImages.map((item, index) => (
              <motion.button
                key={item.alt}
                type="button"
                onClick={() => setActiveItem(item)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group mb-5 block w-full overflow-hidden rounded-3xl bg-white text-left shadow-lg shadow-slate-200/70"
              >
                <img src={item.src} alt={item.alt} className="h-auto w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="p-4">
                  <p className="text-sm font-semibold text-slate-950">{item.alt}</p>
                </div>
              </motion.button>
            ))}
          </div>
          <GalleryLightbox item={activeItem} onClose={() => setActiveItem(null)} />
        </div>
      </section>
    </>
  );
}