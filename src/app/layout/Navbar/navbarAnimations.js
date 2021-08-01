import gsap from "gsap";

// const initialDelay = 1.5;

const navbarIn = () => {
  const t1 = gsap.timeline();
  t1.from([".navbar", ".navbar__hamburger"], {
    opacity: 0,
    delay: 1.5 + 1.2,
    duration: 1.5,
    y: -50,
    ease: "power3.out",
  });
};

const showSideBar = () => {
  const t1 = gsap.timeline();
  const t2 = gsap.timeline();
  const t3 = gsap.timeline();
  t1.to(".sidebar", {
    duration: 1,
    left: 0,
    ease: "power3.out",
  });

  t2.to(".navbar__hamburger-line-1", {
    rotate: "45deg",
    duration: 1,
    transform: "translateY(4px)",
    ease: "power3.out",
  });
  t3.to(".navbar__hamburger-line-2", {
    rotate: "-45deg",
    duration: 1,
    transform: "translateY(-4px)",
    ease: "power3.out",
  });
};

const hideSideBar = () => {
  const t1 = gsap.timeline();
  const t2 = gsap.timeline();
  const t3 = gsap.timeline();

  t1.to(".sidebar", {
    duration: 1,
    left: "-100vw",
    ease: "power3.out",
  });

  t2.to(".navbar__hamburger-line-1", {
    rotate: "0",
    duration: 1,
    transform: "translateY(0)",
    ease: "power3.out",
  });
  t3.to(".navbar__hamburger-line-2", {
    rotate: "0",
    duration: 1,
    transform: "translateY(0)",
    ease: "power3.out",
  });
};

export const navbarAnimations = {
  navbarIn,
  showSideBar,
  hideSideBar,
};
