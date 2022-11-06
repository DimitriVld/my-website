import React from 'react';
import WelcomeSection from '../section/Welcome';
import MyJobSection from '../section/MyJob';
import LastProjectsSection from '../section/LastProjects';

const Home = () => { 

  return (
    <div className='js-page-animate-on-scroll'>
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