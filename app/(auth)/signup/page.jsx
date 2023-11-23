import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../public/auth_images/logo.png";

export default function Signup() {
  return (
    <main className="bg-accent-1 p-5 sm:p-10 py-24">
      <section className="grid sm:grid-cols-2 gap-8 sm:text-sm md:text-base lg:text-base">
        <div>
          <Image src={logo} alt="logo" width={50} height={50} />
          <h4 className="text-2xl sm:text-2xl text-black-3 py-5">Sign Up</h4>
          <form>
            <div className="flex flex-wrap justify-between">
              <div className="w-full sm:w-5/12">
                <p className="text-[#828282] pb-3 uppercase">First Name</p>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="bg-transparent border-b w-full sm:w-[98%] text-[#E0E0E0] outline-0"
                />
              </div>
              <div className="w-full sm:w-5/12">
                <p className="text-[#828282] pb-3 uppercase">Last Name</p>
                <input
                  type="text"
                  placeholder="Enter Last name"
                  className="bg-transparent border-b w-full sm:w-[98%] text-[#E0E0E0] outline-0"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-[#828282] pb-3 uppercase">Username/Email</p>
              <input
                type="text"
                placeholder="Enter your mail/username"
                className="bg-transparent border-b w-full text-[#E0E0E0] outline-0"
              />
            </div>

            <div className="flex flex-wrap justify-between mt-5">
              <div className="w-full sm:w-5/12">
                <p className="text-[#828282] pb-3 uppercase">Password</p>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="bg-transparent border-b w-full sm:w-[98%] text-[#E0E0E0] outline-0"
                />
              </div>
              <div className="w-full sm:w-5/12">
                <p className="text-[#828282] pb-3 uppercase">
                  Confirm Password
                </p>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="bg-transparent border-b w-full sm:w-[98%] text-[#E0E0E0] outline-0"
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
              <button className="bg-primary rounded-md text-white p-2 px-8 font-bold mb-5">
                Create Account
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
        <div className="bg-primary flex items-center text-white">
          <div className="px-5 sm:px-20">
            <p className="text-sm sm:text-base">WELCOME TO</p>
            <h3 className="text-xl sm:text-3xl py-5">Farmfuse</h3>
            <div className="border-b-white w-10 sm:w-20 border mb-5"></div>
            <small className="text-xs sm:text-sm">
              Create your account to access the dashboard
            </small>
          </div>
        </div>
      </section>
    </main>
  );
}
