"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/auth_images/logo.png";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError(null);


   
    if (password !== confirmPassword) {
      setIsLoading(false);
      setError("Passwords do not match");
      return;
    }
      const response = await axios.post(
        "https://farm-fuse-backend.vercel.app/api/register",
        { name, username, email, password }
      );

     
      const json = response.data;

      if (response.status === 200) {
        dispatch(setName(name));
        setIsLoading(false);
        router.push("/login");
      } else {
        setIsLoading(false);
        setError(json.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };
console.log(name);
console.log(email);
console.log(password);
console.log(error);
  return (
    <main className="bg-accent-1 p-5 sm:p-10 py-24">
      <section className="grid sm:grid-cols-2 gap-8 sm:text-sm md:text-base lg:text-base">
        <div>
          <Image src={logo} alt="logo" width={50} height={50} />
          <h4 className="text-2xl sm:text-2xl text-black-3 py-5">Sign Up</h4>
          <form>
            <div className="flex flex-wrap justify-between">
              <div className="w-full sm:w-5/12">
                <p className="text-[#828282] pb-3 uppercase">Name</p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-transparent border-b w-full sm:w-[98%] text-[#E0E0E0] outline-0"
                  id="name"
                  name="name"
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full sm:w-5/12">
                <p className="text-[#828282] pb-3 uppercase">Username</p>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="bg-transparent border-b w-full sm:w-[98%] text-[#E0E0E0] outline-0"
                  id="username"
                  name="username"
                  autoComplete="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-[#828282] pb-3 uppercase">Email</p>
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent border-b w-full text-[#E0E0E0] outline-0"
                id="email"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap justify-between mt-5">
              <div className="w-full sm:w-5/12">
                <p className="text-[#828282] pb-3 uppercase">Password</p>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="bg-transparent border-b w-full sm:w-[98%] text-[#E0E0E0] outline-0"
                  id="password"
                  name="password"
                  autoComplete="password"
                  onChange={(e) => setPassword(e.target.value)}
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
                  id="confirmPassword"
                  name="confirmPassword"
                  autoComplete="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="my-7 flex items-center">
              <input type="checkbox" />
              <small className="ms-2 text-gray3">
                I Agree to Terms and Privacy
              </small>
            </div>
            <div className="flex flex-wrap justify-center mb-5 mt-3">
              <button
                onClick={handleRegister}
                className="bg-primary rounded-md text-white p-2 px-8 font-bold"
              >
                {isLoading ? "Creating..." : "Create Account"}
              </button>
            </div>
          </form>
          {error && (
            <p className="text-red-500 text-sm text-center font-bold">
              {error}
            </p>
          )}
          <p className="text-center text-sm text-gray3 mt-5">
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
