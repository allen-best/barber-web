import React, { useRef, useEffect, useState } from 'react';

// Collection of hero videos
const heroVideos = [
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
  // Add more video URLs here as needed
];

// Helper function to get a random video from the collection
const getRandomVideoUrl = (): string => {
  const randomIndex = Math.floor(Math.random() * heroVideos.length);
  return heroVideos[randomIndex];
};

function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Select a random video when component mounts
    const selectedVideo = getRandomVideoUrl();
    setCurrentVideoUrl(selectedVideo);
  }, []);
  
  useEffect(() => {
    if (videoRef.current && currentVideoUrl) {
      // Set up event listener for when video data is loaded
      const videoElement = videoRef.current; // Copy ref to avoid stale closure
      
      const handleVideoLoaded = () => {
        setVideoLoaded(true);
      };
      
      const handleVideoError = () => {
        console.error('Error loading video:', currentVideoUrl);
        // Try to load a different video if the current one fails
        const fallbackVideo = getRandomVideoUrl();
        if (fallbackVideo !== currentVideoUrl) {
          setCurrentVideoUrl(fallbackVideo);
          setVideoLoaded(false);
        }
      };
      
      videoElement.addEventListener('loadeddata', handleVideoLoaded);
      videoElement.addEventListener('error', handleVideoError);
      
      // Clean up event listeners when component unmounts
      return () => {
        videoElement.removeEventListener('loadeddata', handleVideoLoaded);
        videoElement.removeEventListener('error', handleVideoError);
      };
    }
  }, [currentVideoUrl]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-40' : 'opacity-0'}`}
        >
          {/* Use selected video from collection */}
          {currentVideoUrl && <source src={currentVideoUrl} type="video/mp4" />}
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay - Pure black for modern look */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Loading placeholder */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse w-16 h-16 rounded-full bg-white"></div>
        </div>
      )}

      {/* Content - Improved spacing for mobile */}
      <div className="container mx-auto px-4 text-center relative z-10 py-8 md:py-16">
        <h1 
          className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight tracking-tight"
          style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
          <span className="block transform hover:scale-105 transition-transform duration-300 mb-1 md:mb-2">Chicago’s Confidence.</span>
          <strong className="block transform hover:scale-105 transition-transform duration-300">Detroit’s Skill.</strong>
        </h1>
        
        <p 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-10 max-w-3xl mx-auto font-medium"
          style={{ color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
        >
          Expert barbering experience like no other
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-2">
          <a
            href="#booking"
            className="w-full sm:w-auto py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center"
            style={{ 
              backgroundColor: 'rgba(244, 244, 244, 0.8)', 
              color: '#000000'
            }}
          >
            Book Your Transformation
          </a>
          
          <a
            href="#gallery"
            className="w-full sm:w-auto py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300 border-2 flex items-center justify-center mt-3 sm:mt-0"
            style={{ 
              borderColor: '#000000',
              color: '#000000',
              backgroundColor: 'rgba(244, 244, 244, 0.8)'
            }}
          >
            See my work 
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-black to-transparent opacity-30"></div>
      
      {/* Scroll indicator - smaller on mobile */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ color: 'white' }}
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
