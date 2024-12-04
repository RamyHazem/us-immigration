import React from "react";
import accommodationData from "../data/accommodation.json";

const AccommodationSection = () => {
  return (
    <section className="accommodation py-20 px-6 lg:px-12 bg-gray-50">
      <h2 className="text-4xl text-center font-semibold mb-12 text-gray-800">
        Affordable Places to Live in the U.S.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {/* Top 3 locations (in normal layout) */}
        {accommodationData.slice(0, 3).map((location, index) => (
          <div
            key={index}
            className="location-card bg-white rounded-lg shadow-lg overflow-hidden justify-self-center transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={location.image}
              alt={location.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
              <p className="text-gray-700 mb-2">
                <strong>Population:</strong> {location.population}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Average Salary:</strong> {location.annualSalary}
              </p>
              <p className="text-green-600 mb-2">
                <strong>Housing Cost:</strong> {location.housingCost}
              </p>
              <p className="text-gray-600 mb-4">{location.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom 2 locations (centered) */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto justify-items-center">
        {accommodationData.slice(3, 5).map((location, index) => (
          <div
            key={index}
            className="location-card bg-white rounded-lg shadow-lg overflow-hidden justify-self-center transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={location.image}
              alt={location.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
              <p className="text-gray-700 mb-2">
                <strong>Population:</strong> {location.population}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Average Salary:</strong> {location.annualSalary}
              </p>
              <p className="text-green-600 mb-2">
                <strong>Housing Cost:</strong> {location.housingCost}
              </p>
              <p className="text-gray-600 mb-4">{location.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccommodationSection;
