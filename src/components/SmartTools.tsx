
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calculator, BarChart2 } from 'lucide-react';

const SmartTools = () => {
  return (
    <section id="tools" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Smart Tools for Your GMAT Journey</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Use our interactive tools to make informed decisions and track your progress
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tool 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-5">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <Calculator className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">GMAT Score Calculator</h3>
            </div>
            
            <p className="text-gray-600 mb-8 text-lg">
              Slide your section scores and see your predicted total instantly.
            </p>
            
            <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity py-2.5 text-lg">
              Try the Calculator
            </Button>
          </div>
          
          {/* Tool 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-5">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <BarChart2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">GMAT vs GRE Comparison</h3>
            </div>
            
            <p className="text-gray-600 mb-8 text-lg">
              Compare based on your profile in 30 seconds to choose the right test.
            </p>
            
            <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity py-2.5 text-lg">
              Compare Tests
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartTools;
