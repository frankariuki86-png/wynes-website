import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, Target } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import { aboutPoints, siteInfo } from '../data/siteData';

export default function AboutPage() {
  return (
    <>
      <Seo title="About WynesTTI" description="Learn about Wynes Technical Training Institute, its mission, vision and practical training approach." />
      <PageHero
        kicker="About Us"
        title="A college built on practical education and student growth"
        subtitle="WynesTTI serves students who want professional skills, strong mentorship and training that translates into opportunity."
        image={`${import.meta.env.BASE_URL}wynes%20photos/gallerly1.jpeg`}
        actions={[
          <a key="apply" href="/admissions" className="btn-primary">Apply Now</a>,
          <a key="contact" href="/contact" className="btn-secondary">Contact Us</a>,
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.img
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={`${import.meta.env.BASE_URL}wynes%20photos/gallerly2.jpeg`}
            alt="WynesTTI campus"
            className="h-[34rem] w-full rounded-[2rem] object-cover shadow-premium"
          />
          <div>
            <SectionHeading
              kicker="Who We Are"
              title="Supporting practical learning with purpose"
              description={`${siteInfo.name} is dedicated to high-quality hands-on training for future skilled professionals. The institute focuses on relevant programs that build confidence, work ethic and career direction.`}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Target, title: 'Mission', text: 'Provide comprehensive hands-on training that nurtures creativity, technical skills and professional growth.' },
                { icon: GraduationCap, title: 'Vision', text: 'Offer industry-aligned technical education that equips students with practical skills and a success mindset.' },
                { icon: CheckCircle2, title: 'Commitment', text: 'Prepare learners for employment, entrepreneurship and meaningful contribution to community.' },
                { icon: CheckCircle2, title: 'Culture', text: 'Create an environment where students can grow, practise and thrive with support.' },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="inline-flex rounded-2xl bg-navy-900 p-3 text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {aboutPoints.map((point) => (
                <div key={point} className="rounded-full bg-slate-50 px-4 py-2 text-sm text-slate-700">{point}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}