import React from 'react';
import { useTranslation } from "react-i18next";
import WelcomeSection from '../section/Welcome';
import CultureSection from '../section/Culture';
import VisionSection from '../section/Vision';
import ContactSection from '../section/Contact';

const About = () => { 
  const {t} = useTranslation('common');

  return (
    <div>
      <WelcomeSection 
      title='Dimitri Vildina'
      subtitle={t('page.about.welcome.subtitle')}
      isAbout='true'
      />
      <VisionSection />
      <CultureSection />
      <ContactSection />
    </div>
  );
};

export default About;