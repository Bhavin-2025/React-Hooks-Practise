import { useReducer } from "react";

const initailState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };

    case "Decrement":
      return { count: state.count - 1 };
    case "Reset":
      return { count: 0 };

    default:
      return state;
  }
}
export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initailState);

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl">Count: {state.count}</h2>
      <div className="space-x-2">
        <button className="!bg-green-400 hover:!bg-green-200"onClick={() => dispatch({ type: "Increment" })}>
          Increment
        </button>
        <button className="!bg-red-400  hover:!bg-red-200" onClick={() => dispatch({ type: "Decrement" })}>
          Decrement
        </button>
        <button className="!bg-blue-400  hover:!bg-blue-200"onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      </div>
    </div>
  );
}
