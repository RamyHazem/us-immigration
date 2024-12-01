import React from "react";
import { Link } from "react-scroll";

const ItemsSection = () => {
  const items = [
    "ABOUT",
    "PROCESS",
    "EDUCATION",
    "ACCOMODATION",
    "TOURISM",
    "CUISINE",
  ];

  return (
    <section id="items" className="section items ">
      <div className="main-grid">
        {items.map((item) => {
          return (
            <div className="grid-item-container bg-white flex items-center justify-center cursor-pointer text-lg">
              <Link
                className="grid-item"
                activeClass="active"
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {item}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ItemsSection;
