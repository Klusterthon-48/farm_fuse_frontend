"use client";

import Image from "next/image";
import React, { useState } from "react";
import Avatar from "../utils/Avatar";
import { IoChevronDownSharp } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { LuSettings } from "react-icons/lu";
import { MdPersonOutline } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import SearchPopup from "../utils/SearchPopup";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleToggleSearch = () => {
    setToggleSearch(!toggleSearch);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSearchClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <nav className="flex justify-between mt-3 items-center">
      <div className="flex-col lg:flex-row">
        <div>
          <h2 className=" text-3xl lg:text-4xl">Welcome, Smith!</h2>
        </div>
        <div className="">
          <p>Let&apos;s cultivate success together.</p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-2">
          <div
            onClick={handleSearchClick}
            className="rounded-full flex items-center justify-center bg-grey-1 w-[56px] h-[56px] text-white lg:hidden"
          >
            <BiSearch className=" left-4 text-grey-4 text-xl" />
          </div>
          <div className=" items-center relative hidden lg:flex">
            <BiSearch
              onClick={handleToggleSearch}
              className="absolute left-4 text-grey-4 text-xl"
            />
            <input
              type="text"
              placeholder="Search"
              className={`rounded-full w-full
              pl-12
             bg-grey-1 py-4 px-7  text-white outline-none`}
            />
          </div>
          <SearchPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>
        <div className="flex gap-3 items-center rounded-full bg-grey-1 px-3 relative">
          <div>
            <Image
              src="/dashboard_images/material-symbols-light_contact-support-outline.svg"
              alt="question"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div>
            <Image
              src="/dashboard_images/04.svg"
              alt="question"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex gap-5 bg-[#585858] items-center rounded-full py-2 px-2">
            <Avatar title={"Andrew Smith"} />
            <button onClick={handleToggleMenu}>
              <IoChevronDownSharp className="text-[rgba(255,255,255,0.32)]" />
            </button>
          </div>
          <div
            className={`absolute top-[66px] ${
              toggleMenu ? "flex" : "hidden"
            } right-0 w-full flex flex-col items-start rounded-[16px] bg-grey-1  text-white py-1`}
          >
            <Link
              href="/pages/profile"
              className="flex items-center gap-2 hover:bg-[rgb(56,68,48)]  w-[90%] mx-auto my-1 hover:rounded-xl py-3 pl-4"
            >
              <MdPersonOutline className="text-2xl" />
              <p>Profile</p>
            </Link>
            <Link
              href="/pages/settings"
              className="flex items-center gap-2 hover:bg-[rgb(56,68,48)]  w-[90%] mx-auto my-1 hover:rounded-xl py-3 pl-4"
            >
              <LuSettings className="text-2xl" />
              <p>Settings</p>
            </Link>
            <button className="flex items-center gap-2 hover:bg-[rgb(56,68,48)]  w-[90%] mx-auto my-1 hover:rounded-xl py-3 pl-4">
              <MdLogout className="text-2xl" />
              <div>Logout</div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
