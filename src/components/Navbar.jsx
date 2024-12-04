import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for toggling mobile menu

  // Handle scroll event to toggle navbar background
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarItems = [
    { name: "ABOUT", id: "about" },
    { name: "PROCESS", id: "process" },
    { name: "EDUCATION", id: "education" },
    { name: "ACCOMMODATION", id: "accommodation" },
    { name: "TOURISM", id: "tourism" },
    { name: "CUISINE", id: "cuisine" },
  ];

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white bg-opacity-60 backdrop-blur-lg"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="flex items-center mt-5 mx-8 justify-between px-5 py-3">
        {/* Logo */}
        <span className="sm:text-3xl md:text-4xl lg:text-6xl font-bold cursor-pointer">
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

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-3xl"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`sm:flex ${
            isMobileMenuOpen ? "block" : "hidden"
          } sm:block`}
        >
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12">
            {navbarItems.map((item) => (
              <li
                key={item.id}
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium cursor-pointer hover:text-gray-500"
              >
                <Link
                  activeClass="active"
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
