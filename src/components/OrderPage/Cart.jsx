import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import {
  ShoppingBasket,
  Add,
  Remove,
  DeleteForever,
  DeliveryDining,
  LocationOn,
  ArrowForward,
  KeyboardArrowDown,
  LocalOffer,
} from "@mui/icons-material";
import { removeItem, updateItem } from "@/store/slices/cartSlice";

const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const dispatch = useDispatch();

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = -3.0;
  const deliveryFee = 2.5;
  const total = subtotal + discount + deliveryFee;

  const applyCoupon = () => {
    console.log("Applying coupon:", couponCode);
    setCouponCode("");
  };

  const handleUpdateItem = (id, updates) => {
    dispatch(updateItem({ id, updates }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="w-full md:w-75 bg-white min-h-screen md:sticky md:top-0 border-l flex flex-col">
      {/* Enhanced Mobile Cart Header */}
      <div className="bg-gradient-to-r from-[#028643] to-[#02A351] text-white p-4 md:p-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className=" bg-opacity-20 p-2 rounded-full">
            <ShoppingBasket className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div>
            <span className="font-bold text-lg md:text-lg block">
              My Basket
            </span>
            <span className="text-xs opacity-90 md:hidden">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </span>
          </div>
        </div>
        {/* Mobile: Show total in header */}
        <div className="md:hidden text-right">
          <div className="text-lg font-bold">₹{total.toFixed(2)}</div>
          <div className="text-xs opacity-90">Total</div>
        </div>
      </div>

      {/* Cart Items - Enhanced Mobile Layout */}
      <div className="flex-1 p-3 md:p-4 space-y-3 md:space-y-4 overflow-y-auto bg-[#F9F9F9] max-h-72 md:max-h-96">
        {cartItems.length === 0 ? (
          <div className="text-center py-8 md:py-8 text-gray-500">
            <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBasket className="w-8 h-8 md:w-10 md:h-10 opacity-50" />
            </div>
            <p className="text-base md:text-base font-medium">
              Your basket is empty
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Add some delicious items!
            </p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl md:rounded-lg p-3 md:p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Mobile: Vertical Layout */}
              <div className="md:hidden">
                {/* Top row: Item info and price */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="font-bold text-sm text-[#1E1E1E] leading-tight mb-1">
                      {item.name}
                    </h4>
                    {item.description && (
                      <p className="text-xs text-gray-500 line-clamp-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 font-bold text-base">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-500">
                      ₹{item.price} each
                    </div>
                  </div>
                </div>

                {/* Bottom row: Quantity controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">
                      Qty:
                    </span>
                    <div className="flex items-center bg-gray-100 rounded-full p-1">
                      <IconButton
                        size="small"
                        onClick={() =>
                          handleUpdateItem(item.id, {
                            quantity: Math.max(1, item.quantity - 1),
                          })
                        }
                        className="w-7 h-7 bg-white hover:bg-gray-50 shadow-sm"
                      >
                        <Remove className="w-3 h-3 text-gray-700" />
                      </IconButton>
                      <span className="mx-3 font-bold text-sm min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <IconButton
                        size="small"
                        onClick={() =>
                          handleUpdateItem(item.id, {
                            quantity: item.quantity + 1,
                          })
                        }
                        className="w-7 h-7 bg-white hover:bg-gray-50 shadow-sm"
                      >
                        <Add className="w-3 h-3 text-gray-700" />
                      </IconButton>
                    </div>
                  </div>

                  {/* Delete Button */}
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveItem(item.id)}
                    className="w-8 h-8 bg-red-50 hover:bg-red-100 text-red-500"
                  >
                    <DeleteForever className="w-4 h-4" />
                  </IconButton>
                </div>
              </div>

              {/* Desktop: Horizontal Layout */}
              <div className="hidden md:flex items-start justify-between border-b pb-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#3AA1C4CC] rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm flex-shrink-0">
                  {item.quantity}x
                </div>

                <div className="flex-1 px-2 md:px-3 overflow-hidden min-w-0">
                  <div className="text-green-600 font-bold text-sm md:text-base">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                  <h4 className="font-bold text-xs md:text-sm text-[#1E1E1E] truncate">
                    {item.name}
                  </h4>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0">
                  <IconButton
                    size="small"
                    onClick={() =>
                      handleUpdateItem(item.id, {
                        quantity: Math.max(1, item.quantity - 1),
                      })
                    }
                    className="w-6 h-6 md:w-7 md:h-7 bg-gray-200 hover:bg-gray-300"
                  >
                    <Remove className="w-3 h-3 md:w-4 md:h-4 text-gray-700" />
                  </IconButton>

                  <IconButton
                    size="small"
                    onClick={() =>
                      handleUpdateItem(item.id, { quantity: item.quantity + 1 })
                    }
                    className="w-6 h-6 md:w-7 md:h-7 bg-gray-200 hover:bg-gray-300"
                  >
                    <Add className="w-3 h-3 md:w-4 md:h-4 text-gray-700" />
                  </IconButton>

                  <IconButton
                    size="small"
                    onClick={() => handleRemoveItem(item.id)}
                    className="w-6 h-6 md:w-7 md:h-7 bg-gray-200 hover:bg-gray-300"
                  >
                    <DeleteForever className="w-3 h-3 md:w-4 md:h-4 text-gray-700" />
                  </IconButton>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Enhanced Order Summary */}
      <div className="p-4 md:p-4 border-t space-y-2 md:space-y-3 bg-white shadow-lg md:shadow-none">
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>
              Subtotal ({cartItems.length}{" "}
              {cartItems.length === 1 ? "item" : "items"})
            </span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-green-600">
            <span>Discount</span>
            <span>{discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Enhanced Actions Section */}
      <div className="p-4 md:p-4 bg-gray-50 border-t space-y-3 md:space-y-3">
        {/* Total to Pay - Enhanced Mobile */}
        <div className="w-full bg-gradient-to-r from-[#4CC3C3] to-[#3AA1C4] text-white font-bold rounded-2xl md:rounded-lg flex justify-between items-center px-4 py-4 md:py-3 shadow-lg">
          <span className="text-base md:text-lg">Total to pay</span>
          <span className="text-xl md:text-xl">₹{total.toFixed(2)}</span>
        </div>

        {/* Mobile: Simplified Layout */}
        <div className="md:hidden space-y-3">
          {/* Coupon Code Input - Mobile Optimized */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="w-full h-12 rounded-2xl border-2 border-gray-200 px-4 pr-16 text-sm text-gray-700 bg-white focus:border-green-500 focus:outline-none"
            />
            <button
              onClick={applyCoupon}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-green-600 text-white grid place-items-center hover:bg-green-700 transition-colors"
              aria-label="Apply coupon"
            >
              <LocalOffer fontSize="small" />
            </button>
          </div>

          {/* Delivery Options - Mobile Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="border-2 border-green-200 rounded-xl p-3 flex flex-col items-center text-green-600 bg-green-50">
              <DeliveryDining className="w-6 h-6 mb-2" />
              <span className="font-bold text-sm">Delivery</span>
              <span className="text-xs text-gray-600">17:50</span>
            </div>
            <div className="border-2 border-blue-200 rounded-xl p-3 flex flex-col items-center text-blue-600 bg-blue-50">
              <LocationOn className="w-6 h-6 mb-2" />
              <span className="font-bold text-sm">Pickup</span>
              <span className="text-xs text-gray-600">16:50</span>
            </div>
          </div>
        </div>

        {/* Desktop: Original Layout */}
        <div className="hidden md:block space-y-3">
          <div className="relative">
            <select className="w-full h-11 rounded-full border border-gray-200 px-4 pr-10 text-sm text-gray-700 bg-white appearance-none">
              <option>Choose your free item..</option>
              <option>Free Drink</option>
              <option>Free Dessert</option>
            </select>
            <KeyboardArrowDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              fontSize="small"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Apply Coupon Code here"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="w-full h-11 rounded-full border border-gray-200 px-4 pr-14 text-sm text-gray-700 bg-white"
            />
            <button
              onClick={applyCoupon}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-green-600 text-white grid place-items-center"
              aria-label="Apply coupon"
            >
              <ArrowForward fontSize="small" />
            </button>
          </div>

          <div className="flex gap-2">
            <div className="flex-1 border rounded-lg p-3 flex flex-col items-center text-green-600">
              <DeliveryDining className="w-5 h-5 mb-1" />
              <span className="font-semibold text-sm">Delivery</span>
              <span className="text-xs text-gray-500">Starts at 17:50</span>
            </div>
            <div className="flex-1 border rounded-lg p-3 flex flex-col items-center text-green-600">
              <LocationOn className="w-5 h-5 mb-1" />
              <span className="font-semibold text-sm">Collection</span>
              <span className="text-xs text-gray-500">Starts at 16:50</span>
            </div>
          </div>
        </div>

        {/* Enhanced Checkout Button */}
        <button
          disabled={cartItems.length === 0}
          className={`w-full flex items-center justify-center gap-3 font-bold text-lg py-4 md:py-3 rounded-2xl md:rounded-lg transition-all shadow-lg ${
            cartItems.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white hover:shadow-xl transform hover:scale-[1.02] md:hover:scale-100"
          }`}
        >
          <span>
            {cartItems.length === 0
              ? "Add items to checkout"
              : "Proceed to Checkout"}
          </span>
          {cartItems.length > 0 && <span className="text-xl">➔</span>}
        </button>
      </div>
    </div>
  );
};

export default Cart;
