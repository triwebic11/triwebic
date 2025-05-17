import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div
      style={{ position: "relative", zIndex: 1 }}
      className="position-relative z-10 bg-orange-700 text-white py-4"
    >
      <Container className="text-center">This is the footer</Container>
    </div>
  );
};

export default Footer;
