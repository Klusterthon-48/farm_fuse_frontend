import React from "react";
import { FooterData } from "./utils/constants";
import { IoArrowForward } from "react-icons/io5";
import Image from "next/image";
import { BiLogoLinkedin, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-primary mt-[50px]">
      <div className=" max-w-[1200px] mx-auto w-[90%] pt-[140px] pb-[94px]">
        <div className="flex justify-between flex-wrap ">
          {FooterData.map((item, i) => (
            <div key={i}>
              <p>{item.title}</p>
              {item.links.map((dest) => (
                <div key={dest.link} className="mt-3">
                  <a href={dest.link} className="opacity-50">
                    {dest.title}
                  </a>
                </div>
              ))}
            </div>
          ))}
          <div className="bg-secondary w-[400px] p-[42px] rounded-md mt-9 md:-mt-12">
            <p>Subscribe</p>
            <div className="flex items-stretch mt-[15px] mb-[20px]">
              <input
                type="text"
                className="h-50 w-full py-[25px] rounded-tl-md rounded-bl-md"
              />
              <button className="px-5 bg-primary rounded-tr-md rounded-br-md">
                <IoArrowForward className="text-3xl" />
              </button>
            </div>
            <p className="opacity-50">
              Hello from FarmFuse! We&apos;re here to revolutionize farming. Our
              Precision Farming app empowers farmers with data-driven decisions
              and collaborative tools. Join us in cultivating success and
              transforming agriculture.
            </p>
          </div>
        </div>
        <hr className="opacity-[0.2] mt-[26px] mb-[42px]" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-9">
          <Image
            src="/footer_images/farmfuse-logo.png"
            alt="farmfuse logo"
            width={600}
            height={100}
            className="w-[200px] h-auto"
          />
          <div className="flex gap-9">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
          <div className="flex gap-3">
            <div className="ring">
              <BiLogoLinkedin className="text-xl" />
            </div>
            <div className="ring">
              <BiLogoFacebook className="text-xl" />
            </div>
            <div className="ring">
              <BiLogoTwitter className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
