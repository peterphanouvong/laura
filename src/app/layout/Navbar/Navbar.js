import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import "./Navbar.css";
import instagramSvg from "../../static/icons/instagram.svg";

const Navbar = () => {
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".navbar", {
      opacity: 0,
      delay: 2,
      duration: 1.5,
      y: -50,
      ease: "power3.out",
    });
  }, []);
  return (
    <div className="navbar">
      <div className="navbar__inner">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/faces">Faces</Link>
          </li>
        </ul>
        <div className="navbar__title-group">
          <h1 className="navbar__title">YZCPHOTOGRAPHY</h1>
          <h4 className="navbar__subtitles">
            <span>about</span>
            {" // "}
            <span>portfolio</span>
            {" // "}
            <span>contact</span>
          </h4>
        </div>

        <img
          className="navbar__instagram-icon"
          width={30}
          src={instagramSvg}
          alt="ig"
        />
      </div>
    </div>
  );
};

export { Navbar };
