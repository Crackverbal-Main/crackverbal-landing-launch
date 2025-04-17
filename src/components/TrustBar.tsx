
import React, { useEffect, useState } from 'react';

const TrustBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Partner logos
  const partners = [
    { name: "Stanford GSB", logo: "/lovable-uploads/6525c337-dc3e-4177-853d-0279edf041e2.png" },
    { name: "Harvard", logo: "/placeholder.svg" },
    { name: "INSEAD", logo: "/placeholder.svg" },
    { name: "MIT", logo: "/placeholder.svg" },
    { name: "The Hindu", logo: "/placeholder.svg" },
    { name: "Economic Times", logo: "/placeholder.svg" },
  ];

  return (
    <section 
      id="trust" 
      className={`py-6 bg-gray-50 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-40 shadow-md' : ''
      } transition-all duration-300`}
    >
      <div className="container">
        <div className="text-center mb-4">
          <p className="text-lg font-medium">Since 2006, trusted by 30,000+ professionals</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="w-24 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-lg font-semibold text-primary">95% score-improvement success rate</p>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
