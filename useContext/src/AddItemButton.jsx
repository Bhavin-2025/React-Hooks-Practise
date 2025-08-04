// AddItemButton.jsx
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const AddItemButton = () => {
  const { addToCart } = useContext(CartContext);
  return <button onClick={addToCart}>➕ Add Item</button>;
};

export default AddItemButton;
