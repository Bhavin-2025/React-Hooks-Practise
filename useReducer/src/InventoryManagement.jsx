import { useReducer } from "react";

// Initial form state
const initialFormState = {
  id: Date.now(),
  name: "",
  quantity: "",
  status: "inStock",
};

// Form reducer
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET_FORM":
      return {
        id: Date.now(),
        name: "",
        quantity: "",
        status: "inStock",
      };
    default:
      return state;
  }
}

// Inventory reducer
const initialInventoryState = [];

function inventoryReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    case "TOGGLE_STATUS":
      return state.map((item) =>
        item.id === action.id
          ? {
              ...item,
              status: item.status === "inStock" ? "outOfStock" : "inStock",
            }
          : item
      );
    default:
      return state;
  }
}

// Main component
export default function InventoryManagement() {
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const [inventory, inventoryDispatch] = useReducer(
    inventoryReducer,
    initialInventoryState
  );

  const handleAdd = () => {
    if (!formState.name.trim() || !formState.quantity) return;
    inventoryDispatch({ type: "ADD_ITEM", payload: formState });
    formDispatch({ type: "RESET_FORM" });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Inventory Management
      </h1>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium">Item Name</label>
          <input
            type="text"
            value={formState.name}
            onChange={(e) =>
              formDispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
            className="w-full p-2 border rounded"
            placeholder="Enter item name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Quantity</label>
          <input
            type="number"
            value={formState.quantity}
            onChange={(e) =>
              formDispatch({
                type: "UPDATE_FIELD",
                field: "quantity",
                value: e.target.value,
              })
            }
            className="w-full p-2 border rounded"
            placeholder="Enter quantity"
          />
        </div>
        <button
          onClick={handleAdd}
          className="w-full !bg-blue-500 text-white py-2 rounded hover:!bg-blue-600"
        >
          Add Item
        </button>
      </div>

      <hr />

      <div>
        <h2 className="text-xl font-semibold mb-3">Inventory List</h2>
        {inventory.length === 0 ? (
          <p className="text-gray-500 text-sm">No items added yet.</p>
        ) : (
          <ul className="space-y-2">
            {inventory.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-3 !bg-gray-100 rounded"
              >
                <div>
                  <p className="font-medium">
                    {item.name} - {item.quantity}
                  </p>
                  <p
                    className={`text-sm ${
                      item.status === "inStock"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.status === "inStock" ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() =>
                      inventoryDispatch({
                        type: "TOGGLE_STATUS",
                        id: item.id,
                      })
                    }
                    className="!bg-yellow-400 text-white px-3 py-1 rounded text-sm hover:!bg-yellow-500"
                  >
                    Toggle
                  </button>
                  <button
                    onClick={() =>
                      inventoryDispatch({
                        type: "REMOVE_ITEM",
                        id: item.id,
                      })
                    }
                    className="!bg-red-500 text-white px-3 py-1 rounded text-sm hover:!bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
