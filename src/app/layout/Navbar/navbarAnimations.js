import gsap from "gsap";

// const initialDelay = 1.5;

const navbarIn = () => {
  const t1 = gsap.timeline();
  t1.from(".navbar", {
    opacity: 0,
    delay: 1.5 + 1.2,
    duration: 1.5,
    y: -50,
    ease: "power3.out",
  });
};

export const navbarAnimations = {
  navbarIn,
};
