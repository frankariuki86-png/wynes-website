import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const arrowButtonClass =
  'absolute top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold-300/80 bg-slate-950/90 text-gold-300 shadow-lg shadow-slate-950/30 backdrop-blur transition duration-200 hover:scale-105 hover:border-gold-300 hover:bg-gold-400 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:hover:bg-slate-950 disabled:hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 sm:h-12 sm:w-12';

export default function GalleryCarousel({ images, onSelect }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return undefined;

    const updateScrollButtons = () => {
      const maxScroll = element.scrollWidth - element.clientWidth;
      setCanScrollLeft(element.scrollLeft > 8);
      setCanScrollRight(element.scrollLeft < maxScroll - 8);
    };

    updateScrollButtons();
    element.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      element.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [images.length]);

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
    <div className="relative mt-14">
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
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Scroll gallery left"
        aria-controls="gallery-images"
        disabled={!canScrollLeft}
        className={`${arrowButtonClass} left-2`}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Scroll gallery right"
        aria-controls="gallery-images"
        disabled={!canScrollRight}
        className={`${arrowButtonClass} right-2`}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
