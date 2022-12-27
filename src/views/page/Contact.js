import React, {useRef} from 'react';
import { useTranslation } from "react-i18next";
import LogoIcon from '../icon/Logo';
import emailjs from '@emailjs/browser';

const Contact = () => { 
  const {t} = useTranslation('common');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_svyw3kh', 'template_skixf6g', form.current, 'eR_hjbquWE7Ffma_m')
      .then((result) => {
        document.querySelector('.js-p-contact-btn').classList.add('is-valid');
        document.querySelector('.js-p-contact-btn').innerHTML = t('page.contact.message.valid');
      }, (error) => {
        document.querySelector('.js-p-contact-btn').classList.add('is-error');
        document.querySelector('.js-p-contact-btn').innerHTML = t('page.contact.message.error');
      });
  };

  return (
    <div className='p-contact'>
      <div className='container'>
        <LogoIcon class='p-contact-logo' />
        <h1 className='p-contact-title ui-h1'>{t('page.contact.title')}</h1>
        <p className='p-contact-text' dangerouslySetInnerHTML={{__html: t('page.contact.text')}}></p>
        <form ref={form} onSubmit={sendEmail}>
          <div className='p-contact-inputGroup'>
            <fieldset>
              <label className='p-contact-label display-b'>{t('page.contact.name.label')}*</label>
              <input className='p-contact-input' name='name' type='text' placeholder={t('page.contact.name.placeholder')} required/>
            </fieldset>

            <fieldset>
              <label className='p-contact-label display-b'>{t('page.contact.subject.label')}</label>
              <input className='p-contact-input' name='subject' type='text' placeholder={t('page.contact.subject.placeholder')} />
            </fieldset>
          </div>
          <div className='p-contact-inputGroup'>
            <fieldset>
              <label className='p-contact-label display-b'>{t('page.contact.email.label')}*</label>
              <input className='p-contact-input' name='email' type='text' placeholder={t('page.contact.email.placeholder')} required/>
            </fieldset>

            <fieldset>
              <label className='p-contact-label display-b'>{t('page.contact.phone.label')}</label>
              <input className='p-contact-input' name='phone' type='text' placeholder={t('page.contact.phone.placeholder')} />
            </fieldset>
          </div>
          <fieldset>
            <label className='p-contact-label display-b'>{t('page.contact.message.label')}*</label>
            <textarea className='p-contact-textarea' name='message' placeholder={t('page.contact.message.placeholder')} required></textarea>
          </fieldset>

          <button className='p-contact-btn ui-button js-p-contact-btn js-cursor-pointer' type='submit'>{t('page.contact.button')}</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;