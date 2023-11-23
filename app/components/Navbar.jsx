"use client";

import Image from "next/image";
import React from "react";
import logo from "../../public/navbar_images/logo.png";
import Link from "next/link";
import Slider from "./homepage_components/Slider";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleShow = () => {
    setShowMenu(!showMenu);
  };
  return (
    <main>
      <Slider />
      <div className="flex w-[90%] max-w-[1200px] font-[500] text-black-3  justify-between bg-transparent items-center py-4 text-[16px] mx-auto">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="hidden lg:flex ">
          <Link href="/" className="mx-2">
            Home
          </Link>
          <Link href="/" className="mx-2">
            Features
          </Link>
          <Link href="/" className="mx-2">
            Blog
          </Link>
          <Link href="/" className="mx-2">
            Benefits
          </Link>
          <Link href="/" className="mx-2">
            About us
          </Link>
        </div>
        {/* Mobile Menu */}
        {/* {showMenu && ( */}
        <div
          className={`flex flex-col gap-6 absolute items-center right-0 transition-transform duration-200 top-[55px] ${
            showMenu ? "translate-x-0" : "translate-x-full"
          } ${
            showMenu ? "flex" : "hidden"
          } bg-accent-1 px-10 pb-10 pt-4  shadow-lg`}
        >
          <button className="flex self-start " onClick={handleShow}>
            <IoCloseSharp className="text-2xl" />
          </button>
          <Link onClick={handleShow} href="/" className="mx-2">
            Home
          </Link>
          <Link onClick={handleShow} href="/" className="mx-2">
            Features
          </Link>
          <Link onClick={handleShow} href="/" className="mx-2">
            Blog
          </Link>
          <Link onClick={handleShow} href="/" className="mx-2">
            Benefits
          </Link>
          <Link onClick={handleShow} href="/" className="mx-2">
            About us
          </Link>
          <Link href="/login" onClick={handleShow} className="mx-2 md:hidden">
            Log In
          </Link>
          <Link
            onClick={handleShow}
            href="/signup"
            className="md:hidden mx-2 p-3 bg-primary rounded-md text-white"
          >
            Sign Up
          </Link>
        </div>
        {/* )} */}

        <div className="flex gap-4">
          <div className="hidden md:flex">
            <Link href="/login" className="me-3 p-2 ">
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-primary rounded-md text-white p-2 ms-3"
            >
              Sign Up
            </Link>
          </div>
          <button className="lg:hidden" onClick={handleShow}>
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>
      </div>
    </main>
  );
}
