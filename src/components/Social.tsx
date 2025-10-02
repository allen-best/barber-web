import React, { useState } from 'react';

// Import all images from assets/images folder
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

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Function to get dynamic sizing for masonry effect
  const getImageClasses = (index: number) => {
    const baseClasses = "group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] cursor-pointer";
    
    // Create a dynamic pattern for varied sizes
    switch (index % 7) {
      case 0: return `${baseClasses} md:col-span-2 md:row-span-2`; // Large featured
      case 1: return `${baseClasses} md:col-span-1 md:row-span-1`; // Regular
      case 2: return `${baseClasses} md:col-span-1 md:row-span-2`; // Tall
      case 3: return `${baseClasses} md:col-span-2 md:row-span-1`; // Wide
      case 4: return `${baseClasses} md:col-span-1 md:row-span-1`; // Regular
      case 5: return `${baseClasses} md:col-span-1 md:row-span-1`; // Regular
      case 6: return `${baseClasses} md:col-span-1 md:row-span-2`; // Tall
      default: return `${baseClasses} md:col-span-1 md:row-span-1`; // Regular
    }
  };

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div id="gallery" className="w-full py-8 bg-gradient-to-b from-gray-200 to-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
            My Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our finest cuts and styles. Each one tells a story of precision, artistry, and confidence.
          </p>
          <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
        </div>
        
        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
          {galleryImages.map((imageSrc, idx) => (
            <div 
              key={idx} 
              className={getImageClasses(idx)}
              onClick={() => openLightbox(imageSrc)}
            >
              <img
                src={imageSrc}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  console.error(`Error loading image: ${imageSrc}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Hover effect with icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              
              {/* Image number badge */}
              <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-sm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-black mb-2">{galleryImages.length}+</div>
            <div className="text-gray-600">Showcase Pieces</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-black mb-2">100%</div>
            <div className="text-gray-600">Satisfied Clients</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-black mb-2">Expert</div>
            <div className="text-gray-600">Craftsmanship</div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image full size"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
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

export default ImageGallery;