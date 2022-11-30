import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { textReveal, titleReveal } from '../../super/TextReveal';
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChevronRightIcon from '../icon/ChevronRight';

gsap.registerPlugin(ScrollTrigger);

const MyJob = () => {

  useEffect(() => {
    titleReveal('.js-s-myJob', '.s-myJob .js-textReveal-text span');
    textReveal('.js-s-myJob', '.js-s-myJob-text');
  });

  return (
    <div className={"s-myJob js-textReveal-trigger js-s-myJob"}>
      <div className='container'>
        <div className="s-myJob-left">
          <h3 className='s-myJob-title ui-h1 is-medium js-textReveal-text' data-text='My job'>
            <hr></hr>
            <span>My job</span>
          </h3>
          <p className='s-myJob-text js-s-myJob-text'>
          My job is not to create pretty web concepts that are similar to
          you, our job is also to make sure your product is online is more
          efficient, secure and more scalable possible. Your product must
          convert. Your product must differentiate you. That's where we come
          in.
          </p>
        </div>
        <div className="s-myJob-right js-s-myJob-text">
          <Link className='s-myJob-link' to={'/contact'}>
            Contact us
            <ChevronRightIcon class="s-myJob-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyJob;
