import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { textReveal } from '../../super/TextReveal';
import ChevronRightIcon from '../icon/ChevronRight';

const Contact = () => {

  useEffect(() => {
    textReveal('.js-s-contact' , '.js-s-contact-text');
  });

  return (
    <div className={'s-contact js-s-contact'}>
      <div className='container'>
        <h3 className='ui-h1 js-s-contact-text'>Work with me</h3>
        <h4 className='ui-h1 is-medium js-s-contact-text'>Let’s work together to build something great.</h4>
        <Link className='s-contact-link' to={'/contact'}>
          <span>Contact us</span>
          <ChevronRightIcon />
        </Link>
      </div>
    </div>
);
}

export default Contact;
