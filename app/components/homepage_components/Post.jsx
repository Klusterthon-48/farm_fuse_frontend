import Image from "next/image";
import React from "react";

export default function Post({ src, title, time, details }) {
  return (
    <div className="text-slate-50 w-full">
      <Image src={src} alt="picture of a farmer" className="w-[100%]" />
      <div className="bg-primary p-3 rounded-br-2xl rounded-bl-2xl ">
        <p>{title}</p>
        <p className="text-gray-400 py-5">{time}</p>
        <p className="pb-3">{details}</p>
      </div>
    </div>
  );
}
