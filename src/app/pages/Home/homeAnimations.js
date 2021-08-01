import gsap from "gsap";

const navigationIn = () => {
  const t1 = gsap.timeline();
  t1.from(".p-home__navigation", {
    delay: 2.4,
    duration: 1.3,
    opacity: 0,
    ease: "power3.out",
  });
};

const initialNameIn = () => {
  const t1 = gsap.timeline();
  t1.from(".p-home__name-container", {
    delay: 2,
    duration: 1.3,
    opacity: 0,
    ease: "power3.out",
    y: 100,
  });
};

const homeTitleZip = () => {
  const t1 = gsap.timeline();
  t1.to(".p-home__title-container", {
    delay: 1,
    duration: 1,
    width: 0,
    marginLeft: 0,
    transformOrigin: "center",
  });
};

export const homeAnimations = {
  navigationIn,
  initialNameIn,
  homeTitleZip,
};
