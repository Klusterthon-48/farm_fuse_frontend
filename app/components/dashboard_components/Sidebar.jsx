"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { GrAppsRounded } from "react-icons/gr";
import { GiGreenhouse } from "react-icons/gi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GrSchedulePlay } from "react-icons/gr";
import { FaCircleChevronLeft, FaRegCalendarCheck } from "react-icons/fa6";
import { GrAnalytics } from "react-icons/gr";
import Avatar from "../utils/Avatar";
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
  const [userData, setUserData] = React.useState(null);

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setToggleSidebar(true);
      } else {
        setToggleSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);

  return (
    <div
      className={`${
        toggleSidebar ? "w-fit" : "min-w-[310px]"
      } transition duration-200 top-0  
      
       h-screen bg-black-2 relative`}
    >
      <Link href="/">
        <div className="p-[35px]">
          {toggleSidebar ? (
            <Image
              src="/dashboard_images/logo.svg"
              alt="farmfuse logo"
              width={50}
              height={50}
              // className="block md:hidden"
            />
          ) : (
            <Image
              src="/dashboard_images/farmfuse-logo.svg"
              alt="farmfuse logo"
              width={200}
              height={200}
              // className="hidden md:block"
            />
          )}
        </div>
      </Link>
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
          className={`text-[11px] text-[rgba(255,255,255,0.32)] mb-3  ${
            toggleSidebar ? "pl-0" : "pl-[50px]"
          }  pl-0  inline-block`}
        >
          FARMER
        </p>
        <div className="text-white flex gap-3">
          <Avatar title={userData?.name} />
          <p className={`${toggleSidebar ? "hidden" : "block"} `}>
            {userData?.name}
          </p>
        </div>
        <hr
          className={`my-[16.5px] hr border-[#ffffff1b]  ${
            toggleSidebar ? "max-w-[20px]" : "max-w-[200px]"
          }`}
        />

        <p
          className={`text-[11px] text-[rgba(255,255,255,0.32)] mb-4 ${
            toggleSidebar ? "pl-2" : "pl-[15px]"
          } inline-block`}
        >
          MAIN
        </p>
        <div className="flex gap-3 flex-col">
          {navLinks.map((item) => (
            <div key={item.title}>
              <Link
                href={item.link}
                className={`${toggleSidebar ? "inline-block" : "block"} `}
              >
                <div
                  className={`flex ${
                    toggleSidebar ? "w-fit" : "w-[90%]"
                  } group-hover:bg-radial w-fit md:w-[90%] ${
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
