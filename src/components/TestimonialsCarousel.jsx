import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function TestimonialsCarousel({ testimonials }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const active = testimonials[index];

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-premium sm:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(244,185,66,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.2),_transparent_35%)]" />
      <AnimatePresence mode="wait">
        <motion.div
          key={active.name}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -22 }}
          transition={{ duration: 0.45 }}
          className="relative z-10 grid gap-6 lg:grid-cols-[140px_1fr] lg:items-center"
        >
          <img src={active.photo} alt={active.name} className="h-36 w-36 rounded-3xl object-cover ring-4 ring-white/10" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300">{active.course}</p>
            <blockquote className="mt-4 text-xl font-medium leading-9 text-white sm:text-2xl">
              “{active.quote}”
            </blockquote>
            <p className="mt-6 text-sm font-semibold text-slate-200">{active.name}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 mt-8 flex gap-2">
        {testimonials.map((testimonial, testimonialIndex) => (
          <button
            type="button"
            key={testimonial.name}
            onClick={() => setIndex(testimonialIndex)}
            className={`h-2.5 rounded-full transition-all ${testimonialIndex === index ? 'w-10 bg-gold-300' : 'w-2.5 bg-white/30'}`}
            aria-label={`View testimonial from ${testimonial.name}`}
          />
        ))}
      </div>
    </div>
  );
}