import React from 'react';
import WelcomeSection from '../section/Welcome';

const Services = () => { 

  return (
    <div>
      <WelcomeSection
        title='Dimitri Vildina'
        subTitle={["At AD. Agency, We are committed to defining for you, maintainable digital solutions, scalable, efficient and secure to better meet your needs.",  <br></br>,  <br></br>, "Thanks to the variety and versatility of our talented employees, we can intervene and follow from A to Z on all your projects.Let's do it!"]}
        services='true'
      />
    </div>
  );
};

export default Services;