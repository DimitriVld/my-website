import React, { useState, useEffect } from 'react';
import { gsap } from "gsap/all";
import Header from '../component/Header';
import Menu from '../component/Menu';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DefaultLayout = (props) => {
  const [tlMenu, setTlMenu] = useState(null)
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: ".js-page-animate-on-scroll"
    });
  }, []);

  const showMenu = () => {
    const menuElement = document.querySelector(".c-menu");
    const menuLinks = document.querySelectorAll(".c-menu-link");
    const menuLinksArr = Array.from(menuLinks);

    setTlMenu(
      gsap.timeline()
      .to(menuElement, .5, {bottom: 0})
      .to(menuElement, .6, { width: '100%', ease: "expo"})
      .staggerTo(menuLinksArr, .8, {opacity: 0.4, transform: 'translateX(0)'}, 0.2)
    )
  }

  const toggleMenu = () => {
    menuIsVisible ? tlMenu.reverse() : showMenu();
    setMenuIsVisible(!menuIsVisible);
    document.querySelector('.c-header-burgerIcon').classList.toggle('is-active');
  }
  return (
    <div className={"default-layout"}>
      <Header funcToggleMenu={toggleMenu} />
      <Menu funcToggleMenu={toggleMenu} />
      <main className={"main-content"}>{props.page}</main>
    </div>
  );
}

export default DefaultLayout;