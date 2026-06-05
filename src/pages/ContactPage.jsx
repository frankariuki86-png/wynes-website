import { useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { siteInfo } from '../data/siteData';

const defaultForm = {
  fullName: '',
  email: '',
  phone: '',
  course: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(defaultForm);
  };

  return (
    <>
      <Seo title="Contact WynesTTI" description="Contact Wynes Technical Training Institute by phone, email, WhatsApp or the enquiry form." />
      <PageHero
        kicker="Contact"
        title="Speak to WynesTTI today"
        subtitle="Use the form, phone, email or WhatsApp to get admissions support and course guidance."
        image={`${import.meta.env.BASE_URL}wynes%20photos/gallerly6.jpeg`}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-premium">
              <p className="section-kicker text-gold-300">Contact Details</p>
              <div className="mt-6 space-y-5 text-sm text-slate-200">
                <div className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-gold-300" />{siteInfo.phone}</div>
                <div className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-gold-300" />{siteInfo.email}</div>
                <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-gold-300" />{siteInfo.address}</div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noreferrer" className="btn-primary">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a href={`mailto:${siteInfo.email}`} className="btn-secondary">Email Us</a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-premium">
              <iframe
                title="WynesTTI location"
                src="https://www.google.com/maps?q=Nakuru%20Kenya&output=embed"
                className="h-[24rem] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-50 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-950">Send an enquiry</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Complete the form and admissions will get back to you with course guidance and next steps.</p>
            <form className="mt-8 grid gap-4" onSubmit={onSubmit}>
              <input name="fullName" required value={form.fullName} onChange={onChange} placeholder="Full Name" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 focus:border-gold-400" />
              <div className="grid gap-4 md:grid-cols-2">
                <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="Email" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-gold-400" />
                <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-gold-400" />
              </div>
              <input name="course" value={form.course} onChange={onChange} placeholder="Course Interested In" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-gold-400" />
              <textarea name="message" rows="6" required value={form.message} onChange={onChange} placeholder="Message" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-gold-400" />
              <button type="submit" className="btn-primary w-full">
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
            {submitted ? <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">Thank you. Your enquiry has been prepared for follow-up.</p> : null}
          </div>
        </div>
      </section>
    </>
  );
}