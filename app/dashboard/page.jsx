"use client";

import React, { useState } from "react";
import Sidebar from "../components/dashboard_components/Sidebar";
import Navbar from "../components/dashboard_components/Navbar";
import MainContent from "../components/dashboard_components/MainContent";

export default function Dashboard() {
  // const [selectedItem, setSelectedItem] = useState("home");

  // const handleItemClick = (item) => {
  //   setSelectedItem(item);
  // };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-white mx-[50px]">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
}
