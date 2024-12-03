import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const navbarItems = [
    { name: "ABOUT", id: "about" },
    { name: "PROCESS", id: "process" },
    { name: "EDUCATION", id: "education" },
    { name: "ACCOMODATION", id: "accomodation" },
    { name: "TOURISM", id: "tourism" },
    { name: "CUISINE", id: "cuisine" },
  ];

  return (
    <div className="navbar flex flex-row items-center justify-around w-full fixed top-0 z-50">
      <span className=" sm:text-3xl lg:text-6xl font-bold text-center mx-5 cursor-pointer">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          US Immigration
        </Link>
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
