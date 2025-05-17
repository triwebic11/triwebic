import React from "react";
import Container from "../Container";
const Home = () => {
  return (
    <div>
      <Container className="text-center">
        <div
          style={{ position: "relative", zIndex: 1 }}
          className="flex flex-col items-center justify-center text-white text-9xl font-bold"
        >
          <h1 className=" ">HELLO!</h1>
          <h2 className="">WELLCOM</h2>
          <h3 className=" ">TO TriWebic</h3>
        </div>
      </Container>
    </div>
  );
};

export default Home;
