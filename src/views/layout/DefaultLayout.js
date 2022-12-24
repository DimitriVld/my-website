import React, { useState } from 'react';
import { gsap } from "gsap/all";
import Header from '../component/Header';
import Menu from '../component/Menu';
import Cursor from '../component/Cursor';

const DefaultLayout = (props) => {
  const [tlMenu, setTlMenu] = useState(null)
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const showMenu = () => {
    const menuElement = document.querySelector(".c-menu");
    const menuLinks = document.querySelectorAll(".c-menu-link");
    const menuLinksArr = Array.from(menuLinks);

    setTlMenu(
      gsap.timeline()
      .to(menuElement, .4, { width: '100%', ease: "expo"})
      .staggerTo(menuLinksArr, .6, {opacity: 0.4, transform: 'translateX(0)'}, 0.2)
    )
  }

  const toggleMenu = () => {
    menuIsVisible ? tlMenu.reverse() : showMenu();
    setMenuIsVisible(!menuIsVisible);
    document.querySelector('.c-header-burgerIcon').classList.toggle('is-active');
  }
  return (
    <div className={"default-layout"}>
      <Cursor />
      <Header funcToggleMenu={toggleMenu} />
      <Menu funcToggleMenu={toggleMenu} />
      <main className={"main-content"}>{props.page}</main>
    </div>
  );
}

export default DefaultLayout;