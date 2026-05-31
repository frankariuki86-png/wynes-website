export default function SectionHeading({ kicker, title, description, center = false, light = false }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {kicker ? <p className={`section-kicker ${light ? 'text-gold-300' : ''}`}>{kicker}</p> : null}
      <h2 className={`section-title mt-3 ${light ? '!text-white' : ''}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-8 ${light ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p> : null}
    </div>
  );
}