
import React from 'react';
import { TrendingUp, Users, Award } from 'lucide-react';

const ResultsStrip = () => {
  return (
    <section id="results" className="py-16 bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { 
              icon: <Users className="h-12 w-12 mb-4" />, 
              number: "30,000+", 
              text: "Students Trained" 
            },
            { 
              icon: <Award className="h-12 w-12 mb-4" />, 
              number: "112+", 
              text: "Admits to B-schools Worldwide" 
            },
            { 
              icon: <TrendingUp className="h-12 w-12 mb-4" />, 
              number: "95%", 
              text: "Score-Improvement Rate" 
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              {item.icon}
              <h3 className="text-4xl font-bold mb-1">{item.number}</h3>
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsStrip;
