import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const navbarItems = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "PROCESS", id: "process" },
    { name: "EDUCATION", id: "education" },
    { name: "TOURISM", id: "tourism" },
    { name: "CUISINE", id: "cuisine" },
  ];

  return (
    <div className="navbar flex flex-row items-center justify-around w-full fixed top-0 z-50">
      <span className="text-6xl font-bold text-center mx-5 cursor-pointer">
        <a href="/">US Immigration</a>
      </span>
      <nav className="py-10 ">
        <ul className="flex space-x-12 justify-center ">
          {navbarItems.map((item) => {
            return (
              <li className="text-2xl font-medium cursor-pointer hover:text-white">
                <Link
                  activeClass="active"
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
