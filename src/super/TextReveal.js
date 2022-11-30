import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const titleReveal = (trigger, item) => {
  const animateIn = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      toggleActions: "play none none reverse",
    }
  });

  animateIn.fromTo(item, {
    y: 100,
    skewY: 7
  }, {
    y: 0, 
    skewY: 0,
    duration: 1,
    stagger: {
      amount: 0.3
    }
  });
}

export const textReveal = (trigger, item) => {
  const animateIn = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      toggleActions: "play none none reverse",
    }
  });

  animateIn.fromTo(item, {
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
}