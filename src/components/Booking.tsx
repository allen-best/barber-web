import React from 'react';

function BookingSection() {
  // Replace with the actual Booksy API integration or link
  const booksyLink = 'https://booksy.com/en-us/dl/show-business/974635';

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-20 text-center">
        <h2 className="font-display text-3xl font-bold text-primary mb-8">Book Your Appointment</h2>
        <p className="text-lg text-textSecondary mb-8">
          Ready for a fresh look? Booking is easy through my Booksy calendar.
        </p>
        <a
          href={booksyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white py-3 px-6 rounded-md text-lg hover:bg-accent"
        >
          Book Now on Booksy
        </a>
        <p className="mt-8 text-sm text-gray-500">
          For inquiries or special requests, please contact me directly.
        </p>
      </div>
    </section>
  );
}

export default BookingSection;