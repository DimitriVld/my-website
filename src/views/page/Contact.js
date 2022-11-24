import React, {useRef} from 'react';
import LogoIcon from '../icon/Logo';
import emailjs from '@emailjs/browser';

const Contact = () => { 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_svyw3kh', 'template_skixf6g', form.current, 'eR_hjbquWE7Ffma_m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
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
            <fieldset className=''>
              <label className='display-b'>name</label>
              <input className='p-contact-input' name='name' type='text' placeholder='input'/>
            </fieldset>

            <fieldset className=''>
              <label className='display-b'>subject</label>
              <input className='p-contact-input' name='subject' type='text' placeholder='input' />
            </fieldset>

            <fieldset className=''>
              <label className='display-b'>email</label>
              <input className='p-contact-input' name='email' type='text' placeholder='input' />
            </fieldset>

            <fieldset className=''>
              <label className='display-b'>phone</label>
              <input className='p-contact-input' name='phone' type='text' placeholder='input' />
            </fieldset>
          </div>
          <fieldset>
            <label className='display-b'>message</label>
            <textarea className='p-contact-textarea' name='message'></textarea>
          </fieldset>

          <button className='p-contact-btn' type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;