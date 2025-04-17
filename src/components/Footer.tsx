
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">CrackVerbal</h3>
            <p className="text-gray-400 mb-4">
              India's premier GMAT prep and MBA admissions consulting company, helping students achieve their dream scores since 2006.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GMAT Preparation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">MBA Admissions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Free Practice Test</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GMAT Study Material</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">MBA Application Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webinars & Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">School Selection Guide</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-gray-400" />
                <span className="text-gray-400">+91 888 454 4443</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-gray-400" />
                <span className="text-gray-400">info@crackverbal.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-gray-400" />
                <span className="text-gray-400">
                  Bangalore • Chennai • Hyderabad • Online
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} CrackVerbal. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
