import Image from "next/image";
import React from "react";

const Info = ({ title, data }) => {
  return (
    <div className="bg-accent-1 border-grey-4 rounded-lg p-8 my-3">
      <h3 className="text-[20px] mb-[24px] font-medium">{title}</h3>
      <div className="flex flex-col gap-3">
        {data.map((item) => (
          <>
            <h3 className="text-grey-3 text-[18px] mb-[17px]">
              {item.subtitle}
            </h3>
            <div key={item.crop} className="flex items-center gap-3 ">
              <div>
                <Image src={item.icon} alt="" width={15} height={15} />
              </div>

              <div>
                <p>{item.text}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Info;
