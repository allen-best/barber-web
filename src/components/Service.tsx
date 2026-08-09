import React from 'react';
import Reveal from './Reveal';

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
    <section id="services" className="py-16 md:py-24 bg-neutral-950" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 text-center">
        <Reveal>
          <span className="text-white text-xs font-bold tracking-[0.35em] uppercase mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-white/60"></span>
            What I Offer
            <span className="w-8 h-px bg-white/60"></span>
          </span>
          <h2 id="services-heading" className="font-display text-4xl md:text-5xl text-white tracking-wide mb-4 mt-3">My Professional Barber Services</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-12"></div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 80}>
              <article
                className="group bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-lg shadow-lg p-6 text-left hover:border-white/40 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300"
              >
                <div className="w-10 h-0.5 bg-white/40 mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-white"></div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;