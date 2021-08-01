import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import instagramSvg from "../../static/icons/icons8-instagram-logo.svg";
import { navbarAnimations } from "./navbarAnimations";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    navbarAnimations.navbarIn();
  }, []);

  const handleShowSidebar = () => {
    if (open) {
      navbarAnimations.hideSideBar();
    } else {
      navbarAnimations.showSideBar();
    }

    setOpen(!open);
  };

  return (
    <>
      <div className="navbar__hamburger" onClick={handleShowSidebar}>
        <div className="navbar__hamburger-line navbar__hamburger-line-1"></div>
        <div className="navbar__hamburger-line navbar__hamburger-line-2"></div>
      </div>
      <div className="navbar">
        <div className="navbar__inner">
          <div></div>

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
          <a
            href="https://www.instagram.com/laurazzic/"
            target="_blank"
            rel="noreferrer"
            style={{ paddingTop: "10px" }}
          >
            <img
              className="navbar__instagram-icon"
              width={32}
              src={instagramSvg}
              alt="instagram link"
            />
          </a>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar-inner">
          <Link>
            <h1 className="sidebar-link">about</h1>
          </Link>
          <Link>
            <h1 className="sidebar-link">contact</h1>
          </Link>
          <Link>
            <h1 className="sidebar-link">portfolio</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export { Navbar };
