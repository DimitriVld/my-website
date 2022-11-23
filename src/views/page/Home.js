import React, {useEffect} from 'react';
import WelcomeSection from '../section/Welcome';
import MyJobSection from '../section/MyJob';
import LastProjectsSection from '../section/LastProjects';
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => { 
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    if (document.querySelector(".js-page-animate-on-scroll")) {
      ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause",
        scroller: ".js-page-animate-on-scroll"
      });
    }
  }, []);
  return (
    <div className='js-page-animate-on-scroll'>
      <WelcomeSection
        title='Dimitri Vildina'
        subtitle='I create & build digital solution'
      />
      <MyJobSection />
      <LastProjectsSection />
    </div>
  );
};

export default Home;