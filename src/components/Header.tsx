
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container flex justify-between items-center py-3">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold">
            <img src="/lovable-uploads/52f30c3d-ac02-4b61-9bf9-75d854d46479.png" alt="CrackVerbal Logo" className="h-12" />
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#why" className="text-gray-700 hover:text-primary">Why Us</a>
          <a href="#compare" className="text-gray-700 hover:text-primary">Compare</a>
          <a href="#stories" className="text-gray-700 hover:text-primary">Success Stories</a>
          <a href="#faq" className="text-gray-700 hover:text-primary">FAQ</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="tel:+918884544443" className="hidden md:flex items-center text-gray-700 hover:text-primary">
            <Phone className="h-4 w-4 mr-2" />
            <span>+91 888 454 4443</span>
          </a>
          <Button className="bg-primary hover:bg-primary/90">
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
