import React, { useState } from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Loader } from "../../layout/Loader/Loader";
import "./Gallery.css";
const Gallery = ({ width, collection }) => {
  const [loadedCount, setLoadedCount] = useState(100);

  const incrementCount = () => {
    setLoadedCount(loadedCount + 1);
  };

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
          {loadedCount < collection.length && (
            <>
              <div style={{ paddingTop: "10rem" }}></div>
              <Loader progress={loadedCount / collection.length} />
            </>
          )}
          <div
            style={{
              transition: "ease 0.2s",
              visibility: loadedCount < collection.length && "hidden",
            }}
            className="gallery__grid"
          >
            {collection.map((image) => (
              <a className="gallery__grid-image" href={image}>
                <img
                  width={width}
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
