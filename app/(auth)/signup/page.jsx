import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../public/auth_images/logo.png";
import overlay from "../../../public/auth_images/overlay.svg";

export default function Signup() {
  return (
    <main className="bg-accent-1  h-screen w-full">
      <section className="flex h-screen text-[16px]">
        <div className="w-full md:w-1/2 pl-[10%] md:pl-[50px] pr-[10%] md:pr-[50px] flex flex-col justify-center">
          <Link href="/">
            <Image src={logo} alt="logo" width={50} height={50} />
          </Link>
          <h4 className="text-2xl text-black-3 py-[50px]">Sign Up</h4>
          <form>
            <div className="flex  flex-col lg:flex-row justify-between lg:mb-[50px]">
              <div className="w-full lg:w-[45%] mb-[40px] lg:mb-0">
                <p className="text-[#828282] pb-3 uppercase">First Name</p>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="bg-transparent border-b w-full sm:w-[98%] text-black-3 outline-0 border-primary"
                />
              </div>
              <div className="w-full lg:w-[45%] mb-[40px] lg:mb-0">
                <p className="text-[#828282] pb-3 uppercase">Last Name</p>
                <input
                  type="text"
                  placeholder="Enter Last name"
                  className="bg-transparent border-b w-full sm:w-[98%] text-black-3 outline-0 border-primary "
                />
              </div>
            </div>
            <div className="mt-5 mb-[50px]">
              <p className="text-[#828282] pb-3 uppercase">Username/Email</p>
              <input
                type="text"
                placeholder="Enter your mail/username"
                className="bg-transparent border-b w-full text-black-3 outline-0 border-primary "
              />
            </div>

            <div className="flex flex-wrap justify-between mt-5">
              <div className="w-full lg:w-[45%]  mb-[40px] lg:mb-0">
                <p className="text-[#828282] pb-3 uppercase">Password</p>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="bg-transparent border-b w-full sm:w-[98%] text-black-3 outline-0 border-primary "
                />
              </div>
              <div className=" w-full lg:w-[45%]  mb-[40px] lg:mb-0">
                <p className="text-[#828282] pb-3 uppercase">
                  Confirm Password
                </p>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="bg-transparent border-b w-full sm:w-[98%] text-[#E0E0E0] outline-0 border-primary"
                />
              </div>
            </div>

            <div className="my-7 flex items-center">
              <input type="checkbox" />
              <small className="ms-2 text-grey-3">
                I Agree to Terms and Privacy
              </small>
            </div>
            <div className="flex flex-wrap justify-center mb-5 mt-3">
              <button className="bg-primary rounded-md text-white py-4 px-[10%] font-medium mb-5">
                CREATE ACCOUNT
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-grey-3">
            Already have an account?
            <Link href="/login" className="text-primary underline">
              Sign in
            </Link>
          </p>
        </div>
        <div className=" h-screen w-1/2 hidden   text-white login-grad md:flex pt-[204px] relative">
          <Image
            src={overlay}
            alt="logo"
            width={200}
            height={200}
            className="opacity-[0.2] absolute top-9 right-[30%]"
          />
          <div className="px-5 sm:px-20">
            <p className="text-sm sm:text-base">WELCOME TO</p>
            <h3 className="text-4xl py-5 font-medium">Farmfuse</h3>
            <div className="border-b-white w-10 sm:w-20 border mb-5" />
            <small className="text-xs sm:text-sm">
              Create your account to access the dashboard
            </small>
          </div>
        </div>
      </section>
    </main>
  );
}
