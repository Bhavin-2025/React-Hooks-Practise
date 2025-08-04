// Dashboard.js
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Please log in to access the dashboard.</p>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Dashboard</h2>
      <p>This is a protected area only for logged-in users.</p>
    </div>
  );
};

export default Dashboard;
