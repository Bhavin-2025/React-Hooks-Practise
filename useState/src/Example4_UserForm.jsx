import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit=()=>{
    if(name&&email){
        setSubmitted(true);
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <input
        type="text"
        className="border px-4 py-2 rounded w-full mb-3"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        className="border px-4 py-2 rounded w-full mb-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button  className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>Submit</button>

          {submitted && (
        <div className="mt-4 bg-green-300 p-3 rounded">
          <p><strong>Username:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm