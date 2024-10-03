import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

const Dashboard = () => {
  const userRole = "admin"; // Fetch user role from state or session

  return (
    <div className="flex">
      <Sidebar userRole={userRole} />
      <div className="flex-1 ">
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;
