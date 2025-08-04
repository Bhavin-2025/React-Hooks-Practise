// RoleContext.jsx
import React, { createContext, useState } from "react";

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState("user"); // default: user

  const switchToAdmin = () => setRole("admin");
  const switchToUser = () => setRole("user");

  return (
    <RoleContext.Provider value={{ role, switchToAdmin, switchToUser }}>
      {children}
    </RoleContext.Provider>
  );
};
