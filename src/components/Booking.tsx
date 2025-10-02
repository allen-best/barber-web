import React, { useEffect } from 'react';

function BookingSection() {
  const booksyLink = 'https://booksy.com/en-us/dl/show-business/974635';

  useEffect(() => {
    // Create a container div specifically for the Booksy widget
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'booksy-widget-container';
    
    // Create the script element with proper attributes
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://booksy.com/widget-2021/code.js?id=974635&country=us&lang=en-US';
    script.async = false; // Load synchronously to avoid script location issues
    
    // Remove any existing Booksy scripts and containers
    const existingScript = document.querySelector('script[src*="booksy.com/widget-2021/code.js"]');
    const existingContainer = document.getElementById('booksy-widget-container');
    if (existingScript) existingScript.remove();
    if (existingContainer) existingContainer.remove();
    
    // Find the target container in our component
    const targetDiv = document.getElementById('booksy-target');
    if (targetDiv) {
      // Clear the target div and append the widget container
      targetDiv.innerHTML = '';
      targetDiv.appendChild(widgetContainer);
      
      // Append the script right after the container
      widgetContainer.appendChild(script);
      
      script.onload = () => {
        console.log('Booksy widget script loaded successfully');
      };

      script.onerror = (error) => {
        console.error('Error loading Booksy widget script:', error);
        // Show fallback message
        if (targetDiv) {
          targetDiv.innerHTML = `
            <div class="text-center py-8">
              <p class="text-gray-500 mb-4">Unable to load booking widget.</p>
              <a href="${booksyLink}" target="_blank" rel="noopener noreferrer" 
                 class="inline-block bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800">
                Book on Booksy
              </a>
            </div>
          `;
        }
      };
    }

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[src*="booksy.com/widget-2021/code.js"]');
      const containerToRemove = document.getElementById('booksy-widget-container');
      if (scriptToRemove) scriptToRemove.remove();
      if (containerToRemove) containerToRemove.remove();
    };
  }, [booksyLink]);

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white via-white via-80% to-gray-200">
      <div className="container mx-auto px-4 md:px-20 text-center">
        <h2 className="font-display text-3xl font-bold text-primary mb-8">Book Your Appointment</h2>
        <p className="text-lg text-textSecondary mb-8">
          Ready for a fresh look? Booking is easy through my Booksy calendar.
        </p>
        
        {/* Booksy Widget Target Container */}
        <div className="mb-8 w-full max-w-4xl mx-auto">
          <div id="booksy-target" className="w-full h-full flex items-center justify-center">
            <div className="text-gray-500">
              Loading booking calendar...
            </div>
          </div>
        </div>
        
        {/* Fallback button 
        <div className="mt-6">
          <a
            href={booksyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white py-3 px-8 rounded-md text-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg"
          >
            Book Now on Booksy
          </a>
        </div>*/}
        
        <p className="mt-8 text-sm text-gray-500">
          For inquiries or special requests, please contact me directly at 947-517-5901.
        </p>
      </div>
    </section>
  );
}

export default BookingSection;