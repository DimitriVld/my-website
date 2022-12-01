import React from 'react';
import { useTranslation } from "react-i18next";
import WelcomeSection from '../section/Welcome';
import MyJobSection from '../section/MyJob';
import LastProjectsSection from '../section/LastProjects';

const Home = () => {
  const {t} = useTranslation('common');

  return (
    <div>
      <WelcomeSection
        title='Dimitri Vildina'
        subtitle={t('page.home.welcome.subtitle')}
      />
      <MyJobSection />
      <LastProjectsSection />
    </div>
  );
};

export default Home;