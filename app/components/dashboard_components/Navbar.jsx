import React from "react";
import { FaSearch, FaQuestionCircle, FaBell, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white text-black-3 p-4 flex items-center justify-around">
      <div className="flex items-center">
        <h3 className="text-lg  mr-1">Welcome Smith!</h3>
        <p className="text-gray3 text-sm mt-1">
          Let's cultivate success together.
        </p>
      </div>

      <div className="flex rounded-full bg-black-3 flex-wrap items-center">
        <FaSearch className=" text-gray-500 ms-3" />

        <input
          type="text"
          placeholder="Search"
          className=" bg-transparent border-0 outline-none text-white p-2 pl-3 "
        />
      </div>
      <div className="bg-black-3 p-2 rounded-full px-7 text-gray3 flex items-between">
        <FaQuestionCircle className=" text-xl mx-2" />
        <FaBell className=" text-lg mx-2" />
        <FaUser className=" text-lg mx-2" />
      </div>
    </nav>
  );
}
