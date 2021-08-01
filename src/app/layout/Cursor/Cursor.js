import React, { useEffect } from "react";
import "./Cursor.css";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    // const dot = document.querySelector(".dot");

    window.addEventListener("mousemove", mouseMoveHandler);

    function mouseMoveHandler(e) {
      cursor.style.left = e.clientX - cursor.offsetWidth / 2 + "px";
      // cursor.style.transform = `translateX(${
      //   e.clientX - cursor.offsetWidth / 2 + "px"
      // })`;
      cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";
      cursor.style.opacity = 1;

      // dot.style.left = e.clientX - dot.offsetWidth / 2 + "px";
      // dot.style.top = e.clientY - dot.offsetHeight / 2 + "px";
      // dot.style.opacity = 1;
    }
  }, []);
  return (
    <>
      <div className="cursor">{/* <div className="dot"></div> */}</div>
    </>
  );
};

export { Cursor };
