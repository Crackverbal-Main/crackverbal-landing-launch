
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Check } from 'lucide-react';

const HeroSection = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workExperience: '',
    targetMonth: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep === 1) {
      setFormStep(2);
    } else {
      console.log('Form submitted:', formData);
      // Here you would submit the form data to your backend
      alert('Thank you! Your study plan will be sent to your email shortly.');
      setFormStep(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        workExperience: '',
        targetMonth: ''
      });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-12">
      <div className="container flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Column */}
        <div className="w-full md:w-3/5 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Crack the GMAT—on a schedule that works for you.
            </h1>
            <p className="text-xl text-gray-600">
              Personalised strategy • Flexible timetable • Proven 99ᵗʰ‑percentile techniques
            </p>
          </div>

          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-6 w-6 text-primary mr-2 mt-0.5" />
              <span className="text-lg">95% success rate across 30k+ students</span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-primary mr-2 mt-0.5" />
              <span className="text-lg">Guidance from Arun Jagannathan, India's GMAT authority</span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-primary mr-2 mt-0.5" />
              <span className="text-lg">Fast-Track study plan delivered instantly</span>
            </li>
          </ul>

          <blockquote className="italic text-lg border-l-4 border-primary pl-4 py-2">
            "GMAT success isn't magic; it's a skill-set anyone can master with the right playbook."
            <footer className="text-gray-600 mt-2">— Arun Jagannathan, Founder & 770 scorer</footer>
          </blockquote>
        </div>

        {/* Right Column - Form */}
        <div className="w-full md:w-2/5">
          <div className="bg-white rounded-xl shadow-xl p-6">
            <h3 className="text-xl font-bold mb-4">Get your custom 8-week Fast-Track Plan</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {formStep === 1 ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="workExperience">Work Experience</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange('workExperience', value)}
                      value={formData.workExperience}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select years of experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="targetMonth">Target Test Month</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange('targetMonth', value)}
                      value={formData.targetMonth}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="When do you plan to take the test?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1month">Within 1 month</SelectItem>
                        <SelectItem value="2-3months">2-3 months</SelectItem>
                        <SelectItem value="4-6months">4-6 months</SelectItem>
                        <SelectItem value="6+months">6+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 mt-2">
                {formStep === 1 ? (
                  <span className="flex items-center">
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                ) : (
                  "Send My Study Plan"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
