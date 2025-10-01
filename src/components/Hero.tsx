import React, { useRef, useEffect, useState } from 'react';

// Environment configuration for different deployment environments
type Environment = 'development' | 'production' | 'staging';

// Helper function to get video URL based on environment
const getVideoUrl = (filename: string): string => {
  // Get current environment from environment variables or default to development
  // Vite uses import.meta.env
  const environment = (import.meta.env.VITE_ENVIRONMENT || 'development') as Environment;  
  
  // OCI Object Storage configuration
  const ociConfig = {
    development: {
      baseUrl: '/assets/videos', // Local development uses local assets
    },
    staging: {
      baseUrl: 'https://objectstorage.us-ashburn-1.oraclecloud.com/n/idtsgqgjcd1g/b/bucket-20250410-2224/o',
    },
    production: {
      baseUrl: 'https://objectstorage.us-ashburn-1.oraclecloud.com/n/idtsgqgjcd1g/b/bucket-20250410-2224/o',
    }
  };
  
  // Return appropriate URL based on environment
  return `${ociConfig[environment].baseUrl}/${filename}`;
};

function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Get video URLs for different formats
  const mp4Url = getVideoUrl('barber-background.mp4');
  
  useEffect(() => {
    if (videoRef.current) {
      // Set up event listener for when video data is loaded
      const handleVideoLoaded = () => {
        setVideoLoaded(true);
      };
      
      videoRef.current.addEventListener('loadeddata', handleVideoLoaded);
      
      // Clean up event listener when component unmounts
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', handleVideoLoaded);
        }
      };
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#f4f4f4' }}>
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-70' : 'opacity-0'}`}
        >
          {/* Use video from OCI Object Storage or local assets depending on environment */}
          <source src={mp4Url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay - Darker for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
        {/* Color filter in brand colors */}
        <div className="absolute inset-0" style={{ backgroundColor: '#D2B48C', mixBlendMode: 'color', opacity: 0.3 }}></div>
      </div>

      {/* Loading placeholder */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse w-16 h-16 rounded-full" style={{ backgroundColor: '#A0522D' }}></div>
        </div>
      )}

      {/* Content - Improved spacing for mobile */}
      <div className="container mx-auto px-4 text-center relative z-10 py-8 md:py-16">
        <h1 
          className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight tracking-tight"
          style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
          <span className="block transform hover:scale-105 transition-transform duration-300 mb-1 md:mb-2">Elevate Your Style.</span>
          <strong className="block transform hover:scale-105 transition-transform duration-300">Discover Your Look.</strong>
        </h1>
        
        <p 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-10 max-w-3xl mx-auto font-medium"
          style={{ color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
        >
          Expert Barbering in the Heart of Detroit.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-2">
          <a
            href="#booking"
            className="w-full sm:w-auto py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center"
            style={{ 
              backgroundColor: '#A0522D', 
              color: 'white'
            }}
          >
            Book Your Transformation
          </a>
          
          <a
            href="#gallery"
            className="w-full sm:w-auto py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300 border-2 flex items-center justify-center mt-3 sm:mt-0"
            style={{ 
              borderColor: '#A0522D',
              color: '#A0522D',
              backgroundColor: 'rgba(244, 244, 244, 0.8)'
            }}
          >
            View Our Work
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
