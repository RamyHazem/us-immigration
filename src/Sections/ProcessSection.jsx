import React, { useState } from "react";
import steps from "../data/visaSteps.json"; // Import the JSON data

const ProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderContentWithLineBreaks = (content) => {
    // Split the content by line breaks and render each part in a new <p> element
    return content.split("\n").map((line, index) => <p key={index}>{line}</p>);
  };

  const closeModal = () => setActiveIndex(null);

  return (
    <section
      id="process"
      className="section process flex flex-col items-center pt-40 px-4 sm:px-8"
    >
      <span className="text-5xl mb-20 text-center">
        The Application Process
      </span>
      <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-lg">
        {steps.map((step, index) => (
          <div
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 flex flex-col items-center justify-center text-center"
          >
            <h2 className="font-bold text-xl mb-4">{step.name}</h2>
          </div>
        ))}
      </div>

      {/* Modal for content */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all duration-300">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full transform transition-all duration-500 scale-100 opacity-100">
            <h2 className="font-bold text-3xl mb-4 text-center">
              {steps[activeIndex].name}
            </h2>
            <div className="text-gray-700 mb-4 text-center">
              {renderContentWithLineBreaks(steps[activeIndex].content)}
            </div>
            <button
              onClick={closeModal}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <button className="us-link-btn mt-12 bg-[#f4d97e] w-60 p-4">
        <a
          className=""
          target="blank"
          href="https://travel.state.gov/content/travel/en/us-visas/immigrate/the-immigrant-visa-process/step-10-prepare-for-the-interview/step-12-after-the-interview.html"
        >
          Visit the Official Website for more information
        </a>
      </button>
    </section>
  );
};

export default ProcessSection;
