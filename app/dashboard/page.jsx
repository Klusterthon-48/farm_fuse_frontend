"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../components/dashboard_components/Sidebar";
import Navbar from "../components/dashboard_components/Navbar";
import MainContent from "../components/dashboard_components/MainContent";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);
  return (
    <>
      <div className="flex">
        <Sidebar />
        {loading ? (
          <div className=" bg-accent-1 text-black flex justify-center items-center h-screen w-screen">
            loading...
          </div>
        ) : (
          <div className="flex-1 bg-white px-4 lg:px-[50px] overflow-scroll h-screen">
            <Navbar />
            <div className="">
              <MainContent />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
