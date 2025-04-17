
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "GMAT prep formats & pricing",
      answer: "We offer flexible formats including one-on-one coaching, group sessions, and online self-paced courses. Pricing starts at ₹25,000 for our basic package, with premium packages including personalized mentorship available at ₹75,000+"
    },
    {
      question: "How your approach is different",
      answer: "Unlike generic test prep, we focus on developing GMAT-specific thinking patterns and strategies personalized to your learning style. Our mentors are specialized in GMAT coaching with scores of 760+ and have helped thousands of students achieve significant score improvements."
    },
    {
      question: "Admissions consulting scope",
      answer: "Our admissions consulting covers school selection, application strategy, essay editing, interview preparation, and post-admission guidance. We work with you from GMAT preparation through to final school selection, providing a seamless experience."
    },
    {
      question: "Mentor credentials",
      answer: "All CrackVerbal mentors have scored 760+ on the GMAT and have helped at least 100 students improve their scores. Many have backgrounds from top MBA programs including Harvard, Stanford, Wharton, and INSEAD, bringing real-world insights to their coaching."
    },
    {
      question: "Do I need a GMAT score before essays?",
      answer: "While it's not mandatory to have your final GMAT score before starting essays, having at least a practice test score helps us better position your application. We recommend starting GMAT prep 3-6 months before application deadlines to allow time for both test prep and application work."
    },
    {
      question: "First step to get started",
      answer: "Book a free 15-minute consultation call with our team. We'll assess your current situation, discuss your goals, and recommend the most appropriate program. Alternatively, take our 3-minute readiness quiz to get a personalized recommendation."
    }
  ];

  return (
    <section id="faq" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
