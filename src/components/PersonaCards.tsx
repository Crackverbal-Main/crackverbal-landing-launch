
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, RefreshCw } from 'lucide-react';

const PersonaCards = () => {
  return (
    <section id="personas" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Tailored Plans</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Customized learning pathways designed for your specific needs and goals
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* First-Time Test Taker Card */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">First-Time Test Taker</h3>
            </div>
            
            <p className="text-lg mb-6 text-gray-600">New to the GMAT?</p>
            
            <ul className="space-y-4 mb-8">
              {[
                { num: 1, text: "Master every section with bite-sized lessons" },
                { num: 2, text: "Weekly checkpoints keep you on track" },
                { num: 3, text: "Unlimited mentor chat for doubts" },
              ].map((item) => (
                <li key={item.num} className="flex items-start">
                  <span className="flex justify-center items-center h-6 w-6 bg-primary text-white rounded-full text-sm font-bold mr-3">{item.num}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity">
              Show Me the Plan
            </Button>
          </div>
          
          {/* Retaker Card */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Retaker</h3>
            </div>
            
            <p className="text-lg mb-6 text-gray-600">Taking another swing?</p>
            
            <ul className="space-y-4 mb-8">
              {[
                { num: 1, text: "Deep-dive error analytics pin-point score leaks" },
                { num: 2, text: "Score-rebound curriculum in 4-6 weeks" },
                { num: 3, text: "Mindset reset—turn nerves into numbers" },
              ].map((item) => (
                <li key={item.num} className="flex items-start">
                  <span className="flex justify-center items-center h-6 w-6 bg-primary text-white rounded-full text-sm font-bold mr-3">{item.num}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity">
              Fix My Score
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaCards;
