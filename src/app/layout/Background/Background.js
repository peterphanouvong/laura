import React from "react";
import "./Background.css";

const Background = ({ color }) => {
  return <div style={{ backgroundColor: color }} className="background"></div>;
};

export { Background };
