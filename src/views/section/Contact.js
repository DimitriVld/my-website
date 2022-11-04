import React from 'react';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '../icon/ChevronRight';

const Vision = () => {
  return (
    <div className={'s-contact'}>
      <div className='container'>
        <h3 className='ui-h1'>Work with me</h3>
        <h4 className='ui-h1 is-medium'>Let’s work together to build something great.</h4>
        <Link className='s-contact-link' to={'/contact'}>
          <span>Contact us</span>
          <ChevronRightIcon />
        </Link>
      </div>
    </div>
);
}

export default Vision;
