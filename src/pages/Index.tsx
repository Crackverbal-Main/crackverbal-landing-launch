
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import PersonaCards from '@/components/PersonaCards';
import WhySection from '@/components/WhySection';
import ResultsStrip from '@/components/ResultsStrip';
import ComparisonTable from '@/components/ComparisonTable';
import MentorshipBanner from '@/components/MentorshipBanner';
import SuccessStories from '@/components/SuccessStories';
import ProfileQuiz from '@/components/ProfileQuiz';
import FAQ from '@/components/FAQ';
import SmartTools from '@/components/SmartTools';
import ChatCTA from '@/components/ChatCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <PersonaCards />
        <WhySection />
        <ResultsStrip />
        <ComparisonTable />
        <MentorshipBanner />
        <SuccessStories />
        <ProfileQuiz />
        <FAQ />
        <SmartTools />
      </main>
      <ChatCTA />
      <Footer />
    </div>
  );
};

export default Index;
