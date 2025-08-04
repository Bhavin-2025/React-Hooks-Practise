// ClearCartButton.jsx
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const ClearCartButton = () => {
  const { clearCart } = useContext(CartContext);
  return <button onClick={clearCart}>🧹 Clear Cart</button>;
};

export default ClearCartButton;
