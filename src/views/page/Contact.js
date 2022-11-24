import React, {useRef} from 'react';
import LogoIcon from '../icon/Logo';
import emailjs from '@emailjs/browser';

const Contact = () => { 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_svyw3kh', 'template_skixf6g', form.current, 'eR_hjbquWE7Ffma_m')
      .then((result) => {
        document.querySelector('.js-p-contact-btn').classList.add('is-valid');
        document.querySelector('.js-p-contact-btn').innerHTML = "it's ok";
      }, (error) => {
        document.querySelector('.js-p-contact-btn').classList.add('is-error');
        document.querySelector('.js-p-contact-btn').innerHTML = "it's not ok";
      });
  };

  return (
    <div className='p-contact'>
      <div className='container'>
        <LogoIcon class='p-contact-logo' />
        <h1 className='p-contact-title ui-h1'>Send me a message !</h1>
        <p className='p-contact-text'>Got a question or proposal, or just want <br /> to say hello ? Go ahead.</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className='p-contact-inputGroup'>
            <fieldset>
              <label className='p-contact-label display-b'>name</label>
              <input className='p-contact-input' name='name' type='text' placeholder='input'/>
            </fieldset>

            <fieldset>
              <label className='p-contact-label display-b'>subject</label>
              <input className='p-contact-input' name='subject' type='text' placeholder='input' />
            </fieldset>
          </div>
          <div className='p-contact-inputGroup'>
            <fieldset>
              <label className='p-contact-label display-b'>email</label>
              <input className='p-contact-input' name='email' type='text' placeholder='input' />
            </fieldset>

            <fieldset>
              <label className='p-contact-label display-b'>phone</label>
              <input className='p-contact-input' name='phone' type='text' placeholder='input' />
            </fieldset>
          </div>
          <fieldset>
            <label className='p-contact-label display-b'>message</label>
            <textarea className='p-contact-textarea' name='message' placeholder='Message'></textarea>
          </fieldset>

          <button className='p-contact-btn ui-button js-p-contact-btn' type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;