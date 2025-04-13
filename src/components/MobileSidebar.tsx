
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background">
      <div className="container-custom pt-5 flex flex-col h-full">
        <div className="flex justify-end mb-8">
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col space-y-6 text-xl">
          <NavItem href="/" onClick={onClose}>Home</NavItem>
          <NavItem href="/tours" onClick={onClose}>Tours</NavItem>
          <NavItem href="/custom-tour" onClick={onClose}>Custom Tour</NavItem>
          <div className="border-t border-border my-4"></div>
          <NavItem href="#about" onClick={onClose}>About</NavItem>
          <NavItem href="#services" onClick={onClose}>Services</NavItem>
          <NavItem href="#guides" onClick={onClose}>Guides</NavItem>
          <NavItem href="#testimonials" onClick={onClose}>Testimonials</NavItem>
        </div>
        
        <div className="mt-auto pb-10">
          <a 
            href="#contact" 
            className="btn-primary block text-center py-3"
            onClick={onClose}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => {
  // Handle hash navigation vs page navigation differently
  const isHashLink = href.startsWith('#');
  
  if (isHashLink) {
    return (
      <a 
        href={href}
        className="font-medium hover:text-accent transition-colors py-2" 
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link 
      to={href}
      className="font-medium hover:text-accent transition-colors py-2" 
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default MobileSidebar;
