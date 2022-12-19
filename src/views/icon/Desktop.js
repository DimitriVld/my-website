import React from 'react';

const Desktop = (props) => {
  return (
    <span  className={`i-desktop ${props.class ? props.class : ''}`}>
      <svg width="655" height="398" viewBox="0 0 655 398" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="655" height="398" rx="5" fill="white"/>
        <rect x="1" y="1" width="653" height="396" rx="4" stroke="#424242" strokeOpacity="0.5" strokeWidth="2"/>
        <circle cx="25" cy="16" r="7" fill="white"/>
        <circle cx="25" cy="16" r="6" stroke="#424242" strokeOpacity="0.5" strokeWidth="2"/>
        <circle cx="61" cy="16" r="7" fill="white"/>
        <circle cx="61" cy="16" r="6" stroke="#424242" strokeOpacity="0.5" strokeWidth="2"/>
        <circle cx="43" cy="16" r="7" fill="white"/>
        <circle cx="43" cy="16" r="6" stroke="#424242" strokeOpacity="0.5" strokeWidth="2"/>
      </svg>

      <img src={`${props.img}`} alt="image" />
    </span>
  );
}

export default Desktop;