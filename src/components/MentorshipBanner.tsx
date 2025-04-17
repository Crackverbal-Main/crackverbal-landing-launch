
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

const MentorshipBanner = () => {
  return (
    <section id="mentorship" className="py-16 bg-primary text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-foreground/20 p-3 rounded-full">
              <Users className="h-10 w-10" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">1 Stop - from GMAT/GRE prep to Admissions Consulting</h2>
          
          <p className="text-xl mb-8">
            Comprehensive experience in helping thousands of students till the end goal.
          </p>

          <Button className="bg-accent text-black hover:bg-accent/90">
            Meet My Mentor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentorshipBanner;
