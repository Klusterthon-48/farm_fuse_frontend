import React from "react";
import { FaCheck } from "react-icons/fa6";

const data = [
  {
    title: "Improved resource efficiency",
    text: " FarmFuse helps farmers use their resources more efficiently, reducing their environmental impact.",
  },
  {
    title: "Predictive analytics",
    text: "  FarmFuse can use historical data and weather forecasts to predict crop yields, pest and disease risks, and optimal irrigation and fertilization schedules.",
  },
  {
    title: "Reduced input costs",
    text: "FarmFuse's smart irrigation and fertilization recommendations help farmers save money on inputs.",
  },
  {
    title: "Increased crop yields",
    text: "FarmFuse's data-driven approach to farming helps farmers optimize their resource usage, resulting in higher yields.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="text-black-3 my-[52px] w-[90%] max-w-[1200px] mx-auto">
      <h1 className="text-3xl text-center md:text-left font-semibold mb-5 text-black-3">
        Why Farmers choose FarmFuse
      </h1>
      <hr className="text-black" />
      {data.map(({ text, title }) => (
        <div key={text}>
          <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-center py-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-accent items-center flex justify-center rounded-full p-2 w-10 h-10  mb-3">
                <FaCheck className="font-black" />
              </div>
              <h4 className="text-xl font-semibold ms-5  mb-2">{title}</h4>
            </div>
            <p className="w-full md:w-[42%] lg:w-[55%]">{text}</p>
          </div>
          <hr />
        </div>
      ))}
      <div className="flex justify-center">
        <button className="bg-primary rounded-md text-white p-6 mb-32 px-10 mt-24 text-sm">
          Get Started
        </button>
      </div>
    </section>
  );
}
