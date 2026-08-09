import React from 'react';
import {encodedBarberImage} from './constants/logo';
import Reveal from './Reveal';


function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-black relative overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.04] rounded-full blur-[100px] pointer-events-none"></div>
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        <Reveal className="relative group">
          <div className="absolute -inset-3 border border-white/25 rounded-lg pointer-events-none hidden md:block transition-all duration-500 group-hover:-inset-4 group-hover:border-white/50" aria-hidden="true"></div>
          <img
            src={encodedBarberImage}
            alt="Mazi The Barber cutting hair with precision and skill"
            className="rounded-lg shadow-2xl shadow-black/80 relative"
            loading="lazy"
            width="500"
            height="400"
          />
        </Reveal>
        <Reveal delay={150}>
          <span className="text-white text-xs font-bold tracking-[0.35em] uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-white/60"></span>
            Our Story
          </span>
          <h2 id="about-heading" className="font-display text-4xl md:text-5xl text-white tracking-wide mb-6">About Mazi</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Come get your haircut by Mazi The Barber! Located in the heart of <strong className="text-white">Ferndale</strong>, I'm Mazi, a passionate barber with years of experience. I believe that a great haircut is more than just a trim – it's an experience that leaves you feeling confident and refreshed.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            I specialize in <strong className="text-white">classic cuts</strong>, <strong className="text-white">fades</strong>, <strong className="text-white">beard grooming</strong>, and modern styling. My commitment is to provide personalized service, attention to detail, and the perfect style that suits your individual needs.
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed">
            I'm dedicated to staying up-to-date with the latest trends and techniques to ensure you always receive the best possible service in Ferndale.
          </p>

          <div className="grid grid-cols-3 gap-6 border-t border-white/15 pt-6">
            <div>
              <div className="text-3xl md:text-4xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">5+</div>
              <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wide mt-1">Years Cutting</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">1000+</div>
              <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wide mt-1">Cuts Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">100%</div>
              <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wide mt-1">Client Focused</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutSection;