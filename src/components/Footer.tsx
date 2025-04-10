
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-playfair font-bold text-2xl mb-6">Taj Heritage</h3>
            <p className="mb-6 text-white/70">
              Crafting exclusive, culturally rich experiences for discerning travelers seeking the true essence of the Taj Mahal and Mughal heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#tours" className="text-white/70 hover:text-white transition-colors">Our Tours</a>
              </li>
              <li>
                <a href="#guides" className="text-white/70 hover:text-white transition-colors">Our Guides</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Tour Packages</h4>
            <ul className="space-y-3">
              <li>
                <a href="#tours" className="text-white/70 hover:text-white transition-colors">Sunrise Taj Tour</a>
              </li>
              <li>
                <a href="#tours" className="text-white/70 hover:text-white transition-colors">Full Day Heritage Tour</a>
              </li>
              <li>
                <a href="#tours" className="text-white/70 hover:text-white transition-colors">Moonlight Taj Tour</a>
              </li>
              <li>
                <a href="#tours" className="text-white/70 hover:text-white transition-colors">Photography Expedition</a>
              </li>
              <li>
                <a href="#custom-tour" className="text-white/70 hover:text-white transition-colors">Custom Tour Builder</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-white/70">
                Heritage Tower, 123 Taj Road
                <br />Agra, Uttar Pradesh 282001
                <br />India
              </li>
              <li>
                <a href="tel:+919876543210" className="text-white/70 hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li>
                <a href="mailto:info@tajheritage.com" className="text-white/70 hover:text-white transition-colors">info@tajheritage.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Taj Heritage. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
