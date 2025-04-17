
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

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

  // Partner logos - Updated with top B-schools from around the world
  const partners = [
    // US B-schools (Top 10)
    { name: "Harvard Business School", logo: "/placeholder.svg" },
    { name: "Stanford GSB", logo: "/lovable-uploads/6525c337-dc3e-4177-853d-0279edf041e2.png" },
    { name: "Wharton", logo: "/placeholder.svg" },
    { name: "MIT Sloan", logo: "/placeholder.svg" },
    { name: "Columbia Business School", logo: "/placeholder.svg" },
    { name: "Chicago Booth", logo: "/placeholder.svg" },
    { name: "Northwestern Kellogg", logo: "/placeholder.svg" },
    { name: "Berkeley Haas", logo: "/placeholder.svg" },
    { name: "Yale SOM", logo: "/placeholder.svg" },
    { name: "Dartmouth Tuck", logo: "/placeholder.svg" },
    
    // UK B-schools
    { name: "London Business School", logo: "/placeholder.svg" },
    { name: "Oxford Said", logo: "/placeholder.svg" },
    { name: "Cambridge Judge", logo: "/placeholder.svg" },
    { name: "Imperial College", logo: "/placeholder.svg" },
    { name: "Warwick Business School", logo: "/placeholder.svg" },
    
    // Canadian B-schools (Top 5)
    { name: "Rotman School of Management", logo: "/placeholder.svg" },
    { name: "Ivey Business School", logo: "/placeholder.svg" },
    { name: "Schulich School of Business", logo: "/placeholder.svg" },
    { name: "McGill Desautels", logo: "/placeholder.svg" },
    { name: "UBC Sauder", logo: "/placeholder.svg" },
    
    // Singapore
    { name: "NUS Business School", logo: "/placeholder.svg" },
    { name: "NTU Nanyang", logo: "/placeholder.svg" },
    
    // Indian B-schools
    { name: "IIM Ahmedabad", logo: "/placeholder.svg" },
    { name: "IIM Bangalore", logo: "/placeholder.svg" },
    { name: "IIM Calcutta", logo: "/placeholder.svg" },
    { name: "ISB Hyderabad", logo: "/placeholder.svg" },
    { name: "IIM Lucknow", logo: "/placeholder.svg" },
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
          <p className="text-lg font-medium">Our students have got admits to</p>
        </div>
        
        <div className="relative px-10">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="basis-1/5 md:basis-1/6 lg:basis-1/8">
                  <div className="h-16 flex items-center justify-center p-2">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity" 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0" />
            <CarouselNext className="absolute right-0" />
          </Carousel>
        </div>

        <div className="mt-4 text-center">
          <p className="text-lg font-semibold text-primary">95% score-improvement success rate</p>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
