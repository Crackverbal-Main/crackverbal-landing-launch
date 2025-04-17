
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const SuccessStories = () => {
  // Updated testimonials with the provided images
  const stories = [
    {
      id: 1,
      name: 'Akshit',
      image: '/lovable-uploads/0d66ad11-9965-4f5b-b2f3-2607e1ab0c6d.png',
      quote: 'CrackVerbal helped me achieve a 715 score, which was more than I hoped for. The personalized approach made all the difference.',
      score: '715',
      rating: 5
    },
    {
      id: 2,
      name: 'Akshat',
      image: '/lovable-uploads/ab088dd6-dbce-45d7-94f9-8e8d98d8984f.png',
      quote: "From struggling with Quant to scoring a 705 - the mentors really understand how to address each student's weaknesses.",
      score: '705',
      rating: 5
    },
    {
      id: 3,
      name: 'Mugdha',
      image: '/lovable-uploads/e1510061-9adf-4113-92fc-ebc0c445de39.png',
      quote: 'The flexibility of the program helped me balance work and GMAT prep. So happy with my 695 score!',
      score: '695',
      rating: 5
    },
    {
      id: 4,
      name: 'Thejeshwar',
      image: '/lovable-uploads/8da22616-c1b2-438d-9b06-2982b37f8da9.png',
      quote: "CrackVerbal's strategy sessions helped me focus on what matters most. Thrilled with my 715 score!",
      score: '715',
      rating: 5
    },
    {
      id: 5,
      name: 'Kamali',
      image: '/lovable-uploads/da093d37-9d16-4fb9-9f4c-5310ca2750f3.png',
      quote: "The verbal strategies were game-changing. Couldn't have achieved 685 without the CrackVerbal team.",
      score: '685',
      rating: 5
    },
    {
      id: 6,
      name: 'Dr. Pratik',
      image: '/lovable-uploads/6acef6e2-5ca7-423e-9042-886da1fd0c61.png',
      quote: 'As a working professional, I needed an efficient prep plan. CrackVerbal delivered with their focused approach - 685!',
      score: '685',
      rating: 5
    }
  ];

  return (
    <section id="stories" className="py-16 bg-secondary/10">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        
        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <Carousel className="w-full" opts={{ align: "center", loop: true }}>
            <CarouselContent>
              {stories.map((story) => (
                <CarouselItem key={story.id} className="basis-1/1 md:basis-1/2 lg:basis-1/3 pl-6">
                  <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 mr-4 overflow-hidden rounded-full">
                        <img 
                          src={story.image} 
                          alt={story.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-semibold text-lg">{story.name}</h3>
                          <span className="ml-2 bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-sm font-medium">
                            {story.score}
                          </span>
                        </div>
                        <div className="flex">
                          {[...Array(story.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="italic text-gray-700 flex-grow mb-4">
                      "{story.quote}"
                    </blockquote>
                    
                    <div className="text-right mt-auto">
                      <Button variant="link" className="text-primary p-0">Read More</Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static bg-secondary text-white hover:bg-secondary/80" />
              <CarouselNext className="relative static bg-secondary text-white hover:bg-secondary/80" />
            </div>
          </Carousel>
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full" opts={{ align: "center", loop: true }}>
            <CarouselContent>
              {stories.map((story) => (
                <CarouselItem key={story.id} className="basis-full">
                  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
                        <img 
                          src={story.image} 
                          alt={story.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-semibold">{story.name}</h3>
                          <span className="ml-2 bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs font-medium">
                            {story.score}
                          </span>
                        </div>
                        <div className="flex">
                          {[...Array(story.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="italic text-gray-700 text-sm flex-grow mb-3">
                      "{story.quote}"
                    </blockquote>
                    
                    <div className="text-right">
                      <Button variant="link" className="text-primary p-0 text-sm">Read More</Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-3">
              <CarouselPrevious className="relative static h-8 w-8 bg-secondary text-white hover:bg-secondary/80" />
              <CarouselNext className="relative static h-8 w-8 bg-secondary text-white hover:bg-secondary/80" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
