import React, { useState } from "react";
import steps from "../data/visaSteps.json"; // Import the JSON data

const ProcessSection = () => {
  const images = [
    "../images/process-1.jpeg",
    "../images/process-2.jpeg",
    "../images/process-3.jpeg",
    "../images/process-4.jpeg",
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [imageModalIndex, setImageModalIndex] = useState(null); // To track the clicked image for the modal

  const renderContentWithLineBreaks = (content) => {
    return content.split("\n").map((line, index) => <p key={index}>{line}</p>);
  };

  const closeModal = () => setActiveIndex(null);

  const openImageModal = (index) => setImageModalIndex(index);
  const closeImageModal = () => setImageModalIndex(null);

  return (
    <section
      id="process"
      className="section process flex flex-col items-center w-full pt-40 px-6 lg:px-12"
    >
      <span className="text-5xl mb-12 text-center">
        The Application Process
      </span>
      <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-screen-xl">
        {/* 4x3 Grid on the Left */}
        <div className="cards grid grid-cols-3 grid-rows-4 gap-6 lg:w-[48%]">
          {steps.map((step, index) => (
            <div
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
              key={index}
              className="group bg-white p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 flex flex-col items-center justify-center text-center transform hover:scale-110 group-hover:bg-[#48a492] group-hover:text-white"
            >
              <h2 className="font-normal text-lg mb-2">{step.name}</h2>
            </div>
          ))}
        </div>

        {/* 2x2 Grid for Images on the Right */}
        <div className="grid grid-cols-2 gap-12 lg:w-[48%]">
          {images.map((img, index) => (
            <img
              src={img}
              alt={`Step ${index}`}
              key={index}
              className="process-img w-[20rem] h-[20rem] object-contain rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-2xl cursor-pointer"
              onClick={() => openImageModal(index)} // Open image modal when clicked
            />
          ))}
        </div>
      </div>

      {/* Centered Button at the Bottom */}
      <div className="mt-12">
        <button className="us-link-btn bg-[#f4d97e] text-center w-60 p-4">
          <a
            className=""
            target="_blank"
            href="https://travel.state.gov/content/travel/en/us-visas/immigrate/the-immigrant-visa-process/step-10-prepare-for-the-interview/step-12-after-the-interview.html"
          >
            Visit the Official Website for more information
          </a>
        </button>
      </div>

      {/* Modal for Image */}
      {imageModalIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-all duration-300">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full transform transition-all duration-500 scale-100 opacity-100">
            <img
              src={images[imageModalIndex]}
              alt={`Large Image ${imageModalIndex}`}
              className="w-full h-auto object-contain rounded-lg mb-4"
            />
            <button
              onClick={closeImageModal}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

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
    </section>
  );
};

export default ProcessSection;
