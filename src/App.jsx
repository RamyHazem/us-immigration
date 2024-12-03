import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import AboutSection from "./Sections/AboutSection";
import ItemsSection from "./Sections/ItemsSection";
import ProcessSection from "./Sections/ProcessSection";
import EducationSection from "./Sections/EducationSection";
import CuisineSection from "./Sections/CuisineSection";

function App() {
  return (
    <div className="app">
      <div className="top relative">
        <Navbar />
        <HomePage />
      </div>
      <ItemsSection />
      <AboutSection />
      <ProcessSection />
      <EducationSection />
      <CuisineSection />
    </div>
  );
}

export default App;
