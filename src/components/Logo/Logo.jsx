import React, { useEffect, useRef } from "react";

import anime from "animejs";

const SvgAnimation = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) {
      anime({
        targets: pathRef.current,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 2000,
        direction: "alternate",
        loop: true,
      });
    }
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
    >
      <path
        ref={pathRef}
        d="M10 80 C40 10, 60 10, 90 80"
        stroke="black"
        strokeWidth="2"
        fill="transparent"
      />
    </svg>
  );
};

export default SvgAnimation;
