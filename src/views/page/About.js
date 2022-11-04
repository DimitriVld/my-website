import React from 'react';
import WelcomeSection from '../section/Welcome';
import CultureSection from '../section/Culture';
import VisionSection from '../section/Vision';

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
    </div>
  );
};

export default About;