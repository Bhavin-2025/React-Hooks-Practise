// CartContext.jsx
import React, { createContext, useState } from "react";

// Create context
export const CartContext = createContext();

// Create provider
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => setCartCount((prev) => prev + 1);
  const clearCart = () => setCartCount(0);

  return (
    <CartContext.Provider value={{ cartCount, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
