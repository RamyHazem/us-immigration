import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = [
    "../images/bg2.jpg",
    "../images/bg3.jpg",
    "../images/bg5.jpg",
    "../images/bg4.jpg",
    "../images/bg7.jpg",
    "../images/bg1.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
