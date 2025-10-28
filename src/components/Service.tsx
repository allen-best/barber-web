import React from 'react';

interface Service {
  name: string;
  description: string;
}

const services: Service[] = [
  { name: 'Classic Haircut', description: 'Precision haircut tailored to your style.' },
  { name: 'Fade Haircut', description: 'Expert fading techniques for a sharp look.' },
  { name: 'Beard Trim & Shape', description: 'Professional beard grooming and shaping.' },
  { name: 'Hot Towel Shave', description: 'Luxurious and traditional hot towel shave.' },
  { name: 'Buzz Cut', description: 'Clean and sharp buzz cut.' },
  // Add more services
];

function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-white mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-xl font-semibold text-black mb-2">{service.name}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;