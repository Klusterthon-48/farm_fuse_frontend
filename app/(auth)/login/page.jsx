'use client'

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/auth_images/logo.png";
import { login } from "../../redux/slices/authSlice";
import axios from "axios";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.post(
        "https://farm-fuse-backend.vercel.app/api/login",
        {
          email,
          password,
        }
      );

      const json = response.data;

      if (response.status === 200) {
        dispatch(login({ email, token: json.token }));
        router.push("/");
      } else {
        setIsLoading(false);
        setError(json.error?.message || "An error occurred");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Network error. Please try again.");
    }
  };

  return (
    <main className="bg-accent-1 p-10 py-24">
      <section className="grid sm:grid-cols-2 text[16px] gap-32">
        <div>
          <Image src={logo} alt="logo" width={50} height={50} />
          <h4 className="text-2xl text-black-3 py-5">Log In</h4>
          <form onSubmit={handleLogin}>
            <p className="text-[#828282] pb-3">Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-b w-[100%] text-[#E0E0E0] outline-0"
              id="email"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="mt-5">
              <p className="text-[#828282] pb-3">Password</p>
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent border-b w-[100%] text-[#E0E0E0] outline-0"
                id="password"
                name="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="my-6 flex items-center">
              <input type="checkbox" />
              <small className="ms-2 text-gray3">Remember Me</small>
            </div>
            <div className="flex flex-wrap justify-between">
              <button
                type="submit"
                className={`${
                  isLoading
                    ? "bg-green-200 rounded-md text-white p-2 px-10 font-bold mb-5 cursor-not-allowed"
                    : "bg-primary rounded-md text-white p-2 px-10 font-bold mb-5"
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Waiting..." : " Log in"}
              </button>
              <Link href="/signup">
                <button className="border border-secondary p-2 px-4 text-primary rounded-md ">
                  Create Account
                </button>
              </Link>
            </div>
          </form>
          {error && (
            <p className="text-red-500 text-sm font-bold text-center mt-2">
              {error}
            </p>
          )}
          <p className="text-center text-sm text-gray3  mt-6">
            Forget your password?
            <a href="#" className="text-primary underline">
              Get help signing in
            </a>
          </p>
        </div>
        <div className="bg-primary flex items-center text-white">
          <div className="px-20">
            <p>WELCOME TO</p>
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
