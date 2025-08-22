import React from "react";
import { Button } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import MenuItem from "./MenuItem";

const MenuContent = ({ selectedCategory, onAddToCart }) => {
  const menuData = {
    Pizzas: [
      {
        id: 1,
        name: "Farm House Xtreme Pizza",
        rating: 4.5,
        description:
          "UberEats™ Big Mac™ · Beef Cheeseburger · 2 medium-sized French Fries, 2 cold drinks",
        image: "/assets/pizza4.svg",
        prices: { small: 21.3, medium: 23.3, large: 27.9 },
        hasXLarge: true,
        xlargePrice: 24.9,
      },
      {
        id: 2,
        name: "Deluxe Pizza",
        rating: 4.5,
        description:
          "UberEats™ Big Mac™ · Beef Cheeseburger · 2 medium-sized French Fries, 2 cold drinks",
        image: "/assets/pizza (2).svg",
        prices: { small: 21.3, medium: 23.3, large: 27.9 },
        hasXLarge: true,
        xlargePrice: 24.9,
      },
      {
        id: 3,
        name: "Tandoori Pizza",
        rating: 4.5,
        description:
          "UberEats™ Big Mac™ · Beef Cheeseburger · 2 medium-sized French Fries, 2 cold drinks",
        image: "/assets/pizza3.svg",
        prices: { small: 21.3, medium: 23.3, large: 27.9 },
        hasXLarge: true,
        xlargePrice: 24.9,
      },
    ],
    "Garlic Bread": [
      {
        id: 4,
        name: "Classic Garlic Bread",
        rating: 4.2,
        description: "Fresh baked bread with garlic butter and herbs",
        image: "/assets/pizza3.svg",
        price: 8.9,
      },
      {
        id: 5,
        name: "Cheesy Garlic Bread",
        rating: 4.6,
        description: "Garlic bread topped with melted mozzarella cheese",
         image: "/assets/pizza3.svg",
        price: 12.9,
      },
    ],
    "Cold drinks": [
      {
        id: 6,
        name: "Coca Cola",
        rating: 4.0,
        description: "Classic refreshing cola drink",
        image: "/api/placeholder/120/120",
        price: 4.9,
      },
      {
        id: 7,
        name: "Sprite",
        rating: 4.1,
        description: "Lemon-lime flavored soft drink",
        image: "/api/placeholder/120/120",
        price: 4.9,
      },
    ],
    Calzone: [
      {
        id: 8,
        name: "Meat Calzone",
        rating: 4.3,
        description: "Folded pizza filled with meat, cheese and sauce",
        image: "/api/placeholder/120/120",
        price: 15.9,
      },
    ],
    Kebabas: [
      {
        id: 9,
        name: "Chicken Kebab",
        rating: 4.4,
        description: "Grilled chicken kebab with vegetables and sauce",
        image: "/api/placeholder/120/120",
        price: 12.9,
      },
    ],
    Salads: [
      {
        id: 10,
        name: "Caesar Salad",
        rating: 4.2,
        description: "Fresh lettuce, croutons, parmesan with caesar dressing",
        image: "/api/placeholder/120/120",
        price: 9.9,
      },
    ],
    "Happy Meal®": [
      {
        id: 11,
        name: "Kids Pizza Meal",
        rating: 4.0,
        description: "Small pizza with drink and toy",
        image: "/api/placeholder/120/120",
        price: 8.9,
      },
    ],
    Desserts: [
      {
        id: 12,
        name: "Chocolate Brownie",
        rating: 4.5,
        description: "Warm chocolate brownie with ice cream",
        image: "/api/placeholder/120/120",
        price: 6.9,
      },
    ],
    "Hot drinks": [
      {
        id: 13,
        name: "Cappuccino",
        rating: 4.3,
        description: "Rich espresso with steamed milk foam",
        image: "/api/placeholder/120/120",
        price: 3.9,
      },
    ],
    Sauces: [
      {
        id: 14,
        name: "Garlic Mayo",
        rating: 4.1,
        description: "Creamy garlic mayonnaise sauce",
        image: "/api/placeholder/120/120",
        price: 1.5,
      },
    ],
    "Orbit®": [
      {
        id: 15,
        name: "Orbit Gum",
        rating: 3.8,
        description: "Sugar-free chewing gum",
        image: "/api/placeholder/120/120",
        price: 2.9,
      },
    ],
  };

  const currentItems = menuData[selectedCategory] || [];

  return (
    <div className="w-full">
      {/* Header with Category Name and Sort Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-4">
        <h2 className="text-xl md:text-2xl text-black font-bold">
          {selectedCategory}
        </h2>
        <Button
          variant="outlined"
          endIcon={<KeyboardArrowDown />}
          sx={{
            textTransform: "none",
            borderRadius: "9999px",
            backgroundColor: "#F6F6F6",
            color: "#000",
            borderColor: "#e5e7eb",
            px: { xs: 2, sm: 3 },
            py: 1,
            minWidth: { xs: "100%", sm: "220px" },
            display: "flex",
            justifyContent: "space-between",
            fontSize: { xs: "0.875rem", sm: "1rem" },
            "&:hover": {
              backgroundColor: "#e5e7eb",
              borderColor: "#d1d5db",
            },
          }}
        >
          Sort by Pricing
        </Button>
      </div>

      {/* Menu Items List */}
      <div className="space-y-3 md:space-y-4">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <MenuItem key={item.id} item={item} category={selectedCategory} />
          ))
        ) : (
          <div className="text-center py-8 md:py-12 text-gray-500">
            <p className="text-sm md:text-base">
              No items available in {selectedCategory}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuContent;
