'use client'

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/auth_images/logo.png";
import { login } from "../../redux/slices/authSlice";
import overlay from "../../../public/auth_images/overlay.svg";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fullname = useSelector((state) => state.auth.name)
  const useremail = useSelector((state) => state.auth.email)
  const token = useSelector((state) => state.auth.token)


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
      console.log("Response status:", response.status);
      console.log("Response data:", json);

      if (response.status === 200 && json.success) {

        
     
        dispatch(
          login({
            name: json.payload.farmer.name,
            email: json.payload.farmer.email,
            token: json.payload.token,
          })
        );

        toast.success("Login successful");
        router.push("/dashboard");
      } else {
        setIsLoading(false);
        toast.error(json.message || "An error occurred");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  console.log(`fullname is: ${fullname}, useremail is: ${useremail}, token is: ${token}.`);
  return (
    <>
      <ToastContainer />
      <main className="bg-accent-1 h-screen w-full">
        <section className="flex h-screen text-[16px]">
          <div className="w-full md:w-1/2 pl-[10%] md:pl-[50px] pr-[10%] md:pr-[10%] flex flex-col justify-center">
            <Link href="/">
              <Image src={logo} alt="logo" width={50} height={50} />
            </Link>
            <h4 className="text-2xl text-black-3 py-[50px]">Log In</h4>
            <form>
              <div>
                <p className=" text-[#828282] pb-4 text-[16px]">EMAIL</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-b w-[100%] text-black-3 outline-0"
                  id="email"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-12">
                <p className=" text-[#828282] text-[16px] pb-4">PASSWORD</p>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="bg-transparent border-b w-[100%] text-black-3 outline-0"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="my-6 flex items-center">
                <input type="checkbox" />
                <small className="ms-2 text-grey-3">Remember Me</small>
              </div>
              <div className="flex flex-wrap justify-between">
                <button
                  onClick={handleLogin}
                  className={
                    isLoading
                      ? " bg-green-200 rounded-md text-white p-2 px-10 font-bold mb-5"
                      : "bg-primary }rounded-md text-white p-2 px-10 font-bold mb-5"
                  }
                >
                  {isLoading ? "Waiting..." : " Log in"}
                </button>
                <Link href="/signup">
                  <button className="border border-secondary p-2 px-4 text-primary rounded-md">
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
              Forget your password?{" "}
              <a href="/forgot-password" className="text-primary underline">
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
    </>
  );
}
