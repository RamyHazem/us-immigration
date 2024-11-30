import React from "react";

const AboutSection = () => {
  const items = ["HOME", "ABOUT", "PROCESS", "EDUCATION", "TOURISM", "CUISINE"];

  return (
    <section id="about" className="section about ">
      <div className="main-grid flex justify-between">
        {items.map((item) => {
          return (
            <div className="grid-item bg-white flex items-center justify-center">
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;
