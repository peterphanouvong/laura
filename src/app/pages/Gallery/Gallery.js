import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import "./Gallery.css";
const Gallery = ({ width, collection }) => {
  const [loadedCount, setLoadedCount] = useState(1);

  const incrementCount = () => {
    setLoadedCount(loadedCount + 1);
  };

  useEffect(() => {
    setLoadedCount(1);
  }, [collection]);

  return (
    <>
      <SimpleReactLightbox>
        <SRLWrapper
          options={{
            settings: {
              overlayColor: "rgba(255,255,255,0.85)",
            },
            buttons: {
              backgroundColor: "rgba(0,0,0,0.1)",
              iconColor: "rgba(0,0,0,0.5)",
            },
          }}
        >
          <div className="gallery__grid">
            {collection.map((image) => (
              <a className="gallery__grid-image" href={image}>
                <LazyLoadImage
                  effect="blur"
                  width={"100%"}
                  src={image}
                  alt="sugma"
                  onLoad={incrementCount}
                />
              </a>
            ))}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  );
};

export { Gallery };
