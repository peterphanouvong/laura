import React, { useEffect } from "react";
import gsap from "gsap";

const HomeName = ({ name }) => {
  useEffect(() => {
    const t1 = gsap.timeline();

    t1.fromTo(
      ".p-home__name",
      {
        delay: 0,
        duration: 1.3,
        opacity: 0,
        ease: "power3.out",
        y: 100,
      },
      {
        y: 0,
        opacity: 0.2,
      }
    );
  }, [name]);

  return (
    <div className="p-home__name-container">
      <h1 className="p-home__name">{name}</h1>
    </div>
  );
};

export { HomeName };
