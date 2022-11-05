import React from 'react';
import { Link } from "react-router-dom";
import ChevronRightIcon from '../icon/ChevronRight';

const MyJob = () => {
  return (
    <div className={"panel s-myJob"}>
      <div className='container'>
        <div className="s-myJob-left">
          <h3 className='ui-h1 is-medium'><hr></hr>My job</h3>
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
