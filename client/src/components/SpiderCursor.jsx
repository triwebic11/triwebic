import React, { useRef, useEffect } from "react";

const SpiderCursor = () => {
  const canvasRef = useRef(null);
  const dots = useRef([]);
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF8C33"];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Fullscreen canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create dots
    for (let i = 0; i < 100; i++) {
      dots.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const drawDots = () => {
      dots.current.forEach((dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    drawDots();

    const handleMouseMove = (e) => {
      const mouse = {
        x: e.clientX,
        y: e.clientY,
      };

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();

      dots.current.forEach((dot) => {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        backgroundColor: "transparent",
      }}
    />
  );
};

export default SpiderCursor;
