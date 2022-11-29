import React, { useEffect } from 'react';

const Cursor = () => {

  useEffect(() => {
    const cursor = document.querySelector(".js-cursor-cursor");
    const cursorBorder = document.querySelector(".js-cursor-border");
    const cursorPos = { x: 0, y: 0 };
    const cursorBorderPos = { x: 0, y: 0 };

    document.addEventListener("mousemove", (e) => {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;

      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    requestAnimationFrame(function loop() {
      const easting = 8;
      cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
      cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;
    
      cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
      requestAnimationFrame(loop);
    });

    document.querySelectorAll(".js-cursor-ponter").forEach((item) => {
      item.addEventListener("mouseover", () => {
        cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .4)";
        cursorBorder.style.setProperty("--size", "30px");
      });

      item.addEventListener("mouseout", () => {
        cursorBorder.style.backgroundColor = "unset";
        cursorBorder.style.mixBlendMode = "unset";
        cursorBorder.style.setProperty("--size", "50px");
      });
    });
  });

  return(
    <div className={'c-cursor'} >
      <div className="c-cursor-cursor js-cursor-cursor"></div>
      <div className="c-cursor-border js-cursor-border"></div>
    </div>
  )
}

export default Cursor;