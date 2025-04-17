
import React from 'react';
import { TrendingUp, Users, Award } from 'lucide-react';

const ResultsStrip = () => {
  return (
    <section id="results" className="py-12 bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Users className="h-10 w-10 mb-3" />
            <h3 className="text-3xl font-bold mb-1">30,000+</h3>
            <p className="text-lg">Success Stories</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Award className="h-10 w-10 mb-3" />
            <h3 className="text-3xl font-bold mb-1">1,200+</h3>
            <p className="text-lg">Admits to M7/INSEAD</p>
          </div>
          
          <div className="flex flex-col items-center">
            <TrendingUp className="h-10 w-10 mb-3" />
            <h3 className="text-3xl font-bold mb-1">95%</h3>
            <p className="text-lg">Score-Improvement Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsStrip;
