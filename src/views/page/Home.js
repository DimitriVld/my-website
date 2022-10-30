import React from 'react';
import WelcomeSection from '../section/Welcome';
import MyJob from '../section/MyJob';

const Home = () => { 

  return (
    <div>
      <WelcomeSection
        title='Dimitri Vildina'
        subTitle='I create & build digital solution'
      />
      <MyJob />
    </div>
  );
};

export default Home;