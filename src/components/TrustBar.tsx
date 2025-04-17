
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
    // US B-schools
    { name: "Carnegie Mellon Tepper School of Business", logo: "/lovable-uploads/57b42e87-9471-4664-873b-c395a171ff00.png" },
    { name: "Columbia Business School", logo: "/lovable-uploads/38b4589f-9c52-4f01-9bb2-d84a982de2d8.png" },
    { name: "UC Berkeley Haas", logo: "/lovable-uploads/ff979794-78f5-4517-8b40-ccf77120199f.png" },
    { name: "Harvard Business School", logo: "/lovable-uploads/f0c77755-d4b3-4299-a9a7-afe6f69807ab.png" },
    { name: "HEC Paris", logo: "/lovable-uploads/f645271c-38e9-439c-b52d-81114daf7bdd.png" },
    { name: "IIM Ahmedabad", logo: "/lovable-uploads/1f851fff-4369-4f79-82c0-6a02f34ee270.png" },
    { name: "IIM Bangalore", logo: "/lovable-uploads/bad406ba-8b78-4a05-ae4d-43f67471277c.png" },
    { name: "IIM Calcutta", logo: "/lovable-uploads/841405b5-bb99-4bf6-8313-1b1ac80ade1b.png" },
    { name: "IIM Lucknow", logo: "/lovable-uploads/e0e6b195-c4c3-416b-9f74-e173a8fa6f2d.png" },
    { name: "ISB", logo: "/lovable-uploads/e923425e-5781-401d-ac7a-38c9af09a2c5.png" },
    { name: "University of Cambridge Judge Business School", logo: "/lovable-uploads/3a35be6e-fbf6-4b5c-8257-434279309294.png" },
    { name: "London Business School", logo: "/lovable-uploads/795fcf10-27f3-416e-bf68-862f45a857ee.png" },
    { name: "NUS", logo: "/lovable-uploads/6d93d880-4ead-40b4-b7a3-c9ebec3fe4cd.png" },
    { name: "NYU Stern", logo: "/lovable-uploads/19703543-531b-48c7-9edc-10697005d4f9.png" },
    { name: "University of Toronto Rotman School of Management", logo: "/lovable-uploads/ce03b7ed-6bcb-436d-afe2-949518e617b5.png" },
    { name: "University of Oxford Saïd Business School", logo: "/lovable-uploads/780544dc-45b7-4686-b593-c74b946456c9.png" },
    { name: "Stanford GSB", logo: "/lovable-uploads/f61b5e49-dccc-4f20-b04e-de535f902368.png" },
    { name: "Warwick Business School", logo: "/lovable-uploads/572cee32-b382-42a0-b770-25ed6e3d6c55.png" },
    { name: "Wharton", logo: "/lovable-uploads/6f08c1d4-33bf-43bf-aef0-de0ac21bd927.png" },
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
                      className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity" 
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
