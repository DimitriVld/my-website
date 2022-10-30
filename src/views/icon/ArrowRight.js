import React from 'react';

const ArrowRightIcon = (props) => {
  return (
    <span  className={`${props.class}`}>
      <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="-0.5" x2="14.1523" y2="-0.5" transform="matrix(0.706601 -0.707612 0.706601 0.707612 1 21.0287)" stroke="white"/>
        <line x1="1.35355" y1="0.646447" x2="11.3607" y2="10.6536" stroke="white"/>
      </svg>
    </span>
  );
}

export default ArrowRightIcon;