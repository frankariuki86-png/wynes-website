import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { navigationItems, siteInfo } from '../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 shadow-2xl shadow-slate-950/30 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="section-shell flex items-center justify-between py-4">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => `${isActive ? 'text-gold-300' : 'nav-link'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noreferrer" className="btn-secondary">
            <Sparkles className="h-4 w-4" />
            Apply Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`lg:hidden ${open ? 'max-h-[32rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0'} overflow-hidden bg-slate-950/98 backdrop-blur-xl transition-all duration-300`}>
        <div className="section-shell flex flex-col gap-4 pb-6">
          {navigationItems.map((item) => (
            <Link key={item.label} to={item.to} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white">
              {item.label}
            </Link>
          ))}
          <a href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noreferrer" className="btn-primary w-full">
            <Sparkles className="h-4 w-4" />
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
}