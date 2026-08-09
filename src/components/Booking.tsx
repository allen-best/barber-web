import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';

function BookingSection() {
  const booksyLink = 'https://booksy.com/en-us/dl/show-business/974635';
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Clear any existing Booksy elements
    const existingElements = document.querySelectorAll('[id*="booksy"], script[src*="booksy"]');
    existingElements.forEach(el => {
      if (el.id !== 'booksy-widget-target') {
        el.remove();
      }
    });

    // Create the widget container that Booksy expects
    const targetElement = document.getElementById('booksy-widget-target');
    if (targetElement) {
      // Clear the loading state and create proper widget container
      targetElement.innerHTML = `
        <div id="booksy-widget-container-974635"></div>
      `;
      
      // Create script element and append it right after the container
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://booksy.com/widget-2021/code.js?id=974635&country=us&lang=en-US';
      script.id = 'booksy-script-974635';
      
      // Append script right after the container so Booksy can find it
      targetElement.appendChild(script);
      
      // Set a timeout to show fallback if widget doesn't load
      setTimeout(() => {
        setShowFallback(true);
      }, 8000);
    }

    return () => {
      // Cleanup
      const targetElement = document.getElementById('booksy-widget-target');
      if (targetElement) {
        targetElement.innerHTML = '';
      }
      const scriptToRemove = document.getElementById('booksy-script-974635');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const handleDirectBooking = () => {
    window.open(booksyLink, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-20 text-center">
        <Reveal>
          <span className="text-white text-xs font-bold tracking-[0.35em] uppercase mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-white/60"></span>
            Reserve Your Spot
            <span className="w-8 h-px bg-white/60"></span>
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-4 mt-3">Book Your Appointment</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>

          <p className="text-lg text-gray-300 mb-8">
            Ready for a fresh look? Booking is easy through my Booksy calendar.
          </p>
        </Reveal>

        <div 
          id="booksy-widget-target" 
          className="mb-8 min-h-[100px] w-full max-w-4xl mx-auto rounded-lg overflow-hidden"
        >
          {/* Booksy widget will load here, or show loading/fallback state */}
          {!showFallback ? (
            <div className="flex items-center justify-center h-96 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
                <p className="text-white/60 text-sm">Loading Booksy booking widget...</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-96 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <div className="text-center">
                <p className="text-white mb-4">Having trouble loading the booking widget?</p>
                <button
                  onClick={handleDirectBooking}
                  className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
                >
                  Book Directly on Booksy
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8">
          <button
            onClick={handleDirectBooking}
            className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-white/20 hover:shadow-white/40"
          >
            Book Directly on Booksy
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Reveal delay={0} className="bg-white/[0.04] backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300">
            <div className="text-2xl font-black text-white mb-2">Online</div>
            <div className="text-gray-300">Easy booking through Booksy</div>
          </Reveal>
          <Reveal delay={80} className="bg-white/[0.04] backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300">
            <div className="text-2xl font-black text-white mb-2">Flexible</div>
            <div className="text-gray-300">Multiple time slots available</div>
          </Reveal>
          <Reveal delay={160} className="bg-white/[0.04] backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300">
            <div className="text-2xl font-black text-white mb-2">Confirmed</div>
            <div className="text-gray-300">Instant booking confirmation</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;