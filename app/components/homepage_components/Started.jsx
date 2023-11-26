import Image from "next/image";
import Link from "next/link";
import React from "react";
import { startedData } from "../utils/constants";

const Started = () => {
  return (
    <div className="w-[90%] mx-auto  my-[240px]">
      <div className="grid sm:grid-cols-2">
        <Image
          src={"/homepage_images/digital-farmer.webp"}
          alt="image"
          width={800}
          height={800}
          className=""
        />
        <div className="max-w-[560px] ml-[5%]  md:ml-10 mr-[10%] py-11 md:py-0">
          <h3 className="text-[40px]">Get started easily</h3>
          <p className="mt-6 mb-12">
            Don&apos;t wait for the next planting season! Start leveraging the
            power of our Precision Farming app today to enhance your farming
            experience. Here&apos;s why getting started early is the key to a
            successful harvest.
          </p>
          <Link href="/signup" className="text-primary">
            Start Now
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[120px] md:-mt-[30px] lg:-mt-[180px] max-w-[1200px] mx-auto">
        {startedData.map((item, i) => (
          <div key={i} className="p-7 bg-white rounded-2xl shadow-xl">
            {" "}
            <div className="flex justify-center md:justify-start w-full">
              <Image
                src={item.image}
                alt="image"
                width={350}
                height={350}
                className="rounded-xl"
              />
            </div>
            <div className="mt-[69px] mb-[44px] flex items-center gap-6">
              <p className="text-[20px]">{item.title}</p>
              <Image src={item.icon} alt="image" width={30} height={30} />
            </div>
            <p>{item.body}</p>
            <button className="p-4 px-6 bg-primary mt-[52px] text-white rounded-lg">
              Explore more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Started;
