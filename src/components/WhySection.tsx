
import React from 'react';
import { 
  BookOpen, MessageSquare, Award, Brain, PlaneTakeoff 
} from 'lucide-react';

const WhySection = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: 'Relatable Teaching',
      description: 'We translate GMAT jargon into real-world analogies.'
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: '"Ah-Ha" Mentors',
      description: 'Industry veterans make tricky concepts click in minutes.'
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: 'AI-Powered Insights',
      description: 'Algorithm spots your patterns; humans give you the fix.'
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: '99ᵗʰ-Percentile Mindset',
      description: 'Train to think like elite scorers, not just memorize tricks.'
    },
    {
      icon: <PlaneTakeoff className="h-10 w-10 text-primary" />,
      title: 'MBA-Ready Roadmap',
      description: 'Test prep + essays + interviews—one seamless journey.'
    }
  ];

  return (
    <section id="why" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Why CrackVerbal?</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our unique approach has helped thousands of professionals achieve their dream scores.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="mx-auto mb-5 bg-blue-50 p-5 rounded-full inline-flex items-center justify-center shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
