import React from "react";
import hero from "../../../public/homepage_images/hero.png";
import hero1 from "../../../public/homepage_images/hero1.png";
import hero2 from "../../../public/homepage_images/hero2.png";
import coin_icon from "../../../public/homepage_images/coin_icon.png";
import finane_icon from "../../../public/homepage_images/finance_icon.png";
import bank_icon from "../../../public/homepage_images/bank_icon.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="wrapper justify-between text-black-3 pt-16 pb-32 flex-col-reverse md:flex-row">
      <div className="w-full md:w-[60%]">
        <p className=" bg-accent text-sm font-bold w-44 rounded-md  px-2 text-center py-1 border-t-gray-400">
          Embrace the Future
        </p>
        <h2 className="text-3xl lg:text-5xl font-semibold md:w-[85%] py-7 leading-snug md:leading-normal">
          Optimize Your Crops, Increase Yields, and Reduce Costs
        </h2>
        <p className="w-full md:w-[80%]">
          Experience the benefits of precision agriculture and maximize your
          crop yields.
        </p>
        <div className="my-10">
          <button className="me-2 p-2 border-black border rounded-md px-6">
            Log In
          </button>
          <button className="bg-primary rounded-md text-white p-2 ms-2">
            Get Started
          </button>
          <p className="font-semibold mt-16">Sponsored partners:</p>
          <div className="flex gap-8 flex-wrap text-zinc-400  pt-8 ">
            <div className="sponsors">
              <Image width={20} src={coin_icon} alt="coin" />
              <p>CoinMarketCap</p>
            </div>
            <div className="sponsors">
              <Image width={20} src={finane_icon} alt="finance" />
              <p>finance.au</p>
            </div>
            <div className="sponsors">
              <Image width={20} src={bank_icon} alt="hope" />
              <p>Bank of Hope</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[37%] mb-[40px]">
        <Image src={hero2} alt="hero" className="w-full" />
        <div className="flex flex-wrap justify-between mt-7">
          <Image src={hero1} alt="hero" className="w-[48%]" />
          <Image src={hero} alt="hero" className="w-[48%]" />
        </div>
      </div>
    </section>
  );
}
