import React from 'react';
import { useTranslation } from "react-i18next";
import WelcomeSection from '../section/Welcome';
import ServicesSection from '../section/Services';
import Skills from '../section/Skills';

const Services = () => {
  const {t} = useTranslation('common');

  return (
    <div>
      <WelcomeSection
        title='Dimitri Vildina'
        subtitle={t('page.services.welcome.subtitle')}
        subtitle2={t('page.services.welcome.subtitle2')}
        isServices='true'
      />
      <ServicesSection />
      <Skills />
    </div>
  );
};

export default Services;