"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { isMobile } from "react-device-detect";

const HelperCircle = (props: any) => {
  let circleRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [IsActive, setActive] = useState(false);
  useEffect(() => {
    if (isMobile) {
      setActive(false);
    }

    document.addEventListener("mouseleave", (e) => {
      setActive(false);
    });

    document.addEventListener("mouseenter", (e) => {
      setActive(true);

      document.addEventListener("mousemove", (e) => {
        setPosition({ x: e.pageX, y: e.pageY });
      });
    });
  }, []);

  return (
    <span
      style={{
        left: position.x - 15,
        top: position.y - 15,
      }}
      className={`p-5 pointer-events-none transition-transform opacity-60 inline-block  bg-white rounded-full fixed  ${
        IsActive ? `scale-10 opacity-10` : "scale-0 opacity-0"
      }`}
    ></span>
  );
};

export default HelperCircle;
