"use client";
import Cart from '@/components/OrderPage/Cart';
import MenuContent from '@/components/OrderPage/MenuContent';
import Sidebar from '@/components/OrderPage/Sidebar';
import React, { useState } from 'react';
// import Header from '@/components/Header';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Pizzas');
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: '17" Vegetarian Pizza', 
      description: 'No mushrooms + green peppers', 
      price: 27.90, 
      quantity: 1 
    },
    { 
      id: 2, 
      name: '17" Tandoori Pizza', 
      description: 'No mushrooms + green peppers', 
      price: 17.90, 
      quantity: 1 
    },
    { 
      id: 3, 
      name: 'Coke Coca Cola', 
      price: 4.90, 
      quantity: 2 
    }
  ]);

  const addToCart = (item, size = null) => {
    const newItem = {
      id: Date.now(),
      name: size ? `${item.name} (${size})` : item.name,
      price: size ? item.prices[size] : item.price,
      quantity: 1,
      description: item.description || ''
    };
    setCartItems([...cartItems, newItem]);
  };

  const updateCartItem = (id, updates) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, ...updates } : item
    ).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <Header /> */}
      
      <div className="max-w-7xl mx-auto flex">
        {/* Left Sidebar - Menu Categories */}
        <Sidebar 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
       
        {/* Main Content Area */}
        <MenuContent
          selectedCategory={selectedCategory}
          onAddToCart={addToCart}
        />
        

        {/* Right Cart Sidebar */}
        <Cart
          items={cartItems}
          onUpdateItem={updateCartItem}
          onRemoveItem={removeFromCart}
        />
      </div>
    </div>
  );
};

export default MenuPage;