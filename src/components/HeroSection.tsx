
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
      if (!formData.phone) {
        alert("Please enter your phone number");
        return;
      }
      setFormStep(2);
    } else {
      // Form submission logic
      console.log('Form submitted:', formData);
      alert("Thank you! Your study plan will be sent shortly.");
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
              Master the GMAT with Personalized Strategy
            </h1>
            <p className="text-xl text-gray-600">
              99th-percentile techniques • Flexible learning • Proven results
            </p>
          </div>

          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-6 w-6 text-primary mr-2 mt-0.5" />
              <span className="text-lg">30k+ Students Trained</span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-primary mr-2 mt-0.5" />
              <span className="text-lg">Mentored by GMAT Experts</span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-primary mr-2 mt-0.5" />
              <span className="text-lg">Instant Study Plan</span>
            </li>
          </ul>

          <div className="flex items-start space-x-4">
            <img 
              src="/lovable-uploads/97a4aab2-c4be-41e0-aca9-88e011385c1f.png" 
              alt="Arun Jagannathan" 
              className="w-16 h-16 rounded-full object-cover" 
            />
            <blockquote className="italic text-lg">
              "GMAT success is a learnable skill."
              <footer className="text-gray-600 not-italic mt-1">— Arun Jagannathan</footer>
            </blockquote>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full md:w-2/5">
          <div className="bg-white rounded-xl shadow-xl p-6">
            <h3 className="text-xl font-bold mb-4">Get Your Fast-Track Plan</h3>
            
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
                    <Label htmlFor="phone">Phone <span className="text-primary">*</span></Label>
                    <Input 
                      id="phone"
                      name="phone"
                      required
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

