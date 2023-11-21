import Image from "next/image";
import React from "react";
import plant from "../../../public/homepage_images/plant.png";

export default function Prediction() {
  return (
    <main className="grid sm:grid-cols-2">
      <Image src={plant} alt="picture of plant" className="h-[75%] w-[100%]" />
      <div className="bg-accent p-16 h-[75%] ">
        <p>Enhancement of forecasting</p>
        <h4 className="text-xl font-semibold py-9">
          Machine Learning Predictions
        </h4>
        <p className="pb-10">
          Leverage the power of machine learning to gain insights into crop
          yields, pest and disease risks, and optimal irrigation and
          fertilization schedules.
        </p>
        <button className="bg-primary rounded-md text-white p-2">
          Get Started
        </button>
      </div>
    </main>
  );
}
