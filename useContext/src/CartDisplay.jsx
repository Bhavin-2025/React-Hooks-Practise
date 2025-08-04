// CartDisplay.jsx
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartDisplay = () => {
  const { cartCount } = useContext(CartContext);
  return <h2>🛒 Cart Items: {cartCount}</h2>;
};

export default CartDisplay;
