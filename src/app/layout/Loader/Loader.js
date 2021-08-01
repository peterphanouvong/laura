import React from "react";
import src from "../../static/images/loader.gif";
import "./Loader.css";

const Loader = ({ progress }) => {
  return (
    <div className="loader-container">
      <img className="loader" alt="cute loading" src={src} />
      <div className="loader__progress">
        <div
          className="loader__progress-inner"
          style={{ width: progress * 150 }}
        ></div>
      </div>
      {progress * 100}%
    </div>
  );
};

export { Loader };
