import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../public/auth_images/logo.png";

export default function Login() {
  return (
    <main className="bg-accent-1 p-10 py-24">
      <section className="grid sm:grid-cols-2 text[16px] gap-32 ">
        <div>
          <Image src={logo} alt="logo" width={50} height={50} />
          <h4 className="text-2xl text-black-3 py-5">Log In</h4>
          <form>
            <p className=" text-[#828282] pb-3">Email/Username</p>
            <input
              type="text"
              placeholder="Enter your mail/username"
              className="bg-transparent border-b w-[100%] text-[#E0E0E0] outline-0"
            />
            <div className="mt-5">
              <p className=" text-[#828282] pb-3">Password</p>
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent border-b w-[100%] text-[#E0E0E0] outline-0"
              />
            </div>

            <div className="my-6 flex items-center">
              <input type="checkbox" />
              <small className="ms-2 text-grey-3">Remember Me</small>
            </div>
            <div className="flex flex-wrap justify-between mb-6">
              <button className="bg-primary rounded-md text-white p-2 px-10 font-bold mb-5">
                Login
              </button>
              <Link href="/signup">
                <button className="border border-secondary p-2 px-4 text-primary rounded-md ">
                  Create Account
                </button>
              </Link>
            </div>
          </form>
          <p className="text-center text-sm text-grey-3">
            Forget your password?
            <a href="#" className="text-primary underline">
              Get help signing in
            </a>
          </p>
        </div>
        <div className="bg-primary flex items-center second  text-white">
          <div className="px-20">
            <p className=" ">WELCOME TO</p>
            <h3 className="text-3xl py-5">Farmfuse</h3>
            <div className="border-b-white w-20 border mb-5"></div>
            <small>Login to access Dashboard</small>
          </div>
          <Link href="/dashboard">dashboard</Link>
        </div>
      </section>
    </main>
  );
}
