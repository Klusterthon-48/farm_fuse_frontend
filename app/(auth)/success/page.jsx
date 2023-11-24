import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-accent-1 h-screen ">
      <div className="flex flex-col gap-11 justify-between w-[90%] pl-[10%] pt-[200px] max-w-[856px]">
        <Link href="/">
          <Image
            src="/auth_images/farmfuse-logo.svg"
            alt="logo"
            width={200}
            height={200}
          />
        </Link>
        <h4 className="text-2xl">Success! Your Account is Ready.</h4>
        <p>
          Congratulations! You&apos;ve successfully created your account with
          FarmFuse. Welcome to a smarter way of farming! Your journey with
          precision agriculture begins now.
        </p>
        <div className="flex flex-col md:flex-row gap-y-[30px] md:gap-x-[56px]">
          <Link
            href="/dashboard"
            className="p-3 bg-primary text-white rounded-lg"
          >
            EXPLORE YOUR DASHBOARD
          </Link>
          <Link
            href="/dashboard/my-farm"
            className="p-3 border border-primary rounded-lg"
          >
            SET UP YOUR FARM
          </Link>
        </div>
      </div>
      <Image
        src="/auth_images/dartboard.webp"
        alt="logo"
        width={400}
        height={400}
        className="absolute bottom-0 right-0 w-[200px] md:w-[400px] h-auto"
      />
    </div>
  );
};

export default page;
