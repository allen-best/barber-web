// This script extracts the base64 barber image and saves it as a static file
const fs = require('fs');
const path = require('path');

// Read the logo.tsx file and extract the base64 image
const logoFilePath = path.join(__dirname, '../src/components/constants/logo.tsx');
const logoFileContent = fs.readFileSync(logoFilePath, 'utf8');

// Extract the base64 image data using regex
const base64Match = logoFileContent.match(/data:image\/[^;]+;base64,([^']+)/);

if (!base64Match) {
  console.error('Could not find base64 image data in logo.tsx');
  process.exit(1);
}

const base64Data = base64Match[1];
const imageBuffer = Buffer.from(base64Data, 'base64');

// Ensure public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Save to public directory for social media sharing
fs.writeFileSync(path.join(publicDir, 'barber-social-image.jpg'), imageBuffer);
fs.writeFileSync(path.join(publicDir, 'og-image.jpg'), imageBuffer);

console.log('Social media images generated successfully!');
console.log('Files created:');
console.log('- public/barber-social-image.jpg');
console.log('- public/og-image.jpg');