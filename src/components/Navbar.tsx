import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-neutral py-4 fixed top-0 w-full z-20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-display text-primary font-bold">
          Mazi Cutz
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#services" className="hover:text-accent">Services</a>
          <a href="#faq" className="hover:text-accent">FAQ</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
          <a href="#booking" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-accent">Book Now</a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-primary focus:outline-none"
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
      <div className={`md:hidden absolute top-full left-0 w-full bg-neutral shadow-md transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="py-2 px-4 flex flex-col space-y-2">
          <a href="#about" className="hover:text-accent py-2 block" onClick={toggleMobileMenu}>About</a>
          <a href="#services" className="hover:text-accent py-2 block" onClick={toggleMobileMenu}>Services</a>
          <a href="#faq" className="hover:text-accent py-2 block" onClick={toggleMobileMenu}>FAQ</a>
          <a href="#contact" className="hover:text-accent py-2 block" onClick={toggleMobileMenu}>Contact</a>
          <a href="#booking" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-accent inline-block" onClick={toggleMobileMenu}>Book Now</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;