import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseItem = (product) => {
    setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseItem = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem.quantity > 1) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item));
    } else {
      removeItem(product);
    }
  };

  const removeItem = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseItem, decreaseItem, removeItem, totalCost }}>
      {children}
    </CartContext.Provider>
  );
};
