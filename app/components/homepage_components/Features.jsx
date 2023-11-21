import Image from "next/image";
import React from "react";
import storm from "../../../public/homepage_images/storm.png";

export default function Features() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="flex bg-accent items-center">
        <div className=" py-[66px] pl-[10%] max-w-[560px] text-black-3  mx-auto">
          <p>Real-time Weather Data</p>
          <h4 className="text-xl font-semibold py-9">
            Maximize yield by making informed decisions
          </h4>
          <p className="pb-10">
            Stay informed and make timely decisions with real-time weather data,
            including forecasts and alerts, tailored to your specific location.
          </p>
          <button className="bg-primary rounded-md text-white p-2">
            Get Started
          </button>
        </div>
      </div>
      <div className="">
        <Image
          width={800}
          src={storm}
          alt="picture of storm"
          className="w-[100%] h-[550px] object-cover object-center"
        />
      </div>
    </section>
  );
}
