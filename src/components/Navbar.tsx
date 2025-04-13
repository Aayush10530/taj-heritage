
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import MobileSidebar from './MobileSidebar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-95 shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className="font-playfair font-bold text-2xl text-foreground">Taj Heritage</span>
            <span className="text-xs text-accent-foreground/80 font-medium mt-0.5">Walk the Path of Emperors</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLinks onHomeClick={handleHomeClick} />
            <a href="#contact" className="flex items-center gap-2 btn-primary">
              <Phone size={16} />
              <span>Contact Us</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-foreground"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

const NavLinks = ({ onHomeClick }: { onHomeClick: (e: React.MouseEvent) => void }) => {
  const links = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Tours', href: '#tours' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <div className="flex gap-8">
      {links.map(link => (
        link.name === 'Home' ? (
          <a
            key={link.name}
            href="/"
            className="font-medium hover:text-accent transition-colors flex items-center gap-1"
            onClick={onHomeClick}
          >
            <Home size={16} />
            {link.name}
          </a>
        ) : link.isRoute ? (
          <Link
            key={link.name}
            to={link.href}
            className="font-medium hover:text-accent transition-colors flex items-center gap-1"
          >
            {link.name}
          </Link>
        ) : (
          <a
            key={link.name}
            href={link.href}
            className="font-medium hover:text-accent transition-colors"
          >
            {link.name}
          </a>
        )
      ))}
    </div>
  );
};

export default Navbar;
