import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  age: "",
  phone_number: "",
  message: "",
};

function formReducer(state, action) {
  return {
    ...state,
    [action.field]: action.value,
  };
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted ✅", state);
   
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg space-y-5"
    >
      <h2 className="text-2xl font-bold text-center">Contact Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={state.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={state.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        name="age"
        placeholder="Enter your age"
        value={state.age}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="tel"
        name="phone_number"
        placeholder="Enter phone number"
        value={state.phone_number}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        name="message"
        placeholder="Enter your message"
        value={state.message}
        onChange={handleChange}
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      <button
        type="submit"
        className="w-full !bg-blue-600 text-white py-2 rounded-md hover:!bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
