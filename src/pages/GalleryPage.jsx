import { useState } from 'react';
import PageHero from '../components/PageHero';
import GalleryCarousel from '../components/GalleryCarousel';
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
          <GalleryCarousel images={galleryImages} onSelect={setActiveItem} />
          <GalleryLightbox item={activeItem} onClose={() => setActiveItem(null)} />
        </div>
      </section>
    </>
  );
}