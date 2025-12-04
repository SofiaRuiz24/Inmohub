import React from "react";
import {
  Navbar,
  AboutHero,
  EfficiencySection,
  HowItWorks,
  StatsSection,
  TeamSection,
  TestimonialsSection,
  ContactSection,
  Footer,
} from "../organisms";

export const AboutTemplate: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <EfficiencySection />
      <HowItWorks />
      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
