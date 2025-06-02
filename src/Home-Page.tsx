import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import AboutSection from './components/About';
import ServicesSection from './components/Service';
import BookingSection from './components/Booking';
import FAQSection from './components/FAQ';
import Footer from './components/Footer';
import InstagramGallery from './components/Social';

export default function AppComponents() {
  return(
  <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BookingSection />
      <InstagramGallery />
      <FAQSection />
      <Footer />
    </div>
  );
}