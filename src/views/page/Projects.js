import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import AppContext from '../../context/AppContext';
import Desktop from '../icon/Desktop';
import LogoIcon from '../icon/Logo';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => { 
  const {t} = useTranslation('common');
  const context = useContext(AppContext)

  useEffect(() => {
    projectReveal();
  });

  const projectReveal = () => {
    gsap.defaults({ease: "power3"});
    gsap.set(".p-projects-item", {y: 100});

    ScrollTrigger.batch(".p-projects-item", {
      onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 2]}, overwrite: true}),
      onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true}),
      onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
      onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
    });
  }

  return (
    <div className='p-projects'>
      <div className='container'>
        <LogoIcon class='p-projects-logo' />
        <h1 className='ui-h1'>{t('page.projects.title')}</h1>
        <ul className='p-projects-list'>
          {context && context.map((project) => (
            <li className="p-projects-item cursor-p" key={project.id}>
              <Link to={`/project/${project.id}`} className="p-projects-imgWrapper">
                <Desktop img={project.attributes.Preview.data.attributes.url}/>
                <div className='p-projects-itemInfos'>
                  <p className='p-projects-itemTitle'>{project.attributes.Title}</p>
                  <p className='p-projects-itemType'>{project.attributes?.Type}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;