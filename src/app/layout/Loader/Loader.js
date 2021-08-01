import React from "react";
import src from "../../static/icons/loader.gif";
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
        <div className="loader__progress-number">{progress * 100}%</div>
      </div>
    </div>
  );
};

export { Loader };
