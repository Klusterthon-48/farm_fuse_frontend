import React from "react";
import Sidebar from "./Sidebar";
import AuthNav from "./AuthNav";

const AuthWrapper = ({ children }) => {
  return (
    <div className="flex gap-10">
      <Sidebar />
      <div className="w-screen mr-10">
        <AuthNav />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default AuthWrapper;
