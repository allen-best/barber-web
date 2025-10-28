import React from 'react';
import {encodedBarberImage} from './constants/logo';


function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black" aria-labelledby="about-heading">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src={encodedBarberImage} 
            alt="Mazi The Barber cutting hair with precision and skill" 
            className="rounded-lg shadow-md"
            loading="lazy"
            width="500"
            height="400"
          />
        </div>
        <div>
          <h2 id="about-heading" className="font-display text-3xl font-bold text-white mb-4">About Mazi</h2>
          <p className="text-gray-300 mb-4">
            Come get your haircut by Mazi The Barber! Located in the heart of <strong>Ferndale</strong>, I'm Mazi, a passionate barber with years of experience. I believe that a great haircut is more than just a trim – it's an experience that leaves you feeling confident and refreshed.
          </p>
          <p className="text-gray-300 mb-4">
            I specialize in <strong>classic cuts</strong>, <strong>fades</strong>, <strong>beard grooming</strong>, and modern styling. My commitment is to provide personalized service, attention to detail, and the perfect style that suits your individual needs.
          </p>
          <p className="text-gray-300">
            I'm dedicated to staying up-to-date with the latest trends and techniques to ensure you always receive the best possible service in Ferndale.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;