import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { textReveal } from '../../super/TextReveal';
import AppContext from '../../context/AppContext';
import Desktop from '../icon/Desktop';

gsap.registerPlugin(ScrollTrigger);

const LastProjects = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    textReveal('.s-lastProjects.js-textReveal-trigger', '.s-lastProjects .js-textReveal-text span');
    imgReveal();
  });

  const imgReveal = () => {
    const item = document.querySelectorAll('.s-lastProjects-item');

    item.forEach(element => {
      const imgOverlay = element.querySelector('.s-lastProjects-imgOverlay');

      const animateIn = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top center",
          markers: "true",
          toggleActions: "play none none reverse",
        }
      });
    
      animateIn.fromTo(imgOverlay, {
        skewX: 30, 
        scale: 1.5
      }, {
        skewX: 0, 
        xPercent: 100, 
        transformOrigin: "0% 100%", 
        ease: "power4",
        duration: 2,                                               
      });
    })
  }

  return (
    <div className={"s-lastProjects js-textReveal-trigger"}>
      <div className={'container'}>
        <h3 className='s-lastProjects-title ui-h1 is-medium js-textReveal-text' data-text='My last works'>
          <hr></hr>
          <span>My last works</span>
        </h3>
        <ul className='s-lastProjects-list'>
          {context && context.map((project, index) => (
            <div key={index} className={`s-lastProjects-itemWrapper display-f-c ${index > 2 ? 'display-n' : ''}`}>
              <li className={`s-lastProjects-item`}>
                <div className="s-lastProjects-bg"></div>
                <div className="s-lastProjects-infos">
                  <Link to={`/project/${project.id}`} className="s-lastProjects-itemTitle ui-h1">
                      <h4><hr></hr>{project.attributes.Title}</h4>
                  </Link>
                  <Link to={project.attributes.Link} className="s-lastProjects-imgWrapper position-r overflow-h">
                    <div className='s-lastProjects-imgOverlay'></div>
                    <Desktop img={project.attributes.Preview.data.attributes.url}/>
                  </Link>
                </div>

                <div className="s-lastProjects-description">
                  <p>{project.attributes.Intro}</p>
                  <Link className='ui-button' to={`/project/${project.id}`}>Discover</Link>
                </div>
              </li>
            </div>
          ))}
        </ul>

        <Link className='s-lastProjects-btn ui-button' to={'/projects'}>View all projects</Link>
      </div>
    </div>
  );
}

export default LastProjects;
