import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import AboutSection from "./Sections/AboutSection";
import ItemsSection from "./Sections/ItemsSection";

function App() {
  return (
    <div className="app">
      <div className="top relative">
        <Navbar />
        <HomePage />
      </div>
      <ItemsSection />
      <AboutSection />
      <section id="process" className="section bg-gray-300">
        <h1>PROCESS</h1>
      </section>
    </div>
  );
}

export default App;
