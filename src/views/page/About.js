import React from 'react';
import WelcomeSection from '../section/Welcome';
import CultureSection from '../section/Culture';

const About = () => { 

  return (
    <div>
      <WelcomeSection 
      title='Dimitri Vildina'
      subtitle='know everything about us'
      isAbout='true'
      />
      <CultureSection />
    </div>
  );
};

export default About;