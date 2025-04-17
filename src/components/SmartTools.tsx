
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calculator, BarChart2 } from 'lucide-react';

const SmartTools = () => {
  return (
    <section id="tools" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Try Our Smart Tools to Guide Your GMAT Journey</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tool 1 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">GMAT Score Calculator</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Slide your section scores and see your predicted total instantly.
            </p>
            
            <Button className="w-full bg-primary hover:bg-primary/90">Try the Calculator</Button>
          </div>
          
          {/* Tool 2 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <BarChart2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">GMAT vs GRE Comparison</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Compare based on your profile in 30 seconds to choose the right test.
            </p>
            
            <Button className="w-full bg-primary hover:bg-primary/90">Compare Tests</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartTools;
