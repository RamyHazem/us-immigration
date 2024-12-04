import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import AboutSection from "./Sections/AboutSection";
import ItemsSection from "./Sections/ItemsSection";
import ProcessSection from "./Sections/ProcessSection";
import EducationSection from "./Sections/EducationSection";
import CuisineSection from "./Sections/CuisineSection";
import TourismSection from "./Sections/TourismSection";
import AccommodationSection from "./Sections/AccomodationSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="top relative">
        <HomePage />
      </div>
      <AboutSection />
      <ProcessSection />
      <EducationSection />
      <AccommodationSection />
      <TourismSection />
      <CuisineSection />
      <Footer />
    </div>
  );
}

export default App;
