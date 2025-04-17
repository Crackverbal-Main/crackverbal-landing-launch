
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

const MentorshipBanner = () => {
  return (
    <section id="mentorship" className="py-16 bg-blue-900 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">One mentor, from Day 1 to Admit Day.</h2>
          
          <div className="flex justify-center mb-6">
            <div className="bg-blue-800 p-3 rounded-full">
              <Users className="h-10 w-10" />
            </div>
          </div>
          
          <p className="text-xl mb-8">
            Your assigned coach designs your study plan, reviews every mock, and later edits your essays—no hand-offs.
          </p>

          <Button className="bg-white text-blue-900 hover:bg-gray-100">
            Meet My Mentor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentorshipBanner;
