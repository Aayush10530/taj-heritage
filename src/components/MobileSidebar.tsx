
import { useState, useEffect } from "react";
import { X, Home } from "lucide-react";
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
          <NavItem href="/" isRoute={true} icon={<Home size={20} className="mr-2" />} onClick={onClose}>Home</NavItem>
          <NavItem href="#about" onClick={onClose}>About</NavItem>
          <NavItem href="#services" onClick={onClose}>Services</NavItem>
          <NavItem href="/tours" isRoute={true} onClick={onClose}>Tours</NavItem>
          <NavItem href="/custom-tour" isRoute={true} onClick={onClose}>Custom Tour</NavItem>
          <div className="border-t border-border my-4"></div>
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

const NavItem = ({ 
  href, 
  children, 
  onClick, 
  isRoute = false,
  icon
}: { 
  href: string; 
  children: React.ReactNode; 
  onClick: () => void;
  isRoute?: boolean;
  icon?: React.ReactNode;
}) => {
  // Handle hash navigation vs page navigation differently
  const isHashLink = href.startsWith('#');
  
  if (isRoute) {
    return (
      <Link 
        to={href}
        className="font-medium hover:text-accent transition-colors py-2 flex items-center" 
        onClick={onClick}
      >
        {icon}
        {children}
      </Link>
    );
  }
  
  return (
    <a 
      href={href}
      className="font-medium hover:text-accent transition-colors py-2" 
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default MobileSidebar;
