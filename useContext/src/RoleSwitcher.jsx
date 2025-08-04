// RoleSwitcher.jsx
import React, { useContext } from "react";
import { RoleContext } from "./RoleContext";

const RoleSwitcher = () => {
  const { switchToAdmin, switchToUser } = useContext(RoleContext);

  return (
    <div>
      <button onClick={switchToUser}>👤 Switch to User</button>
      <button onClick={switchToAdmin}>🛠️ Switch to Admin</button>
    </div>
  );
};

export default RoleSwitcher;
