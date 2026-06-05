import { Link } from 'react-router-dom';

export default function Logo({ dark = false, compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src={`${import.meta.env.BASE_URL}wynes%20photos/gallery.jpeg`}
        alt="WynesTTI logo"
        className="h-11 w-11 rounded-2xl object-cover shadow-lg"
      />
      <div className="leading-tight">
        <p className={`font-extrabold tracking-tight ${dark ? 'text-slate-950' : 'text-white'} ${compact ? 'text-sm' : 'text-base'}`}>
          WynesTTI
        </p>
        <p className={`text-xs font-medium ${dark ? 'text-slate-500' : 'text-slate-300'}`}>
          Technical Training Institute
        </p>
      </div>
    </Link>
  );
}