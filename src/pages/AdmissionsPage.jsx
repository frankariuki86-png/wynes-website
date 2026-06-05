import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, FileText, PhoneCall } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import { admissionSteps, faqs, siteInfo } from '../data/siteData';

export default function AdmissionsPage() {
  return (
    <>
      <Seo title="Admissions at WynesTTI" description="Find out how to apply to Wynes Technical Training Institute, what documents are needed and how to contact admissions." />
      <PageHero
        kicker="Admissions"
        title="Start your application with a simple process"
        subtitle="Use the steps below to begin your journey at WynesTTI and prepare the documents required for registration."
        image="/wynes%20photos/gallerly5.jpeg"
        actions={[
          <a key="call" href={`tel:${siteInfo.phoneDigits}`} className="btn-primary">Call Admissions</a>,
          <a key="whatsapp" href={`https://wa.me/${siteInfo.whatsapp}`} className="btn-secondary" target="_blank" rel="noreferrer">WhatsApp</a>,
        ]}
      />

      <section className="bg-white py-20 lg:py-28" id="apply">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              kicker="How to Apply"
              title="A clear admission journey"
              description="WynesTTI’s application process is designed to be simple, supportive and easy to follow for students and parents."
            />
            <div className="mt-8 space-y-4">
              {admissionSteps.map((step, index) => (
                <motion.div key={step} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex gap-4 rounded-3xl border border-slate-200 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-700">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-[2rem] bg-slate-950 p-8 text-white shadow-premium">
            <div>
              <p className="section-kicker text-gold-300">Requirements</p>
              <h3 className="mt-3 text-2xl font-bold">Prepare these documents</h3>
            </div>
            <div className="space-y-4">
              {['ID or Passport', 'Academic certificates or transcripts', 'Passport photo', 'Program choice'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-4">
                  <FileText className="h-5 w-5 text-gold-300" />
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
            <a href={`mailto:${siteInfo.email}`} className="btn-primary w-full">
              <ArrowRight className="h-4 w-4" />
              Request Admission Help
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="section-shell">
          <SectionHeading
            kicker="FAQ"
            title="Common questions from applicants"
            description="These answers help new applicants understand the process and know where to get support."
            center
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {faqs.map((item) => (
              <div key={item.question} className="card-soft p-7">
                <div className="inline-flex rounded-2xl bg-navy-900 p-3 text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white lg:py-24">
        <div className="section-shell flex flex-col gap-6 rounded-[2.2rem] border border-white/10 bg-white/5 px-8 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="section-kicker text-gold-300">Need help now?</p>
            <h3 className="mt-3 text-2xl font-bold">Speak directly to admissions</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">Call, email or WhatsApp the institute for course advice, intake information and registration support.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${siteInfo.phoneDigits}`} className="btn-primary"><PhoneCall className="h-4 w-4" />Call Now</a>
            <a href="/contact" className="btn-secondary">Go to Contact</a>
          </div>
        </div>
      </section>
    </>
  );
}