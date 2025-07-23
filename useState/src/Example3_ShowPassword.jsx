import { useState } from "react";

function PassswordToggle() {

  const [showPassword, setshowPassword] = useState(false);
  const togglePassword = () => {
  setshowPassword(prev => !prev);
};


  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <input className="border border-gray-400 px-4 py-2 rounded w-full mb-4" type={showPassword ? "text" : "password"} placeholder="Enter your password" />
      <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-400 cursor-pointer" onClick={togglePassword}>{showPassword?"Hide Password":"Show Password"}</button>
    </div>
  );
}


export default PassswordToggle;
