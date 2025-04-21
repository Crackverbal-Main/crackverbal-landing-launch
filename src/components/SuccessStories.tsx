
import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const SuccessStories = () => {
  // Updated success stories with fixed quote marks
  const stories = [
    {
      id: 1,
      name: 'Akshit',
      image: '/lovable-uploads/0d66ad11-9965-4f5b-b2f3-2607e1ab0c6d.png',
      quote: "CrackVerbal helped me achieve a 715 score, which was more than I hoped for. The personalized approach made all the difference.",
      score: '715',
      rating: 5
    },
    {
      id: 2,
      name: 'Akshat',
      image: '/lovable-uploads/ab088dd6-dbce-45d7-94f9-8e8d98d8984f.png',
      quote: "From struggling with Quant to scoring a 705 – the mentors really understand how to address each student's weaknesses.",
      score: '705',
      rating: 5
    },
    {
      id: 3,
      name: 'Mugdha',
      image: '/lovable-uploads/e1510061-9adf-4113-92fc-ebc0c445de39.png',
      quote: "The flexibility of the program helped me balance work and GMAT prep. So happy with my 695 score!",
      score: '695',
      rating: 5
    },
    {
      id: 4,
      name: 'Thejeshwar',
      image: '/lovable-uploads/8da22616-c1b2-438d-9b06-2982b37f8da9.png',
      quote: "CrackVerbal’s strategy sessions helped me focus on what matters most. Thrilled with my 715 score!",
      score: '715',
      rating: 5
    },
    {
      id: 5,
      name: 'Kamali',
      image: '/lovable-uploads/da093d37-9d16-4fb9-9f4c-5310ca2750f3.png',
      quote: "The verbal strategies were game-changing. Couldn’t have achieved 685 without the CrackVerbal team.",
      score: '685',
      rating: 5
    },
    {
      id: 6,
      name: 'Dr. Pratik',
      image: '/lovable-uploads/6acef6e2-5ca7-423e-9042-886da1fd0c61.png',
      quote: "As a working professional, I needed an efficient prep plan. CrackVerbal delivered with their focused approach – 685!",
      score: '685',
      rating: 5
    }
  ];

  return (
    <section id="stories" className="py-20 bg-gradient-to-br from-[#F9FBFC] to-[#eef2f7]">
      <div className="container">
        {/* Modern Top Section */}
        <div className="flex flex-col items-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-4 py-2 mb-3 rounded-full bg-white shadow-lg border border-blue-100">
            <img src="/lovable-uploads/60eea18f-8e17-4666-960f-4b19070450e0.png" alt="" className="h-8 w-8 object-cover rounded-full border-2 border-blue-200" />
            <span className="font-semibold text-lg md:text-xl text-primary tracking-tight">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 tracking-tight text-gray-900">
            Real Scores. Real Journeys.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-center max-w-xl mb-0">
            People from all walks of life have hit their dream GMAT scores – here’s how the right mentorship made the difference.
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <Carousel className="w-full" opts={{ align: "center", loop: true }}>
            <CarouselContent>
              {stories.map((story) => (
                <CarouselItem key={story.id} className="basis-1/1 md:basis-1/2 lg:basis-1/3 pl-6">
                  {/* Modern Card */}
                  <div className="relative bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col gap-2 border border-blue-50 hover:shadow-2xl transition-all group">
                    <div className="absolute -top-7 left-6 w-14 h-14 ring-4 ring-blue-100 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-sm">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col mt-10 mb-2">
                      <div className="flex items-center mb-1">
                        <h3 className="font-bold text-lg text-gray-900">{story.name}</h3>
                        <span className="ml-2 bg-blue-100 text-blue-800 px-3 py-0.5 rounded-full text-sm font-medium tracking-tight shadow-sm">
                          {story.score}
                        </span>
                      </div>
                      <div className="flex items-center">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="italic text-gray-700 text-[1rem] flex-grow mb-2 line-clamp-4">
                      “{story.quote}”
                    </blockquote>
                    <div className="flex justify-end">
                      <Button variant="link" className="text-primary p-0 hover:opacity-80 font-medium">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-10 gap-4">
              <CarouselPrevious className="relative static bg-blue-600 text-white hover:bg-blue-700 shadow-lg" />
              <CarouselNext className="relative static bg-blue-600 text-white hover:bg-blue-700 shadow-lg" />
            </div>
          </Carousel>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full" opts={{ align: "center", loop: true }}>
            <CarouselContent>
              {stories.map((story) => (
                <CarouselItem key={story.id} className="basis-full">
                  {/* Modern Card Mobile */}
                  <div className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col border border-blue-50 mb-6">
                    <div className="absolute -top-6 left-4 w-12 h-12 ring-4 ring-blue-100 rounded-full overflow-hidden bg-white flex items-center justify-center">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col mt-8">
                      <div className="flex items-center mb-1">
                        <h3 className="font-bold text-base text-gray-900">{story.name}</h3>
                        <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium tracking-tight">
                          {story.score}
                        </span>
                      </div>
                      <div className="flex items-center">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="italic text-gray-700 text-[0.95rem] flex-grow mb-2 mt-2 line-clamp-5">
                      “{story.quote}”
                    </blockquote>
                    <div className="flex justify-end">
                      <Button variant="link" className="text-primary p-0 text-sm hover:opacity-80 font-medium">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-3">
              <CarouselPrevious className="relative static h-8 w-8 bg-blue-600 text-white hover:bg-blue-700 shadow" />
              <CarouselNext className="relative static h-8 w-8 bg-blue-600 text-white hover:bg-blue-700 shadow" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
