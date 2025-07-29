import { useReducer } from 'react';

const initialState = {
  isOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, isOpen: true };
    case 'CLOSE_MODAL':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

function ModalExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        className="px-4 py-2 !bg-blue-600 text-white rounded !hover:bg-blue-700"
        onClick={() => dispatch({ type: 'OPEN_MODAL' })}
      >
        Open Modal
      </button>

      {state.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md w-96 text-center">
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <p>This is a simple modal using useReducer.</p>
            <button
              className="mt-4 px-4 py-2 !bg-red-600 text-white rounded !hover:bg-red-700"
              onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalExample;
