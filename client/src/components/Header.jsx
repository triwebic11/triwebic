import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

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
      className="bg-slate-900 text-white h-[80px] shadow-bottom shadow-white hover:shadow-lg py-4 duration-200"
    >
      <Container>
        <nav className="flex justify-between items-center py-4">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <ul className="flex gap-4">
              {MenuItem.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-xl ">
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
