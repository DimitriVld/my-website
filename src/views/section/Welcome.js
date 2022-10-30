import React from 'react';
import LogoIcon from '../icon/Logo';

const WelcomeSection = (props) => {
  return (
    <div className={`s-welcome height-100-vh home ${props.services ? 'services' : ''} ${props.about ? 'about' : ''}`}>
      <div className="container">
        <LogoIcon class='s-welcome-logo' />
        <h1 className='s-welcome-title ui-h1'>{props.title}</h1>
        <p className='s-welcome-subtitle ui-h1 is-big'>{props.subTitle}</p>
        <p className="s-welcome-scroll">Scroll</p>
      </div>
    </div>
  )
}

export default WelcomeSection;
