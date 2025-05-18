import React, { useState, useEffect } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y - 10,
        left: position.x - 10,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'orange',
        borderWidth:'',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'transform 0.05s ease',
      }}
    />
  );
};

export default CursorFollower;
