import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../icon/Logo';
import BurgerIcon from '../icon/Burger';

const Header = (props) => {
  return (
    <div className={"c-header"}>
      <div className='container is-large'>
        <Link to={'/'}>
          <LogoIcon class='s-header-logo' />
        </Link>

        <div className="c-header-burger cursor-p" onClick={() => props.funcToggleMenu()}>
          <BurgerIcon class='c-header-burgerIcon'/>
        </div>
      </div>
    </div>
  )
}

export default Header;