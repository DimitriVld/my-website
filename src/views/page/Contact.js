import React from 'react';
import LogoIcon from '../icon/Logo';

const Contact = () => { 

  return (
    <div className='p-contact'>
      <div className='container'>
        <LogoIcon class='p-contact-logo' />
        <h1 className='p-contact-title ui-h1'>Send me a message !</h1>
        <p className='p-contact-text'>Got a question or proposal, or just want <br /> to say hello ? Go ahead.</p>
        <form>
          <div className='p-contact-inputGroup'>
            <fieldset className=''>
              <label className='display-b'>Label</label>
              <input className='p-contact-input' type='text' placeholder='input' />
            </fieldset>

            <fieldset className=''>
              <label className='display-b'>Label</label>
              <input className='p-contact-input' type='text' placeholder='input' />
            </fieldset>
          </div>
          <fieldset>
            <label className='display-b'>Label</label>
            <textarea className='p-contact-textarea'></textarea>
          </fieldset>

          <button className='p-contact-btn' type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;