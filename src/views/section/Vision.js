import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { textReveal } from '../../super/TextReveal';

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    textReveal('.s-vision.js-textReveal-trigger', '.s-vision .js-textReveal-text span');
    sectionReveal();
  });

  const sectionReveal = () => {
    const animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: '.s-vision',
        start: "top center",
        toggleActions: "play none none reverse",
      }
    });

    animateIn.fromTo(
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

    animateIn.fromTo(
      '.js-s-vision-description',
      { x: 100, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.3
      }
    );

    animateIn.fromTo(
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
          <h3 className='ui-h1 is-medium js-textReveal-text' data-text='My vision'>
            <span>My vision</span>
          </h3>
          <img className="icon" src="./images/devices_other-2.svg" alt="icon" />
          <p className='js-s-vision-btn'>Design cross device</p>
        </div>

        <div className='description js-s-vision-description'>
          <p>Curious and passionate about new technologies and technical issues, we would make a large network of talented people to create and build high quality digital solutions to meet your needs. Do not hesitate to challenge us, we will love to accompany you!</p>
        </div>
      </div>
    </div>
);
}

export default Vision;
