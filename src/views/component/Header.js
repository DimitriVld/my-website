import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import  { gsap } from "gsap";
import LogoIcon from '../icon/Logo';
import BurgerIcon from '../icon/Burger';

const Header = () => {
  const [tlMenu, setTlMenu] = useState(null)
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const showMenu = () => {
    const menuElement = document.querySelector(".c-menu");
    const menuLinks = document.querySelectorAll(".c-menu-link");
    const menuLinksArr = Array.from(menuLinks);

    setTlMenu(
      gsap.timeline()
      .to(menuElement, .5, {bottom: 0})
      .to(menuElement, .6, { width: '100%', ease: "expo"})
      .staggerTo(menuLinksArr, .7, {opacity: 1, transform: 'translateX(0)'}, 0.2)
    )
  }

  const toggleMenu = () => {
    menuIsVisible ? tlMenu.reverse() : showMenu();
    setMenuIsVisible(!menuIsVisible);
    document.querySelector('.c-header-burgerIcon').classList.toggle('is-active');
  }

  return (
    <div className={"c-header"}>
      <div className='container'>
        <Link to={'/'}>
          <LogoIcon class='s-header-logo' />
        </Link>

        <div className="c-header-burger cursor-p" onClick={() => toggleMenu()}>
          <BurgerIcon class='c-header-burgerIcon'/>
        </div>
      </div>
    </div>
  )
}

export default Header;