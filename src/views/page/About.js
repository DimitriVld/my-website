import React from 'react';
import WelcomeSection from '../section/Welcome';
import CultureSection from '../section/Culture';
import VisionSection from '../section/Vision';
import ContactSection from '../section/Contact';

const About = () => { 

  return (
    <div>
      <WelcomeSection 
      title='Dimitri Vildina'
      subtitle='know everything about us'
      isAbout='true'
      />
      <CultureSection />
      <VisionSection />
      <ContactSection />
    </div>
  );
};

export default About;