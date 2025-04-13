
import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import { Link } from "react-router-dom";

const ThemedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex flex-col">
          <Link to="/" className="text-2xl font-playfair font-bold text-black">
            Taj Heritage
          </Link>
          <span className="text-xs font-medium tracking-wider text-black">
            Walk the Path of Emperors
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link hover:text-accent transition-colors text-black flex items-center gap-1">
            <Home size={16} />
            Home
          </Link>
          <a href="#about" className="nav-link hover:text-accent transition-colors text-black">
            About
          </a>
          <a href="#services" className="nav-link hover:text-accent transition-colors text-black">
            Services
          </a>
          <a href="#tours" className="nav-link hover:text-accent transition-colors text-black">
            Tours
          </a>
          <a href="#contact" className="nav-link hover:text-accent transition-colors text-black">
            Contact
          </a>
          <a href="#contact" className="btn-primary">
            Book Now
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background backdrop-blur-lg z-40 transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden pt-20`}
      >
        <div className="container-custom flex flex-col space-y-4 py-8">
          <Link
            to="/"
            className="py-3 text-lg border-b border-border text-black flex items-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Home size={18} />
            Home
          </Link>
          <a
            href="#about"
            className="py-3 text-lg border-b border-border text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="py-3 text-lg border-b border-border text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#tours"
            className="py-3 text-lg border-b border-border text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tours
          </a>
          <a
            href="#contact"
            className="py-3 text-lg border-b border-border text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="#contact"
            className="btn-primary mt-4 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default ThemedNavbar;
