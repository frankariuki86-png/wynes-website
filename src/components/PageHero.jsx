import { motion } from 'framer-motion';

export default function PageHero({ kicker, title, subtitle, image, actions, overlay = true }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-28 text-white">
      <div className="absolute inset-0">
        <img src={image} alt="Hero background" className="h-full w-full object-cover opacity-40" />
        {overlay ? <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/40" /> : null}
      </div>
      <div className="section-shell relative z-10 py-20 sm:py-24">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="section-kicker text-gold-300">
          {kicker}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-4xl text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
        >
          {subtitle}
        </motion.p>
        {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
      </div>
    </section>
  );
}