import React from 'react';
import WelcomeSection from '../section/Welcome';
import MyJobSection from '../section/MyJob';
import LastProjectsSection from '../section/LastProjects';

const Home = () => {
  return (
    <div>
      <WelcomeSection
        title='Dimitri Vildina'
        subtitle='I create & build digital solution'
      />
      <MyJobSection />
      <LastProjectsSection />
    </div>
  );
};

export default Home;