import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60"
    >
      <div className="relative h-52 overflow-hidden">
        <img src={course.image} alt={course.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
          {course.category}
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-slate-950">{course.title}</h3>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{course.duration}</span>
        </div>
        <p className="text-sm leading-7 text-slate-600">{course.description}</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
            Apply
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-gold-400 hover:text-gold-600">
            <BadgeCheck className="h-4 w-4" />
            Learn More
          </Link>
        </div>
      </div>
    </motion.article>
  );
}