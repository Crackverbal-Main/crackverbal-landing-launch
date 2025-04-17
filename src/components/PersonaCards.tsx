
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, RefreshCw } from 'lucide-react';

const PersonaCards = () => {
  return (
    <section id="personas" className="py-16 bg-blue-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Tailored Plans</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* First-Time Test Taker Card */}
          <div className="feature-card flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">First-Time Test Taker</h3>
            </div>
            
            <p className="text-lg mb-4 text-gray-600">New to the GMAT?</p>
            
            <ul className="space-y-4 mb-6 flex-grow">
              <li className="flex">
                <span className="font-bold text-primary mr-2">1 ·</span>
                <span>Master every section with bite-sized lessons</span>
              </li>
              <li className="flex">
                <span className="font-bold text-primary mr-2">2 ·</span>
                <span>Weekly checkpoints keep you on track</span>
              </li>
              <li className="flex">
                <span className="font-bold text-primary mr-2">3 ·</span>
                <span>Unlimited mentor chat for doubts</span>
              </li>
            </ul>
            
            <Button className="bg-primary hover:bg-primary/90 mt-auto">Show Me the Plan</Button>
          </div>
          
          {/* Retaker Card */}
          <div className="feature-card flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Retaker</h3>
            </div>
            
            <p className="text-lg mb-4 text-gray-600">Taking another swing?</p>
            
            <ul className="space-y-4 mb-6 flex-grow">
              <li className="flex">
                <span className="font-bold text-primary mr-2">1 ·</span>
                <span>Deep-dive error analytics pin-point score leaks</span>
              </li>
              <li className="flex">
                <span className="font-bold text-primary mr-2">2 ·</span>
                <span>Score-rebound curriculum in 4-6 weeks</span>
              </li>
              <li className="flex">
                <span className="font-bold text-primary mr-2">3 ·</span>
                <span>Mindset reset—turn nerves into numbers</span>
              </li>
            </ul>
            
            <Button className="bg-primary hover:bg-primary/90 mt-auto">Fix My Score</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaCards;
