import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return(
    <div className={'c-menu'} >
      <nav className='c-menu-nav'>
        <Link to='/' className={'c-menu-link ui-h1'} onClick={() => props.funcToggleMenu()}><span>01</span>Homepage</Link>
        <Link to='/projects' className={'c-menu-link ui-h1'} onClick={() => props.funcToggleMenu()}><span>02</span>My projects</Link>
        <Link to='/services' className={'c-menu-link ui-h1'} onClick={() => props.funcToggleMenu()}><span>03</span>My Services</Link>
        <Link to='/about' className={'c-menu-link ui-h1'} onClick={() => props.funcToggleMenu()}><span>04</span>About</Link>
        <Link to='/contact' className={'c-menu-link ui-h1'} onClick={() => props.funcToggleMenu()}><span>05</span>Contact</Link>
      </nav>
    </div>
  )
}

export default Menu;