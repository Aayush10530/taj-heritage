
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-95 shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="font-playfair font-bold text-2xl text-foreground">Taj Heritage</span>
          <span className="text-xs text-accent-foreground/80 font-medium mt-0.5">Walk the Path of Emperors</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLinks />
          <a href="#contact" className="flex items-center gap-2 btn-primary">
            <Phone size={16} />
            <span>Contact Us</span>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-background absolute w-full ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container-custom py-4 flex flex-col space-y-4">
          <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
          <a 
            href="#contact" 
            className="btn-primary text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = ({ mobile = false, onClick = () => {} }) => {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Tours', href: '#tours' },
    { name: 'Guides', href: '#guides' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <div className={mobile ? 'flex flex-col space-y-3' : 'flex gap-8'}>
      {links.map(link => (
        <a
          key={link.name}
          href={link.href}
          className={`font-medium hover:text-accent transition-colors ${mobile ? 'text-lg py-1' : ''}`}
          onClick={onClick}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
