import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import CourseCard from '../components/CourseCard';
import Seo from '../components/Seo';
import { courses } from '../data/siteData';

const filters = ['All', 'ICT', 'Beauty'];

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleCourses = useMemo(() => {
    if (activeFilter === 'All') return courses;
    return courses.filter((course) => course.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <Seo title="Courses at WynesTTI" description="Explore the practical courses offered by Wynes Technical Training Institute across technical, ICT, beauty and hospitality fields." />
      <PageHero
        kicker="Courses"
        title="Practical programs built for job readiness"
        subtitle="Browse courses designed to give students the hands-on skills needed for employment, self-employment and industry competence."
        image="/wynes%20photos/gallerly4.jpeg"
        actions={[
          <a key="apply" href="/admissions" className="btn-primary">Apply Now</a>,
          <a key="contact" href="/contact" className="btn-secondary">Ask About a Course</a>,
        ]}
      />

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="section-shell">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${activeFilter === filter ? 'bg-slate-950 text-white' : 'bg-white text-slate-700 shadow-sm'}`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleCourses.map((course, index) => (
              <motion.div key={course.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }}>
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}