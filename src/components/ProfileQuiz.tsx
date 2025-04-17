
import React from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

const ProfileQuiz = () => {
  return (
    <section id="quiz" className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-3 rounded-full">
              <HelpCircle className="h-10 w-10" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">How Ready Are You?</h2>
          
          <p className="text-xl mb-8">
            Answer 7 questions, get a custom GMAT + MBA roadmap.
          </p>

          <Button className="bg-white text-blue-700 hover:bg-gray-100">
            Start the 3-Minute Quiz
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfileQuiz;
