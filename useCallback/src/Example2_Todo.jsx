import React, { useState, useCallback } from "react";


const AddTodo = React.memo(({ onAdd }) => {
  console.log(" AddTodo Rendered");

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input); 
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
        className="border px-3 py-2 rounded mr-2"
      />
      <button className="!bg-green-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
});

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0); 

  //  Memoized addTodo function
  const addTodo = useCallback(
    (text) => {
      setTodos((prev) => [...prev, text]);
    },
    [] 
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">📝 Todo List</h2>
      <AddTodo onAdd={addTodo} />
      <ul className="list-disc pl-5">
        {todos.map((todo, idx) => (
          <li key={idx} className="mb-1">{todo}</li>
        ))}
      </ul>
      <button
        onClick={() => setCounter((c) => c + 1)}
        className="mt-6 !bg-blue-500 text-white px-4 py-2 rounded"
      >
        Update Unrelated State ({counter})
      </button>
    </div>
  );
}

export default TodoApp;
