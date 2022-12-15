import React, { useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { textReveal } from '../../super/TextReveal';

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  const {t} = useTranslation('common');
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    textReveal('.s-vision.js-textReveal-trigger', '.s-vision .js-textReveal-text span');
    sectionReveal();
  });

  const sectionReveal = () => {
    const animateInBg = gsap.timeline({
      scrollTrigger: {
        trigger: '.s-vision',
        start: "top center",
        toggleActions: "play none none reverse",
      }
    });

    animateInBg.fromTo(
      '.js-s-vision-bg',
      {
        autoAlpha: 0,
        clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"
      },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "power2",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      }
    );

    const animateInDesc = gsap.timeline({
      scrollTrigger: {
        trigger: '.s-vision',
        start: "top center",
        toggleActions: "play none none reverse",
      }
    });

    animateInDesc.fromTo(
      '.js-s-vision-description',
      { x: 100, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.3
      }
    );

    const animateInBtn = gsap.timeline({
      scrollTrigger: {
        trigger: '.s-vision',
        start: "top center",
        toggleActions: "play none none reverse",
      }
    });

    animateInBtn.fromTo(
      '.js-s-vision-btn',
      {
        autoAlpha: 0,
        clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"
      },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "power2",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      }
    );
  }

  return (
    <div ref={sectionRef} className={'s-vision js-textReveal-trigger'}>
      <div className='container'>
        <div ref={bgRef} className="bg js-s-vision-bg"></div>
        <div className='title'>
          <h3 className='ui-h1 is-medium js-textReveal-text' data-text={t('section.vision.title')}>
            <span>{t('section.vision.title')}</span>
          </h3>
          <img className="icon" src="./images/img-dv.jpg" alt="icon" />
          <a href='/' className='js-s-vision-btn'>{t('section.vision.info')}</a>
        </div>

        <div className='description js-s-vision-description'>
          <p>{t('section.vision.text')}</p>
        </div>
      </div>
    </div>
);
}

export default Vision;
