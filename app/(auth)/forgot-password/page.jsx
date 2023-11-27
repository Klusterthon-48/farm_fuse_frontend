"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.post(
        "https://farm-fuse-backend.vercel.app/api/forgot_password",
        { email }
      );

      const json = response.data;

      if (response.status === 200) {
        setIsLoading(false);
        toast.success(
          "Please check your email for further instructions to reset your password!"
        );
      } else {
        setIsLoading(false);
        setError(json.error);
      }
      setEmail("");
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-accent-1 h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col mx-auto justify-between w-[90%]  ">
        <Link href="/">
          <Image
            src="/auth_images/farmfuse-logo.svg"
            alt="logo"
            width={200}
            height={200}
          />
        </Link>
      </div>
      <div className="flex justify-center w-[90%] mx-auto">
        <div>
          <h4 className="flex flex-col items-center justify-center text-4xl font-medium mt-[55px] mb-[25px]">
            Forgot password?
          </h4>
          <p className="mb-[56px] text-center">
            Enter your email address for instructions
          </p>
          <div>
            {" "}
            <p className=" text-[#828282] pb-4 text-[16px] uppercase">
              enter your Email address
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-primary border-b w-full text-black-3 outline-0"
              id="email"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleForgotPassword}
              className="p-3 px-14 max-w-[700px] mt-[48px] bg-primary text-white rounded-lg"
            >
              SEND INSTRUCTIONS
            </button>
          </div>
          <div className="flex justify-center mt-12">
            <p className="align-center">
              <Link
                href="/login"
                className="underline text-primary text-[18px]"
              >
                Log in
              </Link>{" "}
              or{" "}
              <Link
                href="signup"
                className="underline text-primary text-[18px]"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
