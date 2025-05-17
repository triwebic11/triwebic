import React from "react";
import Container from "../Container";
const About = () => {
  return (
    <div
      style={{ position: "relative", zIndex: 1 }}
      className="  text-white py-4"
    >
      <Container className="text-center">
        {" "}
        <div
          style={{ position: "relative", zIndex: 1 }}
          className="flex flex-col items-center justify-center text-white text-9xl font-bold"
        >
          <h1 className=" ">HELLO!</h1>
          <h2 className="">WELLCOM</h2>
          <h3 className=" ">TO About page</h3>
        </div>
      </Container>
    </div>
  );
};

export default About;
