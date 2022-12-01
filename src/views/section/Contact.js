import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { textReveal } from '../../super/TextReveal';
import ChevronRightIcon from '../icon/ChevronRight';

const Contact = () => {
  const {t} = useTranslation('common');

  useEffect(() => {
    textReveal('.js-s-contact' , '.js-s-contact-text');
  });

  return (
    <div className={'s-contact js-s-contact'}>
      <div className='container'>
        <h3 className='ui-h1 js-s-contact-text'>{t('section.contact.title')}</h3>
        <h4 className='ui-h1 is-medium js-s-contact-text'>{t('section.contact.text')}</h4>
        <Link className='s-contact-link' to={'/contact'}>
          <span>{t('section.contact.link')}</span>
          <ChevronRightIcon />
        </Link>
      </div>
    </div>
);
}

export default Contact;
