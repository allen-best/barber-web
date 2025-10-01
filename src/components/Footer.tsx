import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="bg-primary py-8 text-center text-textWhite">
      <div className="container mx-auto px-4">
        <h3 className="font-display text-2xl font-semibold mb-4">Contact Mazi</h3>
        <p className="mb-2">Located in Ferndale</p>
        <p className="mb-2">Phone: 947-517-5901</p>
        {/* <p className="mb-4">Email: [Your Email Address]</p>*/}
        <div className="flex justify-center space-x-4">
          {/* Add social media icons and links */}
          {/* Instagram Icon */}
          {/*<a href="https://www.instagram.com/mazitb_" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a> */}
          {/* <a href="#" className="hover:text-accent"><svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5c0-2.76 1.69-4.25 4.1-4.25 1.47 0 2.74.1 3.14.15V8h-2.1c-.61 0-1.45.3-1.45 1.3v2.55h3v3H14v6.8c4.56-1 8-5 8-9.8z"/></svg></a> */}
          {/* Add more social icons */}
        </div>
        <p className="mt-6 text-sm">&copy; {new Date().getFullYear()} Mazi The Barber. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;