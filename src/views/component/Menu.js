import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Menu = (props) => {
  const {t} = useTranslation('common');

  return(
    <div className={'c-menu'} >
      <nav className='c-menu-nav'>
        <Link to='/' className={'c-menu-link ui-h1 js-cursor-pointer'} onClick={() => props.funcToggleMenu()}><span>01</span>{t('menu.homepage')}</Link>
        <Link to='/projects' className={'c-menu-link ui-h1 js-cursor-pointer'} onClick={() => props.funcToggleMenu()}><span>02</span>{t('menu.projects')}</Link>
        <Link to='/services' className={'c-menu-link ui-h1 js-cursor-pointer'} onClick={() => props.funcToggleMenu()}><span>03</span>{t('menu.services')}</Link>
        <Link to='/about' className={'c-menu-link ui-h1 js-cursor-pointer'} onClick={() => props.funcToggleMenu()}><span>04</span>{t('menu.about')}</Link>
        <Link to='/contact' className={'c-menu-link ui-h1 js-cursor-pointer'} onClick={() => props.funcToggleMenu()}><span>05</span>{t('menu.contact')}</Link>
      </nav>
    </div>
  )
}

export default Menu;