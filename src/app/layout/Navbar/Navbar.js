import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import instagramSvg from "../../static/icons/icons8-instagram-logo.svg";
import { navbarAnimations } from "./navbarAnimations";

const Navbar = () => {
  useEffect(() => {
    navbarAnimations.navbarIn();
  }, []);
  return (
    <div className="navbar">
      <div className="navbar__inner">
        <svg viewBox="0 0 60 60" width="28" height="28">
          <rect
            fill="white"
            stroke="white"
            y="10"
            width="60"
            height="1"
            rx="2"
          ></rect>
          <rect
            fill="white"
            stroke="white"
            y="30"
            width="60"
            height="1"
            rx="2"
          ></rect>
        </svg>
        <div className="navbar__title-group">
          <h1 className="navbar__title">
            <Link to="/">YZCPHOTOGRAPHY</Link>
          </h1>
          <h4 className="navbar__subtitles">
            <Link to="/about">about</Link>
            {" // "}
            <span>portfolio</span>
            {" // "}
            <span>contact</span>
          </h4>
        </div>

        <img
          className="navbar__instagram-icon"
          width={32}
          src={instagramSvg}
          alt="ig"
        />
      </div>
    </div>
  );
};

export { Navbar };
