import gsap from "gsap";

const initialDelay = 1.5;

const navigationIn = () => {
  const t1 = gsap.timeline();
  t1.from(".p-home__navigation", {
    delay: initialDelay + 1.2,
    duration: 1.3,
    opacity: 0,
    ease: "power3.out",
  });
};

const initialNameIn = () => {
  const t1 = gsap.timeline();
  t1.from(".p-home__name-container", {
    delay: initialDelay + 1.2,
    duration: 1.3,
    opacity: 0,
    ease: "power3.out",
    y: 100,
  });
};

const homeTitleZip = () => {
  const t1 = gsap.timeline();
  t1.to(".p-home__title-container", {
    delay: initialDelay + 0.3,
    duration: 1,
    width: 0,
    marginLeft: 0,
    transformOrigin: "center",
    ease: "power3.out",
  });
};

const imageIn = (index, width, length) => {
  const t1 = gsap.timeline();
  t1.fromTo(
    `.p-home__image-${index}`,
    {
      y: "-50%",
      x: -(
        (width - window.innerWidth) / 2 +
        (width + (window.innerWidth - width * length) / (length - 1)) * index
      ),
    },
    {
      delay: initialDelay,
      duration: 1.6,
      ease: "power3.out",
      y: "-50%",
      x: 0,
    }
  );
};

const imageRotate = (index, length) => {
  const t1 = gsap.timeline();
  t1.to(`.p-home__image-${index}`, {
    delay: initialDelay + 1.2,
    duration: 1.5,
    rotation: ((index % 2) - 0.5) * (length - index) * (length - index) * 0.75,
    transformOrigin: "50% 50%",
    y: "-50%",
    x: 0,
    ease: "power3.out",
  });
};

const brighten = () => {
  const t1 = gsap.timeline();
  t1.to("#home__darken-overlay", {
    delay: initialDelay + 1.2,
    duration: 2,
    opacity: 0,
    ease: "power3.out",
  }).set("#home__darken-overlay", {
    delay: -0.5,
    zIndex: 0,
  });
};

export const homeAnimations = {
  navigationIn,
  initialNameIn,
  homeTitleZip,
  imageIn,
  imageRotate,
  brighten,
};
