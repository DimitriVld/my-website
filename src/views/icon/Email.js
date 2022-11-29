import React from 'react';

const EmailIcon = (props) => {
  return (
    <span  className={`${props.class ? props.class : ''}`}>
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m19 4c1.6569 0 3 1.34315 3 3v10c0 1.6569-1.3431 3-3 3h-14c-1.65685 0-3-1.3431-3-3v-10c0-1.65685 1.34315-3 3-3zm1 3.328-7.3415 6.4246c-.3456.3024-.8474.3276-1.2191.0756l-.0979-.0756-7.3415-6.4236v9.671c0 .5523.44772 1 1 1h14c.5523 0 1-.4477 1-1zm-1.52-1.328h-12.962l6.482 5.6712z" fill="currentColor" fill-rule="evenodd"/></svg>
    </span>
    );
  }
  
  export default EmailIcon;