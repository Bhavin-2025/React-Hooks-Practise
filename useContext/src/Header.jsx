// Header.js
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Header = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      {user ? (
        <>
          <span>Welcome, {user.name}! </span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("Bhavin")}>Login</button>
      )}
    </header>
  );
};

export default Header;
