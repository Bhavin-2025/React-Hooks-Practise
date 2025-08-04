import React, { useState, useMemo } from "react";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Apple", price: 30, quantity: 2 },
    { id: 2, name: "Banana", price: 10, quantity: 5 },
    { id: 3, name: "Milk", price: 50, quantity: 1 },
  ]);
  
  const totalPrice = useMemo(() => {
    console.log(" Recalculating total...");
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} — ₹{item.price} × {item.quantity}
          </li>
        ))}
      </ul>

      <p> Total Price: ₹{totalPrice}</p>

    
    </div>
  );
}


