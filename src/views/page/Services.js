import React, {useEffect} from 'react';
import WelcomeSection from '../section/Welcome';
import ServicesSection from '../section/Services';
import Skills from '../section/Skills';

const Services = () => {
  return (
    <div>
      <WelcomeSection
        title='Dimitri Vildina'
        subtitle="I am committed to defining for you, maintainable digital solutions, scalable, efficient and secure to better meet your needs. <br></br> Thanks to the variety and versatility of our talented employees, we can intervene and follow from A to Z on all your projects.Let's do it!"
        isServices='true'
      />
      <ServicesSection />
      <Skills />
    </div>
  );
};

export default Services;