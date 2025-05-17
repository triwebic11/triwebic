// src/components/NightSky.jsx
import React, { useEffect } from "react";
import "../NightSky.css";

const NightSky = () => {
  useEffect(() => {
    const numStars = 150;
    const body = document.getElementById("sky");

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "stars";
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${1 + Math.random() * 2}s`;
      body.appendChild(star);
    }

    // Cleanup stars when component unmounts
    return () => {
      const stars = document.querySelectorAll(".stars");
      stars.forEach((star) => star.remove());
    };
  }, []);

  return <div id="sky" className="night-sky"></div>;
};

export default NightSky;
