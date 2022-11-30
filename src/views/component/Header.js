import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import LogoIcon from '../icon/Logo';
import BurgerIcon from '../icon/Burger';
import LinkedinIcon from '../icon/Linkedin';
import EmailIcon from '../icon/Email';

const Header = (props) => {
  const [t, i18n] = useTranslation('common');

  return (
    <div className={"c-header"}>
      <div className='container is-large'>
        <Link to={'/'}>
          <LogoIcon class='s-header-logo' />
        </Link>

        <div className='c-header-btnWrap'>
          <div>
            <button onClick={() => i18n.changeLanguage('fr')}>fr</button> /
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
          </div>
          <a href="mailto:contact@dimitri-dev.com" className='c-header-btn is-white js-cursor-ponter'>
            <EmailIcon />
          </a>
          <a href='https://www.linkedin.com/in/dimitrivildina/' className='c-header-btn is-white js-cursor-ponter'>
            <LinkedinIcon />
          </a>

          <div className="c-header-btn cursor-p" onClick={() => props.funcToggleMenu()}>
            <BurgerIcon class='c-header-burgerIcon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;