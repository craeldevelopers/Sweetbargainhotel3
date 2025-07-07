import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
return (
<footer className="bg-luxury-charcoal text-white">
<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{/* Brand */}
<div className="space-y-4">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center">
<span className="text-white font-bold text-sm">SB</span>
</div>
<span className="text-xl font-semibold">Sweet Bargain Hotel</span>
</div>
<p className="text-gray-400 text-sm">
Experience luxury and comfort in the heart of the city. Your perfect stay awaits.
</p>
</div>

{/* Quick Links */}  
      <div className="space-y-4">  
        <h3 className="text-lg font-semibold">Quick Links</h3>  
        <ul className="space-y-2">  
          <li>  
            <Link to="/" className="text-gray-400 hover:text-luxury-gold transition-colors">  
              Home  
            </Link>  
          </li>  
          <li>  
            <Link to="/rooms" className="text-gray-400 hover:text-luxury-gold transition-colors">  
              Rooms  
            </Link>  
          </li>  
          <li>  
            <Link to="/about" className="text-gray-400 hover:text-luxury-gold transition-colors">  
              About Us  
            </Link>  
          </li>  
          <li>  
            <Link to="/contact" className="text-gray-400 hover:text-luxury-gold transition-colors">  
              Contact  
            </Link>  
          </li>  
        </ul>  
      </div>  

      {/* Contact Info */}  
      <div className="space-y-4">  
        <h3 className="text-lg font-semibold">Contact Info</h3>  
        <ul className="space-y-3">  
          <li className="flex items-center space-x-3">  
            <MapPin className="w-5 h-5 text-luxury-gold" />  
            <span className="text-gray-400 text-sm">123 Luxury Ave, Downtown</span>  
          </li>  
          <li className="flex items-center space-x-3">  
            <Phone className="w-5 h-5 text-luxury-gold" />  
            <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>  
          </li>  
          <li className="flex items-center space-x-3">  
            <Mail className="w-5 h-5 text-luxury-gold" />  
            <span className="text-gray-400 text-sm">info@sweetbargainhotel.com</span>  
          </li>  
        </ul>  
      </div>  

      {/* Social Media */}  
      <div className="space-y-4">  
        <h3 className="text-lg font-semibold">Follow Us</h3>  
        <div className="flex space-x-4">  
          <a  
            href="#"  
            className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors"  
            aria-label="Facebook"  
          >  
            <Facebook className="w-5 h-5" />  
          </a>  
          <a  
            href="#"  
            className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors"  
            aria-label="Instagram"  
          >  
            <Instagram className="w-5 h-5" />  
          </a>  
          <a  
            href="#"  
            className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors"  
            aria-label="Twitter"  
          >  
            <Twitter className="w-5 h-5" />  
          </a>  
        </div>  
      </div>  
    </div>  

    <div className="border-t border-gray-700 mt-8 pt-8 text-center">  
      <p className="text-gray-400 text-sm">  
        © 2024 Sweet Bargain Hotel. All rights reserved.  
      </p>  
    </div>  
  </div>  
</footer>

);
};

export default Footer;


