import Image from "next/image";
import React from "react";
import logo from "../../public/navbar_images/logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <main>
      <div className="flex flex-wrap justify-around bg-primary py-3 text-white text-sm">
        <div>Data-driven agriculture</div>
        <div>Predictive analytics</div>
        <div>Resource optimization</div>
        <div>Variable rate technology</div>
        <div>Predictive analytics</div>
      </div>
      <div className="flex w-[90%] max-w-[1200px] font-[500] text-black-3  justify-between bg-transparent items-center py-4 text-[16px] mx-auto">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <div className=" ">
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

        <div>
          <button className="me-3 p-2">Log In</button>
          <button className="bg-primary rounded-md text-white p-2 ms-3">
            Sign Up
          </button>
        </div>
      </div>
    </main>
  );
}
