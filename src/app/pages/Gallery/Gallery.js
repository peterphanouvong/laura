import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
// import GrainOverlay from "../../layout/GrainOverlay/GrainOverlay";
import img1 from "../../static/images/daydream.jpeg";
import "./Gallery.css";
const Gallery = ({ width }) => {
  return (
    <SimpleReactLightbox>
      <div>
        {/* <GrainOverlay /> */}
        {/* <div style={{ padding: "25rem 0 15rem 0" }}>
          <h1 className="gallery__title">Day Dream</h1>
        </div> */}
        <SRLWrapper
          options={{
            settings: {
              overlayColor: "rgba(255,255,255,0.6)",
            },
            buttons: {
              backgroundColor: "rgba(0,0,0,0.1)",
              iconColor: "rgba(0,0,0,0.5)",
            },
          }}
        >
          <div className="gallery__grid">
            <a className="gallery__grid-image" href={img1}>
              <img width={width} src={img1} alt="sugma" />
            </a>
            <a className="gallery__grid-image" href={img1}>
              <img width={width} src={img1} alt="sugma" />
            </a>
            <a className="gallery__grid-image" href={img1}>
              <img width={width} src={img1} alt="sugma" />
            </a>
            <a className="gallery__grid-image" href={img1}>
              <img width={width} src={img1} alt="sugma" />
            </a>
            <a className="gallery__grid-image" href={img1}>
              <img width={width} src={img1} alt="sugma" />
            </a>
            <a className="gallery__grid-image" href={img1}>
              <img width={width} src={img1} alt="sugma" />
            </a>
            <a className="gallery__grid-image" href={img1}>
              <img width={width} src={img1} alt="sugma" />
            </a>
            <a className="gallery__grid-image" href={img1}>
              <img width={width} src={img1} alt="sugma" />
            </a>
            <a className="gallery__grid-image" href={img1}>
              <img width={width} src={img1} alt="sugma" />
            </a>
          </div>
        </SRLWrapper>
      </div>
    </SimpleReactLightbox>
  );
};

export { Gallery };
