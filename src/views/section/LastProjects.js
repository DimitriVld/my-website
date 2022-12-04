import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { gsap } from "gsap/all";
import axios from 'axios';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { titleReveal } from '../../super/TextReveal';
import AppContext from '../../context/AppContext';
import Desktop from '../icon/Desktop';

gsap.registerPlugin(ScrollTrigger);

const LastProjects = () => {
  const [lastProjects, setLastProjects] = useState(null);
  const {t} = useTranslation('common');
  const context = useContext(AppContext);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/projects?populate=*&locale=${t('lang')}`)
      .then((response) => setLastProjects(response.data.data))
      .catch(() => {return ;})
      .finally(() => {return ;});
  }, [context]);

  useEffect(() => {
    titleReveal('.js-s-lastProjects', '.s-lastProjects .js-textReveal-text span');
    imgReveal();
    infoReveal();
  });

  const imgReveal = () => {
    const item = document.querySelectorAll('.s-lastProjects-item');

    item.forEach(element => {
      const imgOverlay = element.querySelector('.s-lastProjects-imgOverlay');

      const animateIn = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top center",
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

  const infoReveal = () => {
    const item = document.querySelectorAll('.s-lastProjects-item');

    item.forEach(element => {
      const text = element.querySelector('.js-s-lastProjects-text');

      const animateIn = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top center",
          toggleActions: "play none none reverse",
        }
      });
    
      animateIn.fromTo(text, {
        y: 50,
        opacity: 0
      }, {
        y: 0, 
        opacity: 1,
        duration: .5,
        stagger: {
          amount: 0.3
        }
      });
    })
  }

  return (
    <div className={"s-lastProjects js-s-lastProjects"}>
      <div className={'container'}>
        <h3 className='s-lastProjects-title ui-h1 is-medium js-textReveal-text' data-text={t('section.lastProjects.title')}>
          <hr></hr>
          <span>{t('section.lastProjects.title')}</span>
        </h3>
        <ul className='s-lastProjects-list'>
          {lastProjects && lastProjects.map((project, index) => (
            <div key={index} className={`s-lastProjects-itemWrapper display-f-c ${index > 2 ? 'display-n' : ''}`}>
              <li className={`s-lastProjects-item`}>
                <div className="s-lastProjects-bg"></div>
                <div className="s-lastProjects-infos">
                  <Link to={`/project/${project.attributes.projectId}`} className="s-lastProjects-itemTitle ui-h1 js-s-lastProjects-text js-cursor-pointer">
                      <h4><hr></hr>{project.attributes.Title}</h4>
                  </Link>
                  <Link to={project.attributes.Link} className="s-lastProjects-imgWrapper position-r overflow-h js-cursor-pointer">
                    <div className='s-lastProjects-imgOverlay'></div>
                    <Desktop img={project.attributes.Preview.data.attributes.url}/>
                  </Link>
                </div>

                <div className="s-lastProjects-description">
                  <p className='js-s-lastProjects-text'>{project.attributes.Intro}</p>
                  <Link className='ui-button js-s-lastProjects-text js-cursor-pointer' to={`/project/${project.id}`}>{t('section.lastProjects.discover')}</Link>
                </div>
              </li>
            </div>
          ))}
        </ul>

        <Link className='s-lastProjects-btn ui-button js-cursor-pointer' to={'/projects'}>{t('section.lastProjects.button')}</Link>
      </div>
    </div>
  );
}

export default LastProjects;
