import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black py-4 fixed top-0 w-full z-20 border-b border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-display text-white font-bold">
          Mazi The Barber
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-white hover:text-gray-300 transition-colors">About</a>
          <a href="#services" className="text-white hover:text-gray-300 transition-colors">Services</a>
          <a href="#faq" className="text-white hover:text-gray-300 transition-colors">FAQ</a>
          <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
          <a href="#booking" className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-100 transition-colors font-medium">Book Now</a>
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
      <div className={`md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 shadow-md transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="py-2 px-4 flex flex-col space-y-2">
          <a href="#about" className="text-white hover:text-gray-300 py-2 block transition-colors" onClick={toggleMobileMenu}>About</a>
          <a href="#services" className="text-white hover:text-gray-300 py-2 block transition-colors" onClick={toggleMobileMenu}>Services</a>
          <a href="#faq" className="text-white hover:text-gray-300 py-2 block transition-colors" onClick={toggleMobileMenu}>FAQ</a>
          <a href="#contact" className="text-white hover:text-gray-300 py-2 block transition-colors" onClick={toggleMobileMenu}>Contact</a>
          <a href="#booking" className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-100 inline-block transition-colors font-medium" onClick={toggleMobileMenu}>Book Now</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;