import Image from "next/image";
import React from "react";
import plant from "../../../public/homepage_images/plant.png";

export default function Prediction() {
  return (
    <main className="grid sm:grid-cols-2 text-black-3">
      <Image
        src={plant}
        alt="picture of plant"
        className=" w-[100%] h-[550px] object-cover object-center"
      />
      <div className="flex items-center bg-accent">
        <div className="max-w-[560px]  ml-10 mr-[10%] py-11 md:py-0">
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
      </div>
    </main>
  );
}
