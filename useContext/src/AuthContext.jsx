// AuthContext.js
import React, { createContext, useState } from "react";

// 1. Create a context
export const AuthContext = createContext();

// 2. Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null = not logged in

  const login = (username) => {
    // This could be replaced with real API call
    setUser({ name: username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
