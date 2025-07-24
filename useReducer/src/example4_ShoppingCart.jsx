import { useReducer } from "react";

const initialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export default function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialState); 

  const addFruit = () => {
    const newFruit = {
      id: Date.now(),
      name: "Apple", // 
    };
    dispatch({ type: "ADD", payload: newFruit });
  };

  const removeFruit = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div>
      <h2>🛒 Your Cart</h2>
      <button onClick={addFruit}>Add Apple</button>
      <button onClick={clearCart}>Clear Cart</button>

      {cart.length === 0 ? ( 
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((fruit) => (
            <li key={fruit.id}>
              {fruit.name}
              <button onClick={() => removeFruit(fruit.id)}>❌ Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
