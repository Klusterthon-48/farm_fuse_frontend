"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrAppsRounded } from "react-icons/gr";
import { GiGreenhouse } from "react-icons/gi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GrSchedulePlay } from "react-icons/gr";
import { FaCircleChevronLeft, FaRegCalendarCheck } from "react-icons/fa6";
import { GrAnalytics } from "react-icons/gr";
import Avatar from "./Avatar";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    logo: <GrAppsRounded />,
    link: "/dashboard",
    title: "Dashboard",
  },
  {
    logo: <GiGreenhouse />,
    link: "/dashboard/my-farm",
    title: "My Farm",
  },
  {
    logo: <TiWeatherPartlySunny />,
    link: "/dashboard/weather",
    title: "Weather",
  },
  {
    logo: <GrSchedulePlay />,
    link: "/dashboard/planting-schedule",
    title: "Planting Schedule",
  },
  {
    logo: <FaRegCalendarCheck />,
    link: "/dashboard/harvesting-schedule",
    title: "Harvesting Schedule",
  },
  {
    logo: <GrAnalytics />,
    link: "/dashboard/analytics",
    title: "Analytics",
  },
];

const Sidebar = () => {
  const path = usePathname();
  console.log(path);
  const [toggleSidebar, setToggleSidebar] = React.useState(false);

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <div
      className={`${
        toggleSidebar ? "w-fit" : "min-w-[310px]"
      }  transition-min-w duration-200 top-0  
      
       h-screen bg-black-2 relative`}
    >
      <div className={`${toggleSidebar ? "hidden" : "block"} p-[35px]`}>
        <Image
          src="/sidebar_images/farmfuse-logo.svg"
          alt="farmfuse logo"
          width={200}
          height={200}
        />
      </div>
      <button onClick={handleToggleSidebar}>
        <div
          className={
            "absolute chevron right-[-5px] rounded-full p-[1px] bg-grey-1 border border-[#307C31]"
          }
        >
          {toggleSidebar ? (
            <IoChevronForwardSharp className="text-secondary " />
          ) : (
            <IoChevronBackSharp className="text-secondary " />
          )}
        </div>
      </button>
      <div className="flex gap-1 px-[35px] pb-[35px]">
        <div className="dot bg-[#FF5A52]" />
        <div className="dot bg-[#E6C02A]" />
        <div className="dot bg-[#53C22B]" />
      </div>
      <div className="pl-[35px]">
        <p
          className={`text-[11px] text-[rgba(255,255,255,0.32)] mb-3 pl-[50px] ${
            toggleSidebar ? "hidden" : "block"
          }`}
        >
          FARMER
        </p>
        <div className="text-white flex gap-3">
          <Avatar title={"Andrew Smith"} />
          <p className={`${toggleSidebar ? "hidden" : "block"}`}>
            Andrew Smith
          </p>
        </div>
        <hr
          className={`my-[16.5px] hr border-[#ffffff1b]  ${
            toggleSidebar ? "max-w-[20px]" : "max-w-[200px]"
          } `}
        />
        {/* <hr className="mb-[16.5px] border-[#ffffff1b] max-w-[200px]" /> */}
        <p
          className={`text-[11px] text-[rgba(255,255,255,0.32)] mb-4 ${
            toggleSidebar ? "pl-2" : "pl-[30px]"
          } `}
        >
          MAIN
        </p>
        <div className="flex gap-3 flex-col">
          {navLinks.map((item) => (
            <div key={item.title}>
              <Link href={item.link}>
                <div
                  className={`flex ${
                    toggleSidebar ? "w-fit" : "w-[90%]"
                  } group-hover:bg-radial ${
                    path === item.link ? "link-active" : ""
                  } link-hover hover:bg-radial items-center gap-2 text-grey-3 border border-transparent z-10 p-3`}
                >
                  <div className="text-2xl">{item.logo}</div>
                  <p className={`${toggleSidebar ? "hidden" : "block"}`}>
                    {item.title}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
