import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const HomeImage = ({ length, img, index }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline();

    t1.fromTo(
      `.p-home__image-${index}`,
      {
        y: "-50%",
        x: -(
          (imgRef.current.width - window.innerWidth) / 2 +
          (imgRef.current.width +
            (window.innerWidth - imgRef.current.width * length) /
              (length - 1)) *
            index
        ),
      },
      {
        duration: 1.6,
        delay: 0.8,
        ease: "power3.out",
        y: "-50%",
        x: 0,
      }
    );
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
    />
  );
};

export { HomeImage };
