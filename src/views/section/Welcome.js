import React, { useEffect } from 'react';
import { textReveal } from '../../super/TextReveal';
import LogoIcon from '../icon/Logo';

const WelcomeSection = (props) => {

  useEffect(() => {
    textReveal('.s-welcome.js-textReveal-trigger', '.s-welcome .js-textReveal-text span');
  });

  return (
    <div className={`s-welcome height-100-vh home ${props.isServices ? 'services' : ''} ${props.isAbout ? 'about' : ''} js-textReveal-trigger`}>
      <div className="container">
        <LogoIcon class='s-welcome-logo' />
        <div className='s-welcome-title ui-h1 js-textReveal-text' data-text={props.title}>
          <span>{props.title}</span>
        </div>
        <p className='s-welcome-subtitle ui-h1 is-big js-textReveal-text' data-text={props.subtitle}>
          <span>
            {props.subtitle}
          </span>
        </p>
        <p className="s-welcome-scroll">Scroll</p>
      </div>
    </div>
  )
}

export default WelcomeSection;
