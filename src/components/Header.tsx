
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white py-3'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold">
            <img src="/lovable-uploads/52f30c3d-ac02-4b61-9bf9-75d854d46479.png" alt="CrackVerbal Logo" className="h-12" />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Why Us", "Compare", "Success Stories", "FAQ"].map((item, index) => (
            <a 
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`} 
              className="text-gray-700 hover:text-primary font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+919019199800" className="flex items-center text-gray-700 hover:text-primary transition-colors">
            <Phone className="h-4 w-4 mr-2" />
            <span>+91 9019199800</span>
          </a>
          <Button className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity">
            Book a Call
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 shadow-lg absolute w-full animate-fade-in">
          <div className="container space-y-4">
            <nav className="flex flex-col space-y-3">
              {["Why Us", "Compare", "Success Stories", "FAQ"].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, '')}`} 
                  className="text-gray-700 hover:text-primary py-2 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <div className="flex flex-col space-y-3 pt-3">
              <a 
                href="tel:+919019199800" 
                className="flex items-center justify-center text-gray-700 py-2 border border-gray-200 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 9019199800</span>
              </a>
              <Button 
                className="w-full bg-gradient-to-r from-primary to-primary/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
