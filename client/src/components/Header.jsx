import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import logo from "../assets/triwebic-logo.png";

const Header = () => {
  const MenuItem = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div
      style={{ position: "relative", zIndex: 1 }}
      className=" text-white h-[80px] lg:h-[100px] shadow-bottom shadow-white hover:shadow-lg duration-300 hover:-skew-x-12"
    >
      <Container>
        <nav className="flex justify-between items-center ">
          <div>
            <Link to="/">
              {" "}
              <img
                src={logo}
                alt="TriWebic"
                className="w-48 h-auto hover:-skew-x-12 duration-500"
              />
            </Link>
          </div>
          <div>
            <ul className="flex gap-4">
              {MenuItem.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-xl hover:text-orange-700 duration-300 hover:underline hover:-skew-x-12"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
