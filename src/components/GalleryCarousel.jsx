import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryCarousel({ images, onSelect }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const firstCard = scrollRef.current.firstElementChild;
    const gap = parseFloat(window.getComputedStyle(scrollRef.current).columnGap) || 0;
    const distance = firstCard
      ? firstCard.getBoundingClientRect().width + gap
      : scrollRef.current.clientWidth * 0.8;

    scrollRef.current.scrollBy({
      left: direction * distance,
      behavior: 'smooth',
    });
  };

  return (
    <div className="mt-14">
      <div
        ref={scrollRef}
        id="gallery-images"
        role="region"
        aria-label="Photo gallery"
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-5"
      >
        {images.map((item) => (
          <button
            key={item.src}
            type="button"
            onClick={() => onSelect(item)}
            className="group w-[82vw] max-w-[22rem] shrink-0 snap-start overflow-hidden rounded-3xl bg-white text-left shadow-lg shadow-slate-200/70 sm:w-[18rem] lg:w-[21rem]"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />
            <div className="p-4">
              <p className="text-sm font-semibold text-slate-950">{item.alt}</p>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-2 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Scroll gallery left"
          aria-controls="gallery-images"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950/85 text-white shadow-lg transition hover:bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Scroll gallery right"
          aria-controls="gallery-images"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950/85 text-white shadow-lg transition hover:bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
