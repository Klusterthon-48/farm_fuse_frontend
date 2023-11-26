"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      setError(null);

      if (password !== confirmPassword) {
        setIsLoading(false);
        toast.error("Passwords do not match");
        return;
      }

      const response = await axios.post(
        "https://farm-fuse-backend.vercel.app/api/reset_password",
        { password, confirmPassword }
      );

      const json = response.data;

      if (response.status === 200) {
        setIsLoading(false);
        toast.success("Password Changed Successfully!");
        router.push("/login");
      } else {
        setIsLoading(false);
        setError(json.error);
      }
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
            Reset your password
          </h4>
          <p className="mb-[56px] text-center">
            Enter the preferred password you want to use to secure your account
            on FarmFuse
          </p>
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[#828282] pb-3 uppercase">Password</p>
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent border-b border-primary w-full sm:w-[98%] text-black-3 outline-0"
                id="password"
                name="password"
                autoComplete="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-2 lg:mt-0">
              <p className="text-[#828282] pb-3 uppercase">Confirm Password</p>
              <input
                type="password"
                placeholder="Confirm your password"
                className="bg-transparent border-b border-primary w-full sm:w-[98%] text-black-3 outline-0"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleResetPassword}
              className="p-3 px-14 max-w-[507px] mt-[48px] bg-primary text-white rounded-lg uppercase"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
