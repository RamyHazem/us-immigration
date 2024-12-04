import React from "react";
import restaurantData from "../data/restaurants.json"; // Import the JSON file

const CuisineSection = () => {
  return (
    <section id="cuisine" className=" py-20 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        Cuisine Options in the US
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {restaurantData.map((restaurant, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{restaurant.name}</h3>
              <p className="text-gray-600 mb-4">{restaurant.description}</p>
              <p className="text-lg font-medium text-green-600 mb-4">
                {restaurant.budget}
              </p>
              <a
                href={restaurant.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CuisineSection;
