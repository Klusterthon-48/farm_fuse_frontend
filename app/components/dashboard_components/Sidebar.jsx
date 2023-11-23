import React from "react";
import { FaRegSun } from "react-icons/fa";
import {
  FaCalendar,
  FaCheck,
  FaChartBar,
  FaPlus,
  FaUser,
  FaHouse,
} from "react-icons/fa6";
import Image from "next/image";
import logo from "../../../public/dashboard_images/logo.png";

export default function Sidebar({ selectedItem, onItemClick }) {
  const menuItems = [
    { id: "dashboard", text: "Dashboard", icon: <FaHouse /> },
    { id: "myFarm", text: "My Farm", icon: <FaUser /> },
    { id: "weather", text: "Weather", icon: <FaRegSun /> },
    {
      id: "planningSchedule",
      text: "Planning Schedule",
      icon: <FaCalendar />,
    },
    {
      id: "harvestingSchedule",
      text: "Harvesting Schedule",
      icon: <FaCheck />,
    },
    { id: "analytics", text: "Analytics", icon: <FaChartBar /> },
  ];

  return (
    <div className="sidebar bg-black-3 text-white min-h-screen flex flex-col lg:w-60 p-5">
      <div className="lg:flex-shrink-0 relative">
        <div className="py-4 mb-4">
          <Image src={logo} alt="Logo" width={100} heigth={150} />
        </div>

        <div className=" flex flex-wrap mb-8">
          <div className="h-3 w-3 bg-primary rounded-full inline-block mx-1"></div>
          <div className="h-3 w-3 bg-yellow-500 rounded-full inline-block mx-1"></div>
          <div className="h-3 w-3 bg-secondary rounded-full inline-block mx-1"></div>
        </div>

        <div className="flex flex-wrap">
          <div className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center  mt-2 me-2">
            <span className="text-black font-bold">AS</span>
          </div>
          <div>
            <p className="text-sm text-gray3">Farmer</p>
            <h5 className="text-lg font-semibold">Andrew Smith</h5>
          </div>
        </div>

        <p className="text-sm mt-4 mb-2 text-gray3">Main</p>

        <ul className="py-4">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`py-2 cursor-pointer ${
                selectedItem === item.id ? "bg-gray-700" : ""
              }`}
              onClick={() => onItemClick(item.id)}
            >
              <div className="flex flex-wrap items-center text-gray3">
                <span className=" mr-3">{item.icon}</span>

                <span className="hidden lg:inline">{item.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-4 lg:mt-auto text-center ">
        <div className="mb-4 bg-black-3 border border-grey3 rounded-3xl p-4">
          <h4 className="text-base font-bold mb-2">Let&apos;s Start</h4>
          <p className="text-[13px] text-gray3">
            Adding new location/crops couldn&apos;t be easier
          </p>
          <button className="bg-primary text-sm text-white py-3 px-5 rounded-lg my-3 lg:mr-2">
            <FaPlus className="inline mr-1" />
            Select Location
          </button>

          <button className="bg-primary text-white py-3 text-sm px-8 rounded-lg ">
            <FaPlus className="inline mr-1" />
            Select Crops
          </button>
        </div>
      </div>
    </div>
  );
}
