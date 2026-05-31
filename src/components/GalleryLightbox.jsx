import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function GalleryLightbox({ item, onClose }) {
  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 20 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/70 text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <img src={item.src} alt={item.alt} className="h-[70vh] w-full object-cover" />
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">Student Life</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">{item.alt}</h3>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}