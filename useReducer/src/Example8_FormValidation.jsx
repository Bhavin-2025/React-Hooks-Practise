import { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        error: "", // clear error while typing
      };

    case "SUBMIT":
      if (!state.email || state.password.length < 6) {
        return {
          ...state,
          error:
            !state.email
              ? "Email is required"
              : "Password must be at least 6 characters",
        };
      }
      alert("Form submitted successfully!");
      return initialState;

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        className="!bg-white p-6 rounded shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">Login</h2>

        {state.error && (
          <p className="text-red-600 mb-2">{state.error}</p>
        )}

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2 rounded"
            value={state.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border px-3 py-2 rounded"
            value={state.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 !bg-blue-600 text-white rounded !hover:bg-blue-700"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "RESET" })}
            className="px-4 py-2 !bg-gray-300 rounded hover:!bg-gray-400"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
