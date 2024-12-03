import React from "react";
import { Link } from "react-scroll";
import Carousel from "./Carousel";

const HomePage = () => {
  return (
    <section
      id="home"
      className="home flex flex-col items-center justify-center bg-cover bg-center h-screen relative"
    >
      <div class="image-overlay z-10"></div>
      <div className="absolute bottom-0 w-full z-0">
        <Carousel />
      </div>
      <div className="text z-20 relative flex flex-col justify-center items-center">
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
