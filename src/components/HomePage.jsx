import React from "react";
import { Link } from "react-scroll";
import Carousel from "./Carousel";

const HomePage = () => {
  return (
    <section
      id="home"
      className="home flex flex-col items-center justify-center bg-cover bg-center h-screen relative"
    >
      <div className="absolute bottom-0 w-full ">
        <Carousel />
      </div>
      <div className="text mb-8 z-2 relative flex flex-col">
        <h1 className="text-[#dcbc06] text-6xl text-center">
          Welcome to the USA
        </h1>
        <span className="text-white font-medium text-center underline text-lg mt-3 cursor-pointer">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Explore our Insights
          </Link>
        </span>
      </div>
    </section>
  );
};

export default HomePage;