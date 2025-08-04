// Dashboard.jsx
import React, { useContext } from "react";
import { RoleContext } from "./RoleContext";

const Dashboard_role = () => {
  const { role } = useContext(RoleContext);

  return (
    <div>
      <h2>Welcome, {role}!</h2>

      {role === "admin" && (
        <div>
          <h3>🔐 Admin Controls:</h3>
          <ul>
            <li>Delete User</li>
            <li>Manage Settings</li>
          </ul>
        </div>
      )}

      {role === "user" && (
        <div>
          <h3>📋 User Dashboard:</h3>
          <ul>
            <li>View Profile</li>
            <li>Check Orders</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard_role;
