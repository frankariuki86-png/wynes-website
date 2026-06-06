import { Link } from 'react-router-dom';
import { Facebook, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { navigationItems, siteInfo } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="section-shell grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="space-y-6">
          <Logo />
          <p className="max-w-md text-sm leading-7 text-slate-300">
            WynesTTI delivers practical, industry-relevant training that prepares students for work, enterprise and lifelong growth.
          </p>
          <div className="flex items-center gap-3 text-slate-300">
            <a href={siteInfo.facebook} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:border-gold-400 hover:text-gold-300">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:border-gold-400 hover:text-gold-300">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M12.04 2C6.56 2 2.1 6.35 2.1 11.7c0 1.9.58 3.74 1.67 5.31L2 22l5.19-1.32a10 10 0 0 0 4.85 1.23h.01c5.48 0 9.94-4.35 9.94-9.7S17.52 2 12.04 2Zm5.86 13.62c-.25.69-1.45 1.32-2 1.39-.51.06-1.16.09-1.87-.15-.43-.14-.98-.33-1.69-.64-2.97-1.28-4.9-4.33-5.05-4.53-.16-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.26-.3.57-.38.76-.38h.55c.18 0 .43-.07.67.51.25.6.84 2.08.91 2.23.07.15.12.33.02.52-.1.2-.16.32-.31.5-.15.18-.33.4-.47.54-.16.17-.32.35-.14.66.18.3.82 1.35 1.76 2.19 1.2 1.07 2.2 1.41 2.51 1.57.31.16.5.13.68-.08.19-.22.79-.92 1-.52.2.4.2 1.18.04 1.88Z"/>
              </svg>
            </a>
            <a href={`mailto:${siteInfo.email}`} className="rounded-full border border-white/10 p-3 transition hover:border-gold-400 hover:text-gold-300">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="transition hover:text-gold-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Programs</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>ICT Courses</li>
            <li>Beauty Courses</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact</h3>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 text-gold-300" /> {siteInfo.phone}</li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 text-gold-300" /> {siteInfo.email}</li>
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold-300" /> {siteInfo.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Wynes Technical Training Institute. All rights reserved. Developed by{' '}
        <a
          href="https://bluepeak-tech-g56o-git-main-francis-projects-f7c3f8a7.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-gold-300 transition hover:text-gold-200"
        >
          Blupeak Solutions
        </a>
      </div>
    </footer>
  );
}