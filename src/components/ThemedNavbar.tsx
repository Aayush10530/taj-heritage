import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const ThemedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } });
    } else {
      document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    // Handle scrolling when navigating from other pages
    if (location.pathname === '/' && location.state?.scrollTo) {
      setTimeout(() => {
        document.querySelector(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

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
          <a href="/" onClick={handleHomeClick} className="nav-link hover:text-accent transition-colors text-black">
            <Home size={16} />
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="nav-link hover:text-accent transition-colors text-black">
            About
          </a>
          <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="nav-link hover:text-accent transition-colors text-black">
            Services
          </a>
          <a href="#tours" onClick={(e) => handleNavClick(e, '#tours')} className="nav-link hover:text-accent transition-colors text-black">
            Tours
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="nav-link hover:text-accent transition-colors text-black">
            Contact
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
          <a
            href="/"
            className="py-3 text-lg border-b border-border text-black flex items-center gap-2"
            onClick={handleHomeClick}
          >
            <Home size={18} />
            Home
          </a>
          <a
            href="#about"
            className="py-3 text-lg border-b border-border text-black"
            onClick={(e) => handleNavClick(e, '#about')}
          >
            About
          </a>
          <a
            href="#services"
            className="py-3 text-lg border-b border-border text-black"
            onClick={(e) => handleNavClick(e, '#services')}
          >
            Services
          </a>
          <a
            href="#tours"
            className="py-3 text-lg border-b border-border text-black"
            onClick={(e) => handleNavClick(e, '#tours')}
          >
            Tours
          </a>
          <a
            href="#contact"
            className="py-3 text-lg border-b border-border text-black"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default ThemedNavbar;
