
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';

const ComparisonTable = () => {
  const [openSection, setOpenSection] = useState<string | null>('crackverbal');
  
  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const comparisonData = [
    {
      id: 'instructors',
      feature: 'Instructors',
      crackverbal: 'GMAT-only experts (1000+ hours of teaching experience)',
      videoCourses: 'Generalists',
      tutors: 'Mixed',
    },
    {
      id: 'learningPlan',
      feature: 'Learning Plan',
      crackverbal: 'Fully custom',
      videoCourses: 'One-size',
      tutors: 'Partial',
    },
    {
      id: 'feedbackSpeed',
      feature: 'Feedback Speed',
      crackverbal: '<12 hrs, WhatsApp & Zoom',
      videoCourses: 'Automated',
      tutors: 'Days',
    },
    {
      id: 'flexibility',
      feature: 'Flexibility',
      crackverbal: 'Live + self-paced + offline hubs',
      videoCourses: 'Self-paced only',
      tutors: 'Limited',
    },
    {
      id: 'mbaGuidance',
      feature: 'MBA Guidance',
      crackverbal: 'In-house admissions team',
      videoCourses: 'None',
      tutors: 'Basic',
    },
  ];

  const renderCellContent = (content: string, isPositive: boolean = false) => {
    if (content === 'None' || content === 'Mixed' || content === 'Limited' || content === 'One-size' || content === 'Automated' || content === 'Days' || content === 'Generalists' || content === 'Partial' || content === 'Basic') {
      return (
        <div className="flex items-center">
          <X className="h-5 w-5 text-gray-400 mr-2" />
          <span>{content}</span>
        </div>
      );
    }
    
    if (isPositive) {
      return (
        <div className="flex items-center font-semibold">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span>{content}</span>
        </div>
      );
    }
    
    return content;
  };

  return (
    <section id="compare" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">How CrackVerbal Stands Out</h2>
        
        {/* Desktop Table (hidden on mobile) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-white sticky top-0">
              <tr>
                <th className="p-4 text-left border-b border-gray-200 font-semibold">Feature</th>
                <th className="p-4 text-left border-b border-gray-200 font-semibold bg-blue-50">CrackVerbal</th>
                <th className="p-4 text-left border-b border-gray-200 font-semibold">Online Video Courses</th>
                <th className="p-4 text-left border-b border-gray-200 font-semibold">Generic Tutors</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-4 border-b border-gray-200 font-medium">{row.feature}</td>
                  <td className="p-4 border-b border-gray-200 bg-blue-50">{renderCellContent(row.crackverbal, true)}</td>
                  <td className="p-4 border-b border-gray-200">{renderCellContent(row.videoCourses)}</td>
                  <td className="p-4 border-b border-gray-200">{renderCellContent(row.tutors)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Accordion (hidden on desktop) */}
        <div className="md:hidden space-y-4">
          <div 
            className={`border rounded-lg overflow-hidden ${openSection === 'crackverbal' ? 'border-primary' : 'border-gray-200'}`}
          >
            <button 
              className={`w-full p-4 flex justify-between items-center ${openSection === 'crackverbal' ? 'bg-blue-50' : 'bg-white'}`}
              onClick={() => toggleSection('crackverbal')}
            >
              <span className="font-semibold">CrackVerbal</span>
              {openSection === 'crackverbal' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            {openSection === 'crackverbal' && (
              <div className="p-4 bg-white">
                {comparisonData.map((row, index) => (
                  <div key={index} className="py-2 border-b border-gray-100 last:border-0">
                    <p className="text-sm text-gray-500">{row.feature}</p>
                    <div className="mt-1">{renderCellContent(row.crackverbal, true)}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div 
            className={`border rounded-lg overflow-hidden ${openSection === 'videoCourses' ? 'border-primary' : 'border-gray-200'}`}
          >
            <button 
              className={`w-full p-4 flex justify-between items-center ${openSection === 'videoCourses' ? 'bg-blue-50' : 'bg-white'}`}
              onClick={() => toggleSection('videoCourses')}
            >
              <span className="font-semibold">Online Video Courses</span>
              {openSection === 'videoCourses' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            {openSection === 'videoCourses' && (
              <div className="p-4 bg-white">
                {comparisonData.map((row, index) => (
                  <div key={index} className="py-2 border-b border-gray-100 last:border-0">
                    <p className="text-sm text-gray-500">{row.feature}</p>
                    <div className="mt-1">{renderCellContent(row.videoCourses)}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div 
            className={`border rounded-lg overflow-hidden ${openSection === 'tutors' ? 'border-primary' : 'border-gray-200'}`}
          >
            <button 
              className={`w-full p-4 flex justify-between items-center ${openSection === 'tutors' ? 'bg-blue-50' : 'bg-white'}`}
              onClick={() => toggleSection('tutors')}
            >
              <span className="font-semibold">Generic Tutors</span>
              {openSection === 'tutors' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            {openSection === 'tutors' && (
              <div className="p-4 bg-white">
                {comparisonData.map((row, index) => (
                  <div key={index} className="py-2 border-b border-gray-100 last:border-0">
                    <p className="text-sm text-gray-500">{row.feature}</p>
                    <div className="mt-1">{renderCellContent(row.tutors)}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button className="bg-primary hover:bg-primary/90">Book a 15-min Strategy Call</Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
