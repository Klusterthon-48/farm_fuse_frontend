'use client'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/auth_images/logo.png";
import { signUp } from "../../redux/slices/authSlice";
import axios from "axios";
import overlay from "../../../public/auth_images/overlay.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fullname = useSelector((state) => state.auth.name)
  const useremail = useSelector((state) => state.auth.email)
  const token = useSelector((state) => state.auth.token)

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError(null);

      if (!password) {
        setIsLoading(false);
        toast.error("Password is required");
        return;
      }
      if (!confirmPassword) {
        setIsLoading(false);
        toast.error("Confirm Password is required");
        return;
      }

      if (password !== confirmPassword) {
        setIsLoading(false);
        toast.error("Passwords do not match");
        return;
      }
      const response = await axios.post(
        "https://farm-fuse-backend.vercel.app/api/register",
        {
          email,
          name,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const json = response.data;
      if (response.status === 409) {
        setIsLoading(false);
        toast.error("Email already exists");
        return;
      }

      if (response.status === 200 || response.status === 201) {
        setIsLoading(false);
        dispatch(signUp({name, email}));
        toast.success("Account created successfully");
        router.push("/success");
      } else {
        setError(json.error.message || "An error occurred");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <main className="bg-accent-1 p-5 sm:p-10 py-24">
      <section className="grid sm:grid-cols-2 gap-8 sm:text-sm md:text-base lg:text-base">
        <div>
          <Image src={logo} alt="logo" width={50} height={50} />
          <h4 className="text-2xl sm:text-2xl text-black-3 py-5">Sign Up</h4>
          <form onSubmit={handleRegister}>
            <div className="flex flex-wrap justify-between">
              <div className="w-full sm:w-5/12">
                <p className="text-[#828282] pb-3 uppercase">Full Name</p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-transparent border-b w-full sm:w-[98%] text-[#E0E0E0] outline-0"
                  id="name"
                  name="name"
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                  required
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
                required
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
                  required
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
                  required
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
              <button
                type="submit"
                className={`${
                  isLoading
                    ? "bg-green-200 rounded-md text-white p-2 px-10 font-bold mb-5"
                    : "bg-primary rounded-md text-white p-2 px-10 font-bold mb-5"
                }`}
                disabled={isLoading}
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
      <ToastContainer />
    </main>
  );
}
