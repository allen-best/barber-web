import { encodedBarberImage } from '../components/constants/logo';

// Function to set up social media meta tags with the encoded image
export const setupSocialMediaMeta = () => {
  // Update Open Graph image
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    ogImage.setAttribute('content', encodedBarberImage);
  }

  // Update Twitter image
  const twitterImage = document.querySelector('meta[property="twitter:image"]');
  if (twitterImage) {
    twitterImage.setAttribute('content', encodedBarberImage);
  }

  // Also update the JSON-LD structured data if it exists
  const jsonLdScript = document.querySelector('script[type="application/ld+json"]');
  if (jsonLdScript && jsonLdScript.textContent) {
    try {
      const structuredData = JSON.parse(jsonLdScript.textContent);
      if (structuredData['@type'] === 'HairSalon') {
        structuredData.image = [encodedBarberImage];
        structuredData.logo = encodedBarberImage;
        jsonLdScript.textContent = JSON.stringify(structuredData, null, 2);
      }
    } catch (e) {
      console.warn('Could not update structured data with image:', e);
    }
  }

  // Set document title dynamically if needed
  if (!document.title.includes('Mazi The Barber')) {
    document.title = 'Mazi The Barber | Professional Haircuts & Beard Grooming in Ferndale';
  }
};

export { encodedBarberImage };