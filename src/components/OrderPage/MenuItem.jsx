import React, { useState } from "react";
import { Button } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/slices/cartSlice";

const MenuItem = ({ item, category }) => {
  const dispatch = useDispatch();
  const isPizza = category === "Pizzas";
  const [selectedSize, setSelectedSize] = useState(isPizza ? "medium" : null);

  // Handle adding item to cart
  const handleAddToCart = (size = null) => {
    const itemToAdd = {
      baseId: item.id,
      name: size ? `${item.name} (${size})` : item.name,
      price: size ? item.prices[size] : item.price,
      size: size,
      description: item.description || "",
      image: item.image || "",
    };

    dispatch(addItem(itemToAdd));
  };

  // Render Rating
  const renderRating = (rating = 0) => {
    return (
      <div className="flex items-center gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <LocalFireDepartmentIcon
            key={i}
            sx={{ fontSize: { xs: 14, sm: 18 } }}
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
        onClick={() => setSelectedSize(value)}
        variant="outlined"
        disableRipple
        className={`flex items-center justify-between px-2 sm:px-4 py-1.5 sm:py-2 rounded-md border text-xs sm:text-sm min-w-[100px] sm:min-w-[140px] shadow-sm !capitalize ${
          isSelected
            ? "!bg-[#03081F] !text-white !border-[#03081F]"
            : "!bg-white !text-black !font-bold !border-gray-300 hover:!border-gray-400"
        }`}
      >
        {/* Label */}
        <span
          className={`text-xs sm:text-sm ${
            !isSelected && "!text-black !font-bold"
          }`}
        >
          {label}
        </span>

        {/* Price pill */}
        <span className="ml-1 sm:ml-2 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded text-xs sm:text-sm font-semibold bg-[#028643] text-white">
          ₹{price}
        </span>
      </Button>
    );
  };

  // Get current price based on selection
  const getCurrentPrice = () => {
    if (isPizza && selectedSize) {
      return item.prices[selectedSize];
    }
    return item.price;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 shadow-sm hover:border-gray-300 hover:scale-[1.02] sm:hover:scale-100 sm:rounded-lg">
      {/* Mobile Layout */}
      <div className="sm:hidden">
        {/* Top: Image and Basic Info */}
        <div className="flex items-start gap-3 mb-3">
          {/* Image with gradient border */}
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Optional: Add a small badge for rating */}
            {item.rating >= 4.5 && (
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                ★
              </div>
            )}
          </div>

          {/* Title and Rating with better spacing */}
          <div className="flex-1 min-w-0 pt-1">
            <h3 className="text-lg font-bold text-black leading-tight mb-1 truncate">
              {item.name}
            </h3>
            {item.rating && (
              <div className="flex items-center gap-1">
                {renderRating(item.rating)}
                <span className="text-xs text-gray-500 ml-1 font-medium">
                  ({item.rating})
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Description with better typography */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2 px-1">
          {item.description}
        </p>

        {/* Size selection for pizzas on mobile */}
        {isPizza && (
          <div className="mb-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
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
            </div>
          </div>
        )}

        {/* Add to Cart button */}
        <Button
          variant="contained"
          onClick={() => handleAddToCart(selectedSize)}
          className="!bg-[#03081F] hover:!bg-black text-white rounded-lg px-4 py-3 capitalize w-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Add to Cart{" "}
          <span className="ml-2 bg-[#028643] text-white px-2.5 py-1 rounded-full text-xs font-bold">
            ₹{getCurrentPrice()}
          </span>
        </Button>
      </div>

      {/* Desktop Layout (side by side) */}
      <div className="hidden sm:flex items-start justify-between gap-4">
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

          {/* Pizza Size Options - Changed to flex-nowrap to keep buttons in one row */}
          {isPizza ? (
            <div className="flex gap-3 mb-4 flex-nowrap overflow-x-auto pb-2">
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
            </div>
          ) : null}

          {/* Add to Cart button */}
          <Button
            variant="contained"
            onClick={() => handleAddToCart(selectedSize)}
            className="!bg-[#03081F] hover:!bg-black text-white rounded-md px-6 py-2 capitalize"
          >
            Add to Cart{" "}
            <span className="ml-2 bg-[#028643] text-white px-2 py-0.5 rounded text-xs font-medium">
              ₹{getCurrentPrice()}
            </span>
          </Button>
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
    </div>
  );
};

export default MenuItem;
