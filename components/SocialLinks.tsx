// src/components/SocialLinks.tsx
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaSoundcloud } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <footer className="py-8 bg-black text-white text-center">
      <div className="flex justify-center space-x-6">
        <a href="https://facebook.com/LarrisimStudio" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={24} />
        </a>
        <a href="https://instagram.com/LarrisimStudio" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.youtube.com/@larrisim" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} />
        </a>
        <a href="https://twitter.com/LarrisimStudio" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
        <a href="https://soundcloud.com/LarrisimStudio" target="_blank" rel="noopener noreferrer">
          <FaSoundcloud size={24} />
        </a>
      </div>
      <p className="mt-4 text-sm">
        © 2025 Larry Chang. All rights reserved.
      </p>
    </footer>
  );
}
