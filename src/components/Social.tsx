import React, { useEffect, useState } from 'react';

// Example list of public Instagram post URLs
const postUrls = [
  'https://www.instagram.com/p/C9X5f3VON5Z/',
  'https://www.instagram.com/p/C44E7LwO_ZG/',
  'https://www.instagram.com/p/C2ODYD1uKHU/'
];

const InstagramGallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load Instagram Embed Script
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://www.instagram.com/embed.js';

    // Remove and re-add script to force reload if it exists
    const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (existingScript) existingScript.remove();

    document.body.appendChild(script);

    // Trigger the embed reload when posts change
    interface InstagramWindow extends Window {
      instgrm?: {
        Embeds: {
          process: () => void;
        };
      };
    }    

    script.onload = () => {
      const win = window as InstagramWindow;
      if (win.instgrm?.Embeds) {
        win.instgrm.Embeds.process();
        setLoading(false);
      }
    };

    script.onerror = (error) => {
      console.error('Error loading Instagram embed script:', error);
      setLoading(false);
    };

    return () => {
      // Cleanup function
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div id="gallery" className="w-full py-8">
      <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#A0522D' }}>
        Instagram Feed
      </h2>
      
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-pulse rounded-lg h-12 w-12" style={{ backgroundColor: '#D2B48C' }}></div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {postUrls.map((url, idx) => (
          <div key={idx} className="instagram-post rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f4f4f4', borderTop: '4px solid #A0522D' }}>
            <div className="p-2">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ 
                  background: '#fff', 
                  border: 0, 
                  borderRadius: '8px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.1), 0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: 0, 
                  padding: 0,
                  width: '100%',
                  maxWidth: '100%' 
                }}
              ></blockquote>
            </div>
          </div>
        ))}
      </div>
      
      {!loading && postUrls.length === 0 && (
        <div className="text-center py-8 px-4" style={{ color: '#A0522D' }}>
          <p className="text-lg">No Instagram posts to display.</p>
        </div>
      )}
    </div>
  );
};

export default InstagramGallery;