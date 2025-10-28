import React from 'react';
import {encodedBarberImage} from './constants/logo';


function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src={encodedBarberImage} alt="Barber in action" className="rounded-lg shadow-md" />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-white mb-4">About Mazi</h2>
          <p className="text-gray-300 mb-4">
            Come get your haircut by Mazi The Barber! Located in the heart of Ferndale, I'm Mazi, a passionate barber with [Number] years of experience. I believe that a great haircut is more than just a trim – it's an experience that leaves you feeling confident and refreshed.
          </p>
          <p className="text-gray-300 mb-4">
            I specialize in classic cuts, fades, beard grooming, etc. My commitment is to provide personalized service, attention to detail, and the perfect style that suits your individual needs.
          </p>
          <p className="text-gray-300">
            I'm dedicated to staying up-to-date with the latest trends and techniques to ensure you always receive the best possible service.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;