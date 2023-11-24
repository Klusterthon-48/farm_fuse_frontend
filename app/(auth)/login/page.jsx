import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../public/auth_images/logo.png";
import overlay from "../../../public/auth_images/overlay.svg";

export default function Login() {
  return (
    <main className="bg-accent-1 h-screen w-full">
      <section className="flex h-screen text-[16px]">
        <div className="w-full md:w-1/2 pl-[10%] md:pl-[50px] pr-[10%] md:pr-[10%] flex flex-col justify-center">
          <Link href="/">
            <Image src={logo} alt="logo" width={50} height={50} />
          </Link>
          <h4 className="text-2xl text-black-3 py-[50px]">Log In</h4>
          <form>
            <p className=" text-[#828282] pb-4 text-[16px]">EMAIL/USERNAME</p>
            <input
              type="text"
              placeholder="Enter your email/username"
              className="bg-transparent border-b border-primary w-[100%] text-black-3 outline-0 mb-[50px]"
            />
            <div className="mt-5">
              <p className=" text-[#828282] text-[16px] pb-4">PASSWORD</p>
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent border-b border-primary w-[100%] text-black-3 outline-0"
              />
            </div>

            <div className="my-6 flex items-center">
              <input type="checkbox" />
              <small className="ms-2 text-grey-3">Remember Me</small>
            </div>
            <div className="flex flex-wrap justify-between mb-12 items-center gap-6">
              <button className="bg-primary rounded-md text-white p-2 px-10 font-bold">
                Login
              </button>
              <Link href="/signup">
                <button className="border border-secondary p-2 px-4 text-primary rounded-md">
                  Create Account
                </button>
              </Link>
            </div>
          </form>
          <p className="text-center text-sm text-grey-3">
            Forget your password?{" "}
            <a href="#" className="text-primary underline">
              Get help signing in
            </a>
          </p>
        </div>
        <div className=" h-screen w-1/2 hidden text-white signup-grad md:flex pt-[204px] relative">
          <Image
            src={overlay}
            alt="logo"
            width={200}
            height={200}
            className="opacity-[0.2] absolute top-9 right-[30%]"
          />
          <div className="px-20">
            <p className=" ">WELCOME TO</p>
            <h3 className="text-4xl py-5 font-medium">Farmfuse</h3>
            <div className="border-b-white w-20 border mb-5"></div>
            <small>Login to access Dashboard</small>
          </div>
        </div>
      </section>
    </main>
  );
}
