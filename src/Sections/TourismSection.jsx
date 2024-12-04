import React from "react";
import attractions from "../data/attractions.json";

const TourismSection = () => {
  return (
    <section id="tourism" className="py-20 px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Top U.S. Attractions to Explore
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {attraction.name}
                </h3>
                <p className="text-gray-700 mb-4">{attraction.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">
                    {attraction.budget}
                  </span>
                  <a
                    href={attraction.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Learn More &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismSection;
