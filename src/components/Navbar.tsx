import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-20 bg-gradient-to-b from-black/60 via-black/50 to-black/40 backdrop-blur-xl backdrop-saturate-150 py-4 border-b border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_30px_rgba(0,0,0,0.5)]">
      {/* Glossy sheen (clipped to the bar only, so it doesn't cut off the mobile dropdown below) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent"></div>
        <div className="absolute -top-16 left-1/4 w-1/2 h-24 bg-white/10 blur-3xl rounded-full"></div>
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <a href="/" className="text-3xl font-display text-white tracking-wide">
          Mazi The Barber
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="relative text-white/80 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide group">About<span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span></a>
          <a href="#services" className="relative text-white/80 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide group">Services<span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span></a>
          <a href="#faq" className="relative text-white/80 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide group">FAQ<span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span></a>
          <a href="#contact" className="relative text-white/80 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide group">Contact<span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span></a>
          <a href="#booking" className="bg-white text-black py-2 px-5 rounded-full hover:scale-105 hover:bg-gray-100 transition-all duration-300 font-bold text-sm shadow-lg shadow-black/30">
            Book Now
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {/* Hamburger Icon */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-black/70 to-black/55 backdrop-blur-xl backdrop-saturate-150 border-b border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        <div className="py-2 px-4 flex flex-col space-y-2">
          <a href="#about" className="text-white/80 hover:text-white py-2 block transition-colors" onClick={toggleMobileMenu}>About</a>
          <a href="#services" className="text-white/80 hover:text-white py-2 block transition-colors" onClick={toggleMobileMenu}>Services</a>
          <a href="#faq" className="text-white/80 hover:text-white py-2 block transition-colors" onClick={toggleMobileMenu}>FAQ</a>
          <a href="#contact" className="text-white/80 hover:text-white py-2 block transition-colors" onClick={toggleMobileMenu}>Contact</a>
          <a href="#booking" className="bg-white text-black py-2 px-4 rounded-full inline-block hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg shadow-black/30" onClick={toggleMobileMenu}>
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
