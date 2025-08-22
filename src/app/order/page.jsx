"use client";

import Cart from "@/components/OrderPage/Cart";
import Header from "@/components/OrderPage/Header";
import MenuContent from "@/components/OrderPage/MenuContent";
import Searchbar from "@/components/OrderPage/Searchbar";
import Sidebar from "@/components/OrderPage/Sidebar";
import { Close, RestaurantMenu, ShoppingBasket } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem, removeItem } from "@/store/slices/cartSlice";
import RestaurantInfoCard from "@/components/restaurant/InformationSection";
import RestaurantMap from "@/components/restaurant/Map";
import RestaurantReviews from "@/components/restaurant/Review";
import SimilarRestaurants from "@/components/restaurant/SimilarRestaurants";

const MenuPage = () => {
  const [uiState, setUiState] = useState({
    selectedCategory: "Pizzas",
    isSidebarOpen: false,
    isCartOpen: false,
  });

  // Destructure for easy access
  const { selectedCategory, isSidebarOpen, isCartOpen } = uiState;

  // Helper function to update UI state
  const updateUiState = (updates) => {
    setUiState((prev) => ({ ...prev, ...updates }));
  };

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  // Prevent body scroll when overlays are open
  useEffect(() => {
    if (isSidebarOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen, isCartOpen]);

  const addToCart = (item, size = null) => {
    const newItem = {
      id: Date.now(),
      name: size ? `${item.name} (${size})` : item.name,
      price: size ? item.prices[size] : item.price,
      quantity: 1,
      description: item.description || "",
    };
    dispatch(addItem(newItem));
  };

  const updateCartItem = (id, updates) => {
    dispatch(updateItem({ id, updates }));
  };

  const removeFromCart = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="min-h-screen bg-gray-50 md:bg-white">
      {/* Header */}
      <div className="mb-4 md:mb-8 px-2">
        <Header />
        <div className="hidden md:block">
          <Searchbar />
        </div>
      </div>

      {/* Mobile Navigation Bar - Menu Only */}
      <div className="md:hidden sticky top-0 z-30 bg-white shadow-lg px-2 border-b mb-4">
        {/* Menu Button */}
        <button
          onClick={() => updateUiState({ isSidebarOpen: !isSidebarOpen })}
          className="w-full px-4 py-4 font-semibold transition-all duration-200 flex items-center justify-between gap-3 relative group"
          style={{
            backgroundColor: isSidebarOpen ? "#03081F" : "#FBFBFB",
            color: isSidebarOpen ? "white" : "#03081F",
          }}
        >
          <div className="flex items-center gap-3">
            <span className="text-lg">
              <RestaurantMenu />
            </span>
            <span className="text-lg">Browse Menu Categories</span>
          </div>

          {/* Chevron icon that rotates */}
          <span
            className={`transform transition-transform duration-200 ${
              isSidebarOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>

          {/* underline animation */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-[#03081F] transform transition-transform duration-200 ${
              isSidebarOpen ? "scale-x-100" : "scale-x-0"
            }`}
          ></div>
        </button>

        {/* Active Category Indicator */}
        <div className="px-4 py-2 bg-gray-50 border-t">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Viewing:</span>
            <span className="text-sm font-semibold text-[#03081F] bg-white px-2 py-1 rounded-full">
              {selectedCategory}
            </span>
          </div>
        </div>
      </div>

      {/* Responsive Layout */}
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 px-4">
          <div className="col-span-3">
            <Sidebar
              selectedCategory={selectedCategory}
              onCategoryChange={(category) =>
                updateUiState({ selectedCategory: category })
              }
            />
          </div>
          <div className="col-span-6">
            <MenuContent
              selectedCategory={selectedCategory}
              onAddToCart={addToCart}
            />
          </div>
          <div className="col-span-3">
            <Cart />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative">
          {/* Mobile Sidebar  */}
          {isSidebarOpen && (
            <div className="fixed inset-0 z-50">
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black bg-opacity-60"
                onClick={() => updateUiState({ isSidebarOpen: false })}
              />

              {/* Sidebar Panel */}
              <div className="absolute inset-x-0 top-0 bottom-0 bg-gray-100 transform translate-x-0 shadow-2xl">
                {/* Close Button  */}
                <div className="absolute top-4 right-4 z-20">
                  <button
                    onClick={() => updateUiState({ isSidebarOpen: false })}
                    className="group relative w-10 h-10 bg-white/95 hover:bg-white backdrop-blur-sm border border-gray-200 hover:border-gray-300 rounded-lg flex items-center justify-center transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-1"
                    aria-label="Close categories"
                  >
                    <Close className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-all duration-200 group-hover:rotate-90" />

                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:to-blue-400/10 transition-all duration-300"></div>
                  </button>
                </div>

                {/* Sidebar Content  */}
                <div className="h-full pt-16 overflow-y-auto">
                  <Sidebar
                    selectedCategory={selectedCategory}
                    onCategoryChange={(category) => {
                      updateUiState({
                        selectedCategory: category,
                        isSidebarOpen: false,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Mobile Cart */}
          {isCartOpen && (
            <div className="fixed inset-0 z-50">
              {/* Backdrop */}
              <div
                className="w-full absolute inset-0 bg-black bg-opacity-60"
                onClick={() => updateUiState({ isCartOpen: false })}
              />

              {/* Cart Panel */}
              <div className="absolute inset-x-0 top-0 bottom-0 bg-gray-100 transform translate-x-0 shadow-2xl">
                {/* Close Button */}
                <div className="absolute top-4 right-4 z-20">
                  <button
                    onClick={() => updateUiState({ isCartOpen: false })}
                    className="group relative w-10 h-10 bg-white/95 hover:bg-white backdrop-blur-sm border border-gray-200 hover:border-gray-300 rounded-lg flex items-center justify-center transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-1"
                    aria-label="Close cart"
                  >
                    <Close className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-all duration-200 group-hover:rotate-90" />

                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-400/0 to-red-400/0 group-hover:from-red-400/5 group-hover:to-red-400/10 transition-all duration-300"></div>
                  </button>
                </div>

                {/* Cart Content */}
                <div className="h-full pt-16 overflow-y-auto">
                  <Cart
                    items={cartItems}
                    onUpdateItem={updateCartItem}
                    onRemoveItem={removeFromCart}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Mobile Main Content */}
          <div className="px-4 pb-6">
            <MenuContent
              selectedCategory={selectedCategory}
              onAddToCart={addToCart}
            />
          </div>
        </div>
      </div>

      {/* Floating Cart Button for Mobile */}
      {!isCartOpen && cartItems.length > 0 && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4">
          <button
            onClick={() => updateUiState({ isCartOpen: true })}
            className="w-full bg-gradient-to-r from-[#028643] to-[#02A351] text-white rounded-xl p-4 shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingBasket className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                  {cartItems.length}
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-base">View Cart</span>
                <span className="text-sm opacity-90">
                  {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span className="font-bold text-lg">₹{cartTotal.toFixed(2)}</span>
              <span className="text-xs opacity-80">Total</span>
            </div>

            {/* Subtle pulse animation */}
            <div className="absolute inset-0 rounded-xl bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </button>
        </div>
      )}

      {/* Restaurant Information Sections */}
      <div className="px-4 space-y-4 md:space-y-8 mt-8 pb-8">
        <RestaurantInfoCard />
        <RestaurantMap />
        <RestaurantReviews />
        <SimilarRestaurants />
      </div>
    </div>
  );
};

export default MenuPage;
