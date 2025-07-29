import { useReducer } from 'react';

const initialState = {
  step: 1,
  fullName: '',
  email: '',
  phone: '',
  submitted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };

    case 'NEXT_STEP':
      return { ...state, step: state.step + 1 };

    case 'PREV_STEP':
      return { ...state, step: state.step - 1 };

    case 'SUBMIT':
      return { ...state, submitted: true };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT' });
  };

  if (state.submitted) {
    return (
      <div className="p-6 max-w-md mx-auto !bg-green-100 rounded">
        <h2 className="text-2xl font-bold mb-4">Submission Successful 🎉</h2>
        <p><strong>Name:</strong> {state.fullName}</p>
        <p><strong>Email:</strong> {state.email}</p>
        <p><strong>Phone:</strong> {state.phone}</p>
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="mt-4 px-4 py-2 !bg-blue-600 text-white rounded"
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Step {state.step}</h2>

      {state.step === 1 && (
        <div className="mb-4">
          <label className="block mb-1">Full Name</label>
          <input
            name="fullName"
            value={state.fullName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      )}

      {state.step === 2 && (
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            name="email"
            value={state.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      )}

      {state.step === 3 && (
        <div className="mb-4">
          <label className="block mb-1">Phone</label>
          <input
            name="phone"
            value={state.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      )}

      <div className="flex justify-between mt-4">
        {state.step > 1 && (
          <button
            type="button"
            onClick={() => dispatch({ type: 'PREV_STEP' })}
            className="px-4 py-2 !bg-gray-300 rounded hover:!bg-gray-400"
          >
            Back
          </button>
        )}

        {state.step < 3 ? (
          <button
            type="button"
            onClick={() => dispatch({ type: 'NEXT_STEP' })}
            className="ml-auto px-4 py-2 !bg-blue-600 text-white rounded hover:!bg-blue-700"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="ml-auto px-4 py-2 !bg-green-600 text-white rounded hover:!bg-green-700"
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
}

export default MultiStepForm;
