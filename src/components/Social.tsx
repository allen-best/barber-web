import React from 'react';

// Import all images from assets/images folder
const galleryImages = [
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-1.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-2.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-3.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-4.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-5.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-6.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-7.jpeg',
  'https://dkduedwvufcf6nhq.public.blob.vercel-storage.com/mazi-image-8.jpeg'
];

const ImageGallery = () => {

  return (
    <div id="gallery" className="w-full py-8">
      <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#A0522D' }}>
        Gallery
      </h2>
      
      {/* Responsive grid layout */}
      <div className="px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((imageSrc, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ 
                backgroundColor: '#f4f4f4',
                aspectRatio: '1 / 1'
              }}
            >
              <img
                src={imageSrc}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  console.error(`Error loading image: ${imageSrc}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Overlay effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: '#A0522D' }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;