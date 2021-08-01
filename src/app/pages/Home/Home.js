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
import { homeAnimations } from "./homeAnimations";
import { Loader } from "../../layout/Loader/Loader";
import GrainOverlay from "../../layout/GrainOverlay/GrainOverlay";
import { DarkenOverlay } from "../../layout/DarkenOverlay/DarkenOverlay";
import { Background } from "../../layout/Background/Background";
import { Gallery } from "../Gallery/Gallery";

const Home = () => {
  const [images, setImages] = useState([
    { src: img1, name: "Sweet Treat", color: "#D3A17D" },
    { src: img2, name: "Little Missy", color: "#794442" },
    { src: img3, name: "Snake Eyes", color: "#382C1F" },
    { src: img4, name: "Lovefool", color: "#946E41" },
    { src: img5, name: "Daydream", color: "#A96955" },
  ]);

  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    homeAnimations.navigationIn();
    homeAnimations.initialNameIn();
    homeAnimations.homeTitleZip();
    homeAnimations.brighten();
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
    setImages([images[length - 1], ...images.splice(0, length - 1)]);
  };

  const incrementLoadedCount = () => {
    setLoadedCount(loadedCount + 1);
  };

  return (
    <>
      {loadedCount < images.length && (
        <Loader progress={loadedCount / images.length} />
      )}

      <div
        style={{
          transition: "ease 0.2s",
          visibility: loadedCount < images.length && "hidden",
        }}
      >
        <Background color={images[images.length - 1].color} />
        <GrainOverlay />
        <DarkenOverlay id="home__darken-overlay" />
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
                  incrementLoadedCount={incrementLoadedCount}
                />
              );
            })}
          </div>
          <div className="p-home__title-container">
            <h1 className="p-home__title">YZCPHOTOGRAPHY</h1>
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
      </div>

      <Gallery />
    </>
  );
};

export { Home };
