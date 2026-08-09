import React, { useState, useRef, useEffect } from 'react';
import Reveal from './Reveal';

// Defers fetching a gallery video's bytes until it's about to scroll into view,
// so the browser doesn't try to pull all 12 clips down at once on page load.
function LazyGalleryVideo({ src, className }: { src: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-64 bg-white/5">
      {shouldLoad && (
        <video src={src} className={className} muted preload="metadata" />
      )}
    </div>
  );
}

const galleryImages = [
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-1.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-2.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-3.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-4.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-5.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-6.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-7.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-8.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/IMG_1749_Original.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/IMG_2952_Original.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/IMG_9944_Original.png',
];

const galleryVideos = [
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/Hero-videos/IMG_0833.mov',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/Hero-videos/IMG_0896.mov',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/Hero-videos/IMG_0902.mov',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/Hero-videos/IMG_1503.mov',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/Hero-videos/IMG_1554.mov',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/Hero-videos/IMG_1661.mov',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/Hero-videos/IMG_2658.mov',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/Hero-videos/IMG_3274.mov',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/Hero-videos/IMG_4389.mov',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/Hero-videos/IMG_9349.mov',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/Hero-videos/IMG_4919.mov',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/Hero-videos/IMG_4872.mov',
];

// Combine images and videos with type information
const galleryItems = [
  ...galleryImages.map(src => ({ src, type: 'image' as const })),
  ...galleryVideos.map(src => ({ src, type: 'video' as const }))
];

const INITIAL_VISIBLE_COUNT_MOBILE = 3;
const INITIAL_VISIBLE_COUNT_DESKTOP = 8;

// Matches Tailwind's `sm` breakpoint (640px), where the grid moves off grid-cols-1
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 639px)').matches
  );

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 639px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return isMobile;
}

const Social = () => {
  const [selectedItem, setSelectedItem] = useState<{ src: string; type: 'image' | 'video' } | null>(null);
  const [showAll, setShowAll] = useState(false);
  const gridTopRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const openLightbox = (item: { src: string; type: 'image' | 'video' }) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const initialVisibleCount = isMobile ? INITIAL_VISIBLE_COUNT_MOBILE : INITIAL_VISIBLE_COUNT_DESKTOP;
  const visibleItems = showAll ? galleryItems : galleryItems.slice(0, initialVisibleCount);
  const hasMore = galleryItems.length > initialVisibleCount;

  const toggleShowAll = () => {
    if (showAll) {
      gridTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowAll(!showAll);
  };

  return (
    <div id="gallery" className="w-full py-16 bg-black relative overflow-hidden">
      <div className="absolute -right-32 top-0 w-96 h-96 bg-white/[0.04] rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4">
        <Reveal className="text-center mb-12">
          <span className="text-white text-xs font-bold tracking-[0.35em] uppercase mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-white/60"></span>
            Portfolio
            <span className="w-8 h-px bg-white/60"></span>
          </span>
          <h2 className="font-display text-5xl md:text-6xl tracking-wide mb-4 mt-3 text-white">
            My Work
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Take a look at my finest cuts and styles in photos and videos. Each piece tells a story of precision, artistry, and confidence.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-6"></div>
        </Reveal>

        <div ref={gridTopRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-black/70 transition-all duration-500 transform hover:scale-[1.02] cursor-pointer border border-white/10 hover:border-white/40"
              onClick={() => openLightbox(item)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div className="relative">
                  <LazyGalleryVideo
                    src={item.src}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  {/* Video play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/30 backdrop-blur-sm rounded-full p-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  {item.type === 'image' ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
              </div>
              
              {/* Type indicator badge */}
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.type === 'video' ? 'VIDEO' : 'PHOTO'}
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={toggleShowAll}
              className="inline-flex items-center gap-2 py-3 px-8 rounded-full text-base font-bold border-2 border-white/70 text-white hover:bg-white/10 transition-all duration-300"
            >
              {showAll ? 'View Less' : 'View More'}
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Reveal delay={0} className="bg-white/[0.04] backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl font-black text-white mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">{galleryItems.length}+</div>
            <div className="text-gray-300">Showcase Pieces</div>
          </Reveal>
          <Reveal delay={80} className="bg-white/[0.04] backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl font-black text-white mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">100%</div>
            <div className="text-gray-300">Satisfied Clients</div>
          </Reveal>
          <Reveal delay={160} className="bg-white/[0.04] backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl font-black text-white mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">Expert</div>
            <div className="text-gray-300">Craftsmanship</div>
          </Reveal>
        </div>
      </div>

      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.src}
                alt="Gallery image full size"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ) : (
              <video
                src={selectedItem.src}
                className="max-w-full max-h-full object-contain rounded-lg"
                controls
                autoPlay
                muted
                loop
              />
            )}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Social;