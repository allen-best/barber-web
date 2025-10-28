import {encodedBarberImage} from './components/constants/logo';
import { setupSocialMediaMeta } from './utils/socialMeta';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppComponents from './Home-Page';
import AuthCallback from './Auth-Callback';

function App() {
  useEffect(() => {
    const setFavicon = (encodedBarberImage: string) => {
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
      if (!link.type) {
        link.type = 'image/x-icon';
      }      
      link.rel = 'shortcut icon';
      link.href = encodedBarberImage;
      document.head.appendChild(link);
    };

    // Set favicon
    setFavicon(encodedBarberImage);
    
    // Set up social media meta tags with the encoded image
    setupSocialMediaMeta();
  }, []); // Run once on mount

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppComponents />} />
        <Route path="/auth" element={<AuthCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
