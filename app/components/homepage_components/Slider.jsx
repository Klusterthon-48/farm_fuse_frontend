import React from "react";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { AiOutlinePieChart } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { BsDatabase } from "react-icons/bs";

const Slider = () => {
  return (
    <div className="bg-primary h-[50px] overflow-hidden relative">
      <div className="flex gap-[100px] text-white text-sm scroll-container primary pr-[100px]  ">
        <div className="flex gap-2 items-center">
          <BsDatabase />
          <p>Data-driven agriculture</p>
        </div>
        <div className="flex gap-2 items-center">
          <AiOutlinePieChart />
          <p>Predictive analytics</p>
        </div>
        <div className="flex gap-2 items-center">
          <HiOutlineSquare3Stack3D />
          <p>Resource optimization</p>
        </div>
        <div className="flex gap-2 items-center">
          <GrTechnology />
          <p>Variable rate technology</p>
        </div>
        <div className="flex gap-2 items-center">
          <GrTechnology />
          <p>Predictive analytics</p>
        </div>
      </div>
      <div className="flex gap-[100px]  py-3 text-white text-sm scroll-container secondary pr-[100px] ">
        <div className="flex gap-2 items-center">
          <BsDatabase />
          <p>Data-driven agriculture</p>
        </div>
        <div className="flex gap-2 items-center">
          <AiOutlinePieChart />
          <p>Predictive analytics</p>
        </div>
        <div className="flex gap-2 items-center">
          <HiOutlineSquare3Stack3D />
          <p>Resource optimization</p>
        </div>
        <div className="flex gap-2 items-center">
          <GrTechnology />
          <p>Variable rate technology</p>
        </div>
        <div className="flex gap-2 items-center">
          <GrTechnology />
          <p>Predictive analytics</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
