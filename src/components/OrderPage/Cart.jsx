// components/Cart.js
import React, { useState } from "react";
import {
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import {
  ShoppingBasket,
  Add,
  Remove,
  Delete,
  LocalOffer,
  DeliveryDining,
  LocationOn,
  Info,
  DeleteForever,
} from "@mui/icons-material";

const Cart = ({ items, onUpdateItem, onRemoveItem }) => {
  const [couponDialog, setCouponDialog] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  // Calculate totals
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = -3.0;
  const deliveryFee = 2.5;
  const total = subtotal + discount + deliveryFee;

  const handleQuantityChange = (id, change) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      onUpdateItem(id, { quantity: Math.max(0, item.quantity + change) });
    }
  };

  const applyCoupon = () => {
    // Add your coupon logic here
    console.log("Applying coupon:", couponCode);
    setCouponDialog(false);
    setCouponCode("");
  };

  return (
    <div className="w-75 bg-white min-h-screen sticky top-0 border-l flex flex-col">
      {/* Cart Header */}
      <div className="bg-[#028643] text-white p-4 flex items-center gap-8">
        <ShoppingBasket className="w-6 h-6" />
        <span className="font-semibold text-lg">My Basket</span>
      </div>

      {/* Cart Items - Scrollable */}
      <div className="flex-1 p-4 space-y-6 overflow-y-auto bg-[#F9F9F9] max-h-96">
        {items.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <ShoppingBasket className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>Your basket is empty</p>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between border-b pb-3"
            >
              {/* Left: Quantity Badge */}
              <div className="w-10 h-10 bg-[#3AA1C4CC] rounded-full flex items-center justify-center text-white font-bold text-sm">
                {item.quantity}x
              </div>

              {/* Middle: Item Details */}
              <div className="flex-1 px-3 overflow-hidden">
                <div className="text-green-600 font-bold text-base">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>
                <h4 className="font-bold text-sm text-[#1E1E1E] truncate">
                  {item.name}
                </h4>
              </div>

              {/* Right: Quantity + Delete */}
              <div className="flex items-center gap-1">
                {/* - Button */}
                <IconButton
                  size="small"
                  onClick={() =>
                    onUpdateItem(item.id, {
                      quantity: Math.max(1, item.quantity - 1),
                    })
                  }
                  className="w-7 h-7 bg-gray-200 hover:bg-gray-300"
                >
                  <Remove className="w-4 h-4 text-gray-700" />
                </IconButton>

                {/* + Button */}
                <IconButton
                  size="small"
                  onClick={() =>
                    onUpdateItem(item.id, { quantity: item.quantity + 1 })
                  }
                  className="w-7 h-7 bg-gray-200 hover:bg-gray-300"
                >
                  <Add className="w-4 h-4 text-gray-700" />
                </IconButton>

                {/* Delete Button */}
                <IconButton
                  size="small"
                  onClick={() => onRemoveItem(item.id)}
                  className="w-7 h-7 bg-gray-200 hover:bg-gray-300"
                >
                  <DeleteForever className="w-4 h-4 text-gray-700" />
                </IconButton>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Order Summary */}
      <div className="p-4 border-t space-y-3 bg-[#F9F9F9]">
        <div className="flex justify-between text-base text-black font-bold">
          <span>Sub Total:</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-base text-black font-bold">
          <span>Discounts:</span>
          <span>{discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-base text-black font-bold">
          <span>Delivery Fee:</span>
          <span>₹{deliveryFee.toFixed(2)}</span>
        </div>

        {/* Highlighted Total - Full Width, Separate Section */}
        <div className="border-t pt-4">
          <div className="w-full bg-[#3AA1C4CC] text-white font-bold text-lg rounded-lg flex justify-between items-center px-6 py-3">
            <span>Total to pay</span>
            <span className="text-xl">₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Actions Section */}
      <div className="p-4 space-y-3 bg-gray-50 border-t">
        {/* Free Item Selection */}
        <div className="text-sm text-gray-600 flex items-center justify-between">
          <span>Choose your free item</span>
          <IconButton size="small" className="text-gray-500">
            <Info className="w-4 h-4" />
          </IconButton>
        </div>

        {/* Coupon Code Button */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<LocalOffer />}
          onClick={() => setCouponDialog(true)}
          className="border-green-300 text-green-600 hover:border-green-400 hover:bg-green-50"
        >
          Apply Coupon Code Here
        </Button>

        {/* Delivery Options */}
        <div className="flex gap-2">
          <Button
            variant="outlined"
            className="flex-1 flex-col p-3 h-auto border-gray-300 hover:border-gray-400 hover:bg-gray-50"
          >
            <DeliveryDining className="w-6 h-6 mb-1 text-gray-600" />
            <span className="text-xs font-medium">Delivery</span>
            <span className="text-xs text-gray-500">Rush at 7 PM</span>
          </Button>
          <Button
            variant="outlined"
            className="flex-1 flex-col p-3 h-auto border-gray-300 hover:border-gray-400 hover:bg-gray-50"
          >
            <LocationOn className="w-6 h-6 mb-1 text-gray-600" />
            <span className="text-xs font-medium">Collection</span>
            <span className="text-xs text-gray-500">Rush in 30 Min</span>
          </Button>
        </div>

        {/* Checkout Button */}
        <Button
          variant="contained"
          fullWidth
          size="large"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-lg"
          disabled={items.length === 0}
        >
          Checkout!
        </Button>
      </div>

      {/* Coupon Dialog */}
      <Dialog
        open={couponDialog}
        onClose={() => setCouponDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Apply Coupon Code</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            margin="normal"
            placeholder="e.g. SAVE20"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCouponDialog(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={applyCoupon}
            className="bg-green-600 hover:bg-green-700"
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cart;
