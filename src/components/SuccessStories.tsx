
import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuccessStories = () => {
  // These would typically come from an API or CMS
  const stories = [
    {
      id: 1,
      name: 'Prerna S.',
      image: '/placeholder.svg',
      quote: 'From 610 to 740 in 7 weeks—INSEAD admit.',
      rating: 5
    },
    {
      id: 2,
      name: 'Rahul G.',
      image: '/placeholder.svg',
      quote: 'First attempt 770 + Columbia MBA.',
      rating: 5
    },
    {
      id: 3,
      name: 'Kevin M.',
      image: '/placeholder.svg',
      quote: 'Retake jumped 80 points; now at MIT Sloan.',
      rating: 5
    }
  ];

  return (
    <section id="stories" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                />
                <div>
                  <h3 className="font-semibold">{story.name}</h3>
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
              
              <div className="text-right">
                <Button variant="link" className="text-primary p-0">Read More</Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Controls */}
        <div className="md:hidden flex justify-center mt-6 space-x-4">
          <button className="p-2 bg-white rounded-full shadow">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="p-2 bg-white rounded-full shadow">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
