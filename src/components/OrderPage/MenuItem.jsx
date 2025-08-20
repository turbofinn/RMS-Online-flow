// components/MenuItem.js
import React, { useState } from "react";
import { Button } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const MenuItem = ({ item, onAddToCart, category }) => {
  const isPizza = category === "Pizzas";
  const [selectedSize, setSelectedSize] = useState(null);

  // Render Rating
  const renderRating = (rating = 0) => {
    return (
      <div className="flex items-center gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <LocalFireDepartmentIcon
            key={i}
            sx={{ fontSize: 18 }}
            className={`${i < rating ? "text-red-500" : "text-gray-300"}`}
          />
        ))}
      </div>
    );
  };

  // Custom Size Button
const SizeButton = ({ label, price, value }) => {
  const isSelected = selectedSize === value;

  return (
    <Button
      onClick={() => {
        setSelectedSize(value);
        onAddToCart(item, value);
      }}
      variant="outlined"
      disableRipple
      className={` flex items-center justify-between px-4 py-2 rounded-md border text-sm min-w-[140px] shadow-sm !capitalize ${
        isSelected
          ? "!bg-[#03081F] !text-white !border-[#03081F]"
          : "!bg-white !text-black !font-bold !border-gray-300 hover:!border-gray-400"
      }`}
    >
      {/* Label */}
      <span className={`${!isSelected && "!text-black !font-bold"}`}>
        {label}
      </span>

      {/* Price pill */}
      <span
        className="ml-2 px-3 py-1 rounded text-sm font-semibold bg-[#028643] text-white"
      >
        ₹{price}
      </span>
    </Button>
  );
};

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-start justify-between gap-4 hover:shadow-lg transition-shadow shadow-md">
      {/* Left: Item Details */}
      <div className="flex-1">
        {/* Title */}
        <h3 className="text-lg font-semibold text-black">{item.name}</h3>

        {/* Chilli Rating */}
        {item.rating && renderRating(item.rating)}

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Pizza Size Options */}
        {isPizza ? (
          <div className="flex flex-wrap gap-3">
            {item.prices?.small && (
              <SizeButton
                label="Small"
                price={item.prices.small}
                value="small"
              />
            )}
            {item.prices?.medium && (
              <SizeButton
                label="Medium"
                price={item.prices.medium}
                value="medium"
              />
            )}
            {item.prices?.large && (
              <SizeButton
                label="Large"
                price={item.prices.large}
                value="large"
              />
            )}
            {item.hasXLarge && (
              <SizeButton
                label="XL Large with Sauces"
                price={item.xlargePrice}
                value="xlarge"
              />
            )}
          </div>
        ) : (
          // Non-pizza item
          <Button
            variant="contained"
            onClick={() => onAddToCart(item)}
            className="!bg-[#03081F] hover:!bg-black text-white rounded-md px-6 py-2 capitalize"
          >
            Add to Cart{" "}
            <span className="ml-2 bg-[#028643] text-white px-2 py-0.5 rounded text-xs font-medium">
              ₹{item.price}
            </span>
          </Button>
        )}
      </div>

      {/* Right: Image */}
      <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MenuItem;
