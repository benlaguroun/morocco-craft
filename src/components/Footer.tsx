import GlassContainer from "./GlassContainer";
import { Link } from "react-router-dom";
const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="relative z-20 mt-16 w-full">
    <GlassContainer className="max-w-[1400px] mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6 bg-glassBg/75 dark:bg-glassDark/80">
      <div>
        <span className="display text-xl text-gold">Maroc Chic</span>
        <p className="text-xs text-stone mt-1">
          Handcrafted in Morocco &copy; {currentYear}
        </p>
      </div>
      <div className="flex gap-8 md:gap-12 items-center text-sm">
        <Link to="/" className="hover:text-gold">
          Home
        </Link>
        <Link to="/products" className="hover:text-gold">
          Shop
        </Link>
        <Link to="/about-contact" className="hover:text-gold">
          About
        </Link>
        <a href="mailto:info@marocchic.com" className="hover:text-gold">
          Contact
        </a>
      </div>
      <div className="flex gap-5">
        <a
          href="https://instagram.com"
          aria-label="Instagram"
          className="hover:text-gold"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="4.5" />
            <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
            <circle cx="18" cy="6" r="1" />
          </svg>
        </a>
        <a
          href="https://facebook.com"
          aria-label="Facebook"
          className="hover:text-gold"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor">
            <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
            <path d="M16 12h-3v8" />
            <path d="M13 20v-8" />
            <path d="M13 12V9a2 2 0 0 1 4 0" />
          </svg>
        </a>
        {/* Add other social icons as needed */}
      </div>
    </GlassContainer>
  </footer>
);
export default Footer;
