import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, BookOpen, CheckCircle2, GraduationCap, MapPin, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import Counter from '../components/Counter';
import GalleryLightbox from '../components/GalleryLightbox';
import SectionHeading from '../components/SectionHeading';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import Seo from '../components/Seo';
import { aboutPoints, courses, galleryImages, heroSlides, siteInfo, stats, testimonials, whyChoose } from '../data/siteData';

function HomeHero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[slide];

  return (
    <section className="relative isolate overflow-hidden bg-hero-grid pt-28 text-white">
      <div className="absolute inset-0">
          <motion.img
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 0.42, scale: 1 }}
          transition={{ duration: 0.9 }}
          src={currentSlide}
          alt="WynesTTI students"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.58)_0%,rgba(7,17,31,0.7)_60%,rgba(7,17,31,0.92)_100%)]" />
      </div>

      <div className="section-shell relative z-10 grid gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-gold-300" />
            Skills for better future
          </div>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-7xl">
              Wynes Technical Training Institute
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              {siteInfo.tagline}
            </p>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {siteInfo.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/admissions" className="btn-primary">
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/courses" className="btn-secondary">
              Explore Courses
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: GraduationCap, label: 'Industry-relevant training' },
              { icon: BookOpen, label: 'Flexible course pathways' },
              { icon: Award, label: 'Practical learning culture' },
            ].map((item) => (
              <div key={item.label} className="glass-panel rounded-3xl p-4">
                <item.icon className="h-5 w-5 text-gold-300" />
                <p className="mt-3 text-sm font-medium text-slate-100">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-white/10 blur-2xl" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 shadow-premium">
            <img src={currentSlide} alt="Campus view" className="h-[34rem] w-full rounded-[1.6rem] object-cover" />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-[1.4rem] bg-slate-950/70 px-4 py-3 backdrop-blur-xl">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-gold-300">Nakuru, Kenya</p>
                <p className="text-sm font-semibold text-white">Practical learning environment</p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-slate-100">
                <CheckCircle2 className="h-4 w-4 text-gold-300" />
                Admission Open
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-28" id="about">
      <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gold-300/20 blur-2xl" />
            <img
              src={`${import.meta.env.BASE_URL}wynes%20photos/gallerly1.jpeg`}
              alt="WynesTTI students and leadership"
            className="h-[34rem] w-full rounded-[2rem] object-cover shadow-premium"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
          <SectionHeading
            kicker="About Us"
            title="A practical institution built around real skills"
            description="WynesTTI is focused on hands-on training, creativity, confidence and professional growth. The institute prepares students for the workplace, entrepreneurship and service to community through relevant technical education."
          />
          <div className="mt-8 space-y-5">
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">Mission</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                To provide comprehensive hands-on training in an environment that nurtures creativity, technical skills and professional growth.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">Vision</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                To deliver high-quality, industry-aligned technical education that equips students with practical skills, knowledge and a success-driven mindset.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {aboutPoints.map((point) => (
              <div key={point} className="rounded-3xl border border-slate-200 px-4 py-4 text-sm text-slate-700 shadow-sm">
                {point}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CoursesPreview() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28" id="courses">
      <div className="section-shell">
        <SectionHeading
          kicker="Courses"
          title="Professional courses designed for career readiness"
          description="Explore practical programs across technical, ICT, beauty and hospitality disciplines. Every course is built to support real-world competence and confidence."
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.slice(0, 6).map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/courses" className="btn-primary">
            View All Courses
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const icons = [Award, CheckCircle2, Sparkles, BookOpen, ArrowRight, MapPin];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Why Choose WynesTTI"
          title="A premium technical institute experience"
          description="Students and parents need confidence in both the learning environment and the outcomes. WynesTTI emphasizes practical training, support and growth."
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChoose.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div key={item.title} whileHover={{ y: -6 }} className="card-soft p-7">
                <div className="inline-flex rounded-2xl bg-navy-900 p-3 text-white shadow-lg shadow-navy-900/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-navy-950 py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Achievements"
          title="Growing impact with every cohort"
          description="A modern institution should show momentum, trust and outcomes. These counters highlight the scale and direction of WynesTTI’s journey."
          center
          light
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <Counter key={item.label} value={item.value} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <section className="bg-slate-50 py-20 lg:py-28" id="gallery">
      <div className="section-shell">
        <SectionHeading
          kicker="Student Life / Gallery"
          title="A glimpse into campus life and practical sessions"
          description="From workshops to graduation moments, the gallery reflects the active learning culture and welcoming atmosphere at WynesTTI."
          center
        />
        <div className="mt-14 columns-1 gap-5 md:columns-2 xl:columns-3 [column-fill:_balance]">
          {galleryImages.map((item) => (
            <button
              key={item.alt}
              type="button"
              onClick={() => setActiveItem(item)}
              className="group mb-5 block w-full overflow-hidden rounded-3xl bg-white text-left shadow-lg shadow-slate-200/70"
            >
              <img src={item.src} alt={item.alt} className="h-auto w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="p-4">
                <p className="text-sm font-semibold text-slate-950">{item.alt}</p>
              </div>
            </button>
          ))}
        </div>
        <GalleryLightbox item={activeItem} onClose={() => setActiveItem(null)} />
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Student Voices"
          title="What students say about WynesTTI"
          description="Testimonials highlight the support, professionalism and hands-on value students experience during training."
          center
        />
        <div className="mt-14">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}

function AdmissionsBanner() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-navy-950 via-navy-900 to-slate-900 px-8 py-12 text-white shadow-premium sm:px-12 sm:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(244,185,66,0.25),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.2),_transparent_30%)]" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="section-kicker text-gold-300">Admissions</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Start Your Journey With WynesTTI Today</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Join a practical training environment built to help you gain market-ready skills, confidence and a clear career direction.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="btn-primary">
                Apply Now
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPreview() {
  return (
    <section className="bg-white py-20 lg:py-28" id="contact">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            kicker="Get in Touch"
            title="Ready to speak with admissions?"
            description="Reach WynesTTI by phone, email or WhatsApp. The campus is based in Nakuru, Kenya and welcomes enquiries from students and parents."
          />
          <div className="mt-8 space-y-4">
            <div className="rounded-3xl bg-slate-50 p-5"><Phone className="h-5 w-5 text-gold-500" /> <p className="mt-3 font-medium text-slate-900">{siteInfo.phone}</p></div>
            <div className="rounded-3xl bg-slate-50 p-5"><MapPin className="h-5 w-5 text-gold-500" /> <p className="mt-3 font-medium text-slate-900">{siteInfo.address}</p></div>
            <div className="rounded-3xl bg-slate-50 p-5"><Sparkles className="h-5 w-5 text-gold-500" /> <p className="mt-3 font-medium text-slate-900">WhatsApp support available for quick admissions enquiries</p></div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-premium">
          <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-800">
            <img
              src="https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png"
              alt="Location icon"
              className="h-5 w-5 object-contain"
            />
            WynesTTI map
          </div>
          <iframe
            title="WynesTTI map"
            src="https://www.google.com/maps?q=Nakuru%20Kenya&output=embed"
            className="h-[26rem] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const pageDescription = useMemo(
    () =>
      'Wynes Technical Training Institute (WynesTTI) is a modern, practical and premium learning destination in Nakuru, Kenya for technical, ICT, beauty and hospitality training.',
    [],
  );

  return (
    <>
      <Seo title="WynesTTI | Wynes Technical Training Institute" description={pageDescription} />
      <HomeHero />
      <AboutSection />
      <CoursesPreview />
      <WhyChooseSection />
      <StatsSection />
      <GallerySection />
      <TestimonialsSection />
      <AdmissionsBanner />
      <ContactPreview />
    </>
  );
}