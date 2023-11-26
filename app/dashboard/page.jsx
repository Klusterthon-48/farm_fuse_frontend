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
      <div className="flex-1 bg-white px-4 lg:px-[50px] overflow-scroll h-screen">
        <Navbar />
        <div className="">
          <MainContent />
        </div>
      </div>
    </div>
  );
}
