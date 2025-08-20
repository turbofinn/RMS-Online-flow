// components/Sidebar.js
import React from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const Sidebar = ({ selectedCategory, onCategoryChange }) => {
  const menuItems = [
    "Pizzas",
    "Garlic Bread",
    "Calzone",
    "Kebabas",
    "Salads",
    "Cold drinks",
    "Happy Meal®",
    "Desserts",
    "Hot drinks",
    "Sauces",
    "Orbit®",
  ];

  return (
    <div className="w-64">
      {/* Menu Box */}
      <div className="border rounded-lg" style={{ backgroundColor: "#FBFBFB" }}>
        <div className="p-4 flex items-center space-x-2">
          <RestaurantMenuIcon style={{ color: "#03081F" }} />
          <h2
            className="font-semibold text-black"
            style={{ fontSize: "20px ", fontWeight: 600 }}
          >
            Menu
          </h2>
        </div>

        <nav className="space-y-1 px-2 pb-2">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => onCategoryChange(item)}
              className={`w-full text-left px-3 py-2 text-sm font-medium transition-colors duration-200 rounded cursor-pointer
    ${
      selectedCategory === item
        ? "text-white bg-[#03081F]"
        : "text-black hover:bg-gray-100"
    }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* Promo Banner */}
      <div className="mt-4 relative rounded-lg overflow-hidden shadow">
        {/* Promo Image */}
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          alt="Promo"
          className="w-full h-40 object-cover"
        />

        {/* Discount Badge */}
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          -20%
        </div>

        {/* Text Overlay */}
        <div className="absolute bottom-2 left-2 text-white">
          <p className="text-xs opacity-80">Special Offer</p>
          <p className="text-sm font-semibold">First Order Discount</p>
        </div>

        {/* Plus Button */}
        <div className="absolute bottom-2 right-2 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
          +
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
