import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { homeAnimations } from "./homeAnimations";

const HomeImage = ({ length, img, index, incrementLoadedCount }) => {
  const imgRef = useRef(null);
  const history = useHistory();

  const handleClick = () => {
    history.push("/gallery");
  };

  useEffect(() => {
    homeAnimations.imageIn(index, imgRef.current.width, length);
    homeAnimations.imageRotate(index, length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <img
      className={`p-home__image p-home__image-${index}`}
      key={index}
      alt="laura"
      ref={imgRef}
      src={img}
      style={{ width: 100 / length + "vw" }}
      onLoad={incrementLoadedCount}
      onClick={handleClick}
    />
  );
};

export { HomeImage };
