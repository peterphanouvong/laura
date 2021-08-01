import React, { useEffect, useState } from "react";
import gsap from "gsap";

import "./Home.css";
import img5 from "../../static/images/daydream.jpeg";
import img4 from "../../static/images/lovefool.jpeg";
import img3 from "../../static/images/snake-eyes.jpeg";
import img2 from "../../static/images/little-missy.jpeg";
import img1 from "../../static/images/sweet-treat.jpeg";
import { HomeImage } from "./HomeImage";
import { HomeName } from "./HomeName";

const Home = () => {
  const [images, setImages] = useState([
    { src: img1, name: "Sweet Treat", color: "#D3A17D" },
    { src: img2, name: "Little Missy", color: "#794442" },
    { src: img3, name: "Snake Eyes", color: "#382C1F" },
    { src: img4, name: "Lovefool", color: "#946E41" },
    { src: img5, name: "Daydream", color: "#A96955" },
  ]);

  useEffect(() => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();

    t1.from(".p-home__navigation", {
      delay: 2.4,
      duration: 1.3,
      opacity: 0,
      ease: "power3.out",
    });
    t2.from(".p-home__name-container", {
      delay: 2.4,
      duration: 1.3,
      opacity: 0,
      ease: "power3.out",
      y: 100,
    });
    images.forEach((_, i) => {
      t1.to(`.p-home__image-${i}`, {
        delay: -1.5,
        duration: 1.5,
        rotation:
          ((i % 2) - 0.5) * (images.length - i) * (images.length - i) * 0.75,
        transformOrigin: "50% 50%",
        ease: "power3.out",
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePrevious = () => {
    const length = images.length;
    setImages([...images.splice(1, length), images[0]]);
  };

  const handleNext = () => {
    const t1 = gsap.timeline();

    t1.to(".p-home__name", {
      duration: 0.5,
      y: -500,
    });

    const length = images.length;
    setTimeout(() => {
      setImages([images[length - 1], ...images.splice(0, length - 1)]);
    }, 350);
  };

  return (
    <>
      <div className="p-home-grain"></div>
      <div
        className="p-home"
        style={{ background: images[images.length - 1].color }}
      >
        <div className="p-home__image-wrapper">
          {images.map((i, index) => {
            return (
              <HomeImage
                length={images.length}
                key={index}
                index={index}
                img={i.src}
              />
            );
          })}
        </div>
        <div className="p-home__navigation">
          <span className="p-home__navigation__prev" onClick={handlePrevious}>
            PREV
          </span>
          <span className="p-home__navigation__next" onClick={handleNext}>
            NEXT
          </span>
        </div>
        <HomeName name={images[images.length - 1].name} />
      </div>
    </>
  );
};

export { Home };
