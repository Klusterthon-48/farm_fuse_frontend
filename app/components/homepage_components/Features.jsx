import Image from "next/image";
import React from "react";
import storm from "../../../public/homepage_images/storm.png";

export default function Features() {
  return (
    <main className="grid sm:grid-cols-2">
      <div className="bg-accent p-16 h-[75%] ">
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
      <Image src={storm} alt="picture of storm" className="h-[75%] w-[100%]" />
    </main>
  );
}
