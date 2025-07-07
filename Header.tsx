import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const location = useLocation();

const navigation = [
{ name: "Home", href: "/" },
{ name: "Rooms", href: "/rooms" },
{ name: "About", href: "/about" },
{ name: "Contact", href: "/contact" },
];

const isActive = (path: string) => location.pathname === path;

return (
<header className="sticky top-0 z-50 glass-effect">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
{/* Logo */}
<Link to="/" className="flex items-center space-x-2">
<div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center">
<span className="text-white font-bold text-sm">SB</span>
</div>
<span className="text-xl font-semibold text-luxury-charcoal">
Sweet Bargain Hotel
</span>
</Link>

{/* Desktop Navigation */}  
      <nav className="hidden md:flex items-center space-x-8">  
        {navigation.map((item) => (  
          <Link  
            key={item.name}  
            to={item.href}  
            className={`text-sm font-medium transition-colors hover:text-luxury-gold ${  
              isActive(item.href)  
                ? "text-luxury-gold"  
                : "text-luxury-charcoal"  
            }`}  
          >  
            {item.name}  
          </Link>  
        ))}  
        <Button   
          asChild   
          className="bg-luxury-gold hover:bg-luxury-gold/90 text-white"  
        >  
          <Link to="/booking">Book Now</Link>  
        </Button>  
      </nav>  

      {/* Mobile menu button */}  
      <div className="md:hidden">  
        <Button  
          variant="ghost"  
          size="icon"  
          onClick={() => setIsMenuOpen(!isMenuOpen)}  
          aria-label="Toggle menu"  
        >  
          {isMenuOpen ? (  
            <X className="h-6 w-6" />  
          ) : (  
            <Menu className="h-6 w-6" />  
          )}  
        </Button>  
      </div>  
    </div>  

    {/* Mobile Navigation */}  
    {isMenuOpen && (  
      <div className="md:hidden">  
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/20">  
          {navigation.map((item) => (  
            <Link  
              key={item.name}  
              to={item.href}  
              className={`block px-3 py-2 text-base font-medium transition-colors hover:text-luxury-gold ${  
                isActive(item.href)  
                  ? "text-luxury-gold"  
                  : "text-luxury-charcoal"  
              }`}  
              onClick={() => setIsMenuOpen(false)}  
            >  
              {item.name}  
            </Link>  
          ))}  
          <div className="px-3 py-2">  
            <Button   
              asChild   
              className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white"  
            >  
              <Link to="/booking" onClick={() => setIsMenuOpen(false)}>  
                Book Now  
              </Link>  
            </Button>  
          </div>  
        </div>  
      </div>  
    )}  
  </div>  
</header>

);
};

export default Header;
