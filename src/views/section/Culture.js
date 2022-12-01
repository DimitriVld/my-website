import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { textReveal } from '../../super/TextReveal';

const Culture = () => {
  const {t} = useTranslation('common');

  useEffect(() => {
    textReveal('.js-s-culture' , '.js-s-culture-text');
  });

  return (
    <div className={'s-culture js-s-culture'}>
      <div className='container'>
        <h3 className='ui-h1 js-s-culture-text' dangerouslySetInnerHTML={{__html: t('section.culture.title')}}></h3>
        <div className='cultures'>
          <div className='culture'>
            <h4 className='js-s-culture-text'>{t('section.culture.performance.title')}</h4>
            <p className='js-s-culture-text'>{t('section.culture.performance.text')}</p>
          </div>
          <div className='culture'>
            <h4 className='js-s-culture-text'>{t('section.culture.maintenance.title')}</h4>
            <p className='js-s-culture-text'>{t('section.culture.maintenance.text')}</p>
          </div>
          <div className='culture'>
            <h4 className='js-s-culture-text'>{t('section.culture.security.title')}</h4>
            <p className='js-s-culture-text'>{t('section.culture.security.text')}</p>
          </div>
        </div>
      </div>
    </div>
);
}

export default Culture;
