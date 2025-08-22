import React from "react";

const Sidebar = ({ selectedCategory, onCategoryChange }) => {
  const menuItems = [
    { name: "Pizzas", popular: true },
    { name: "Garlic Bread" },
    { name: "Calzone" },
    { name: "Kebabas" },
    { name: "Salads" },
    { name: "Cold drinks", popular: true },
    { name: "Happy Meal®" },
    { name: "Desserts" },
    { name: "Hot drinks" },
    { name: "Sauces" },
    { name: "Orbit®" },
  ];

  return (
    <div className="w-full md:w-64">
      {/* Menu Box */}
      <div
        className="border-2 md:border rounded-2xl md:rounded-lg overflow-hidden shadow-lg md:shadow-none"
        style={{ backgroundColor: "#FBFBFB" }}
      >
        {/* Header */}
        <div
          className="p-4 md:p-4 flex items-center justify-between bg-gradient-to-r from-[#03081F] to-[#1a1f35] md:bg-none md:from-transparent md:to-transparent"
          style={{ backgroundColor: "#FBFBFB" }}
        >
          <h2
            className="font-bold text-white md:text-black text-lg md:text-xl"
            style={{ fontWeight: 600 }}
          >
            Menu
          </h2>
          {/* Mobile: Category count */}
          <div className="md:hidden bg-opacity-20 text-white text-xs font-bold px-2 py-1 rounded-full">
            {menuItems.length}
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 md:space-y-1 p-3 md:px-2 md:pb-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => onCategoryChange(item.name)}
              className={`w-full text-left px-4 md:px-3 py-3 md:py-3 text-sm md:text-base font-medium transition-all duration-300 rounded-xl md:rounded cursor-pointer flex items-center justify-between group hover:transform hover:scale-[1.02] md:hover:scale-100 ${
                selectedCategory === item.name
                  ? "text-white bg-gradient-to-r from-[#03081F] to-[#1a1f35] shadow-lg md:bg-[#03081F] md:from-transparent md:to-transparent"
                  : "text-black hover:bg-white md:hover:bg-gray-100 bg-gray-50 md:bg-transparent shadow-sm md:shadow-none hover:shadow-md md:hover:shadow-none"
              }`}
            >
              <div className="flex items-center space-x-3">
                <span
                  className={`font-semibold md:font-medium ${
                    selectedCategory === item.name
                      ? "text-white"
                      : "text-gray-800"
                  }`}
                >
                  {item.name}
                </span>
                {item.popular && (
                  <span className="md:hidden bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                    HOT
                  </span>
                )}
              </div>
              {selectedCategory === item.name && (
                <div className="w-2 h-2 bg-white rounded-full md:hidden animate-pulse"></div>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Promo Banner */}
      <div className="mt-6 md:mt-4 relative rounded-2xl md:rounded-lg overflow-hidden shadow-xl md:shadow hover:shadow-2xl transition-shadow duration-300">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Special Offer"
            className="w-full h-36 md:h-40 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>

        <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm md:text-xs font-bold px-3 py-1.5 md:px-2 md:py-1 rounded-full shadow-lg animate-pulse">
          -20% OFF
        </div>

        <div className="absolute bottom-3 left-3 text-white">
          <p className="text-xs md:text-xs opacity-90 font-medium">
            Limited Time
          </p>
          <p className="text-base md:text-sm font-bold leading-tight">
            First Order
            <br className="md:hidden" />
            <span className="md:ml-1">Discount</span>
          </p>
        </div>

        <div className="absolute bottom-3 right-3">
          <button className="bg-white text-black rounded-full w-10 h-10 md:w-8 md:h-8 flex items-center justify-center text-lg md:text-base font-bold shadow-lg hover:bg-yellow-400 hover:scale-110 transition-all duration-200 group">
            <span className="group-hover:rotate-90 transition-transform duration-200">
              +
            </span>
          </button>
        </div>

        <div className="md:hidden absolute top-3 right-3 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
          New!
        </div>
      </div>

      {/* Mobile: Quick Stats */}
      <div className="md:hidden mt-4 grid grid-cols-3 gap-3">
        <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
          <div className="text-green-600 font-bold text-lg">30+</div>
          <div className="text-green-700 text-xs font-medium">Items</div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
          <div className="text-blue-600 font-bold text-lg">4.8★</div>
          <div className="text-blue-700 text-xs font-medium">Rating</div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 text-center">
          <div className="text-orange-600 font-bold text-lg">25min</div>
          <div className="text-orange-700 text-xs font-medium">Delivery</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
