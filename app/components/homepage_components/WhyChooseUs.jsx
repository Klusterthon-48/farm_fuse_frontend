import React from "react";
import { FaCheck} from "react-icons/fa6";

export default function WhyChooseUs() {
  return (
    <section className="px-20">
      <h1 className="text-3xl font-semibold mb-5 text-black-3">
        Why Farmers choose FarmFuse
      </h1>
      <hr className="text-black" />
      <div className="flex flex-wrap justify-between items-center py-6">
        <div className="flex flex-wrap items-center">
          <div className="bg-accent items-center flex justify-center rounded-full p-2 w-10 h-10">
            <FaCheck className="font-black" />
          </div>
          <h4 className="text-xl font-semibold ms-5">
            Improved resource efficiency
          </h4>
        </div>
        <p className="w-[55%]">
          FarmFuse helps farmers use their resources more efficiently, reducing
          their environmental impact.
        </p>
      </div>
      <hr />
      <hr className="text-black" />
      <div className="flex flex-wrap justify-between items-center py-6">
        <div className="flex flex-wrap items-center">
          <div className="bg-accent items-center flex justify-center rounded-full p-2 w-10 h-10">
            <FaCheck className="font-black" />
          
          </div>
          <h4 className="text-xl font-semibold ms-5">Predictive analytics</h4>
        </div>
        <p className="w-[55%]">
          FarmFuse can use historical data and weather forecasts to predict crop
          yields, pest and disease risks, and optimal irrigation and
          fertilization schedules.
        </p>
      </div>
      <hr />
      <hr className="text-black" />
      <div className="flex flex-wrap justify-between items-center py-6">
        <div className="flex flex-wrap items-center">
          <div className="bg-accent items-center flex justify-center rounded-full p-2 w-10 h-10">
            <FaCheck className="font-black" />
          </div>
          <h4 className="text-xl font-semibold ms-5">Reduced input costs</h4>
        </div>
        <p className="w-[55%]">
          FarmFuse's smart irrigation and fertilization recommendations help
          farmers save money on inputs.
        </p>
      </div>
      <hr />
      <hr className="text-black" />
      <div className="flex flex-wrap justify-between items-center py-6">
        <div className="flex flex-wrap items-center">
          <div className="bg-accent items-center flex justify-center rounded-full p-2 w-10 h-10">
            <FaCheck className="font-black" />
          </div>
          <h4 className="text-xl font-semibold ms-5">Increased crop yields</h4>
        </div>
        <p className="w-[55%]">
          FarmFuse's data-driven approach to farming helps farmers optimize
          their resource usage, resulting in higher yields.
        </p>
      </div>
      <hr />
      <div className="flex justify-center">
        <button className="bg-primary rounded-md text-white p-6 mb-32 px-10 my-24 text-sm">
          Get Started
        </button>
      </div>
    </section>
  );
}
