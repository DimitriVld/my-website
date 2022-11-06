import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { textReveal } from '../../super/TextReveal';
import ChevronRightIcon from '../icon/ChevronRight';

const MyJob = () => {

  useEffect(() => {
    textReveal('.s-myJob.js-textReveal-trigger', '.s-myJob .js-textReveal-text span');
  });

  return (
    <div className={"s-myJob js-section-animate-on-scroll js-textReveal-trigger"}>
      <div className='container'>
        <div className="s-myJob-left">
          <h3 className='ui-h1 is-medium js-textReveal-text' data-text='--My job'><hr></hr>
            <span>My job</span>
          </h3>
          <p>
          My job is not to create pretty web concepts that are similar to
          you, our job is also to make sure your product is online is more
          efficient, secure and more scalable possible. Your product must
          convert. Your product must differentiate you. That's where we come
          in.
          </p>
        </div>
        <div className="s-myJob-right">
          <Link to={'/contact'}>
            Contact us
            <ChevronRightIcon class="s-myJob-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyJob;
