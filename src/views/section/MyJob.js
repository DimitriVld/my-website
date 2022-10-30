import React from 'react';
import { Link } from "react-router-dom";
import ArrowRightIcon from '../icon/ArrowRight';

const MyJob = () => {
  return (
    <div className={"s-section"}>
      <div className='container'>
        <div className="s-section-left">
          <h3 className='ui-h1 is-medium'><hr></hr>Our job</h3>
          <p>
          Our job is not to create pretty web concepts that are similar to
          you, our job is also to make sure your product is online is more
          efficient, secure and more scalable possible. Your product must
          convert. Your product must differentiate you. That's where we come
          in.
          </p>
        </div>
        <div className="s-section-right">
          <Link to={'/contact'}>
            Contact us
            <ArrowRightIcon class="s-section-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyJob;
