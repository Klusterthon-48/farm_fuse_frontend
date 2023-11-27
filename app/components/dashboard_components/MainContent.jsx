"use client";

import Image from "next/image";
import { useState } from "react";
import { FaApple, FaBolt, FaLeaf, FaNutritionix } from "react-icons/fa";
import {
  FaBoltLightning,
  FaBowlFood,
  FaCloudBolt,
  FaGlassWaterDroplet,
  FaPlantWilt,
} from "react-icons/fa6";

import { FiEdit3 } from "react-icons/fi";
import { useSelector } from "react-redux";
import FarmDetailsModal from "../dashboard_components/FarmDetailsModal";
import Schedule from "../utils/Schedule";
// import { SunnyCloud } from "../../../public/dashboard_images/sunny-cloud.svg";
import {
  harvestingScheduleData,
  plantingScheduleData,
  recommendations,
} from "../utils/constants";

export default function MainContent() {
  const soilMoisturePercentage = 30;
  const phPercentage = 70;
  const nutrientPercentage = 50;

  const ph = useSelector((state) => state.prediction.ph);
  const temperature = useSelector((state) => state.prediction.temperature);
  const soilMoisture = useSelector((state) => state.prediction.soilMoisture);
  const nutrients = useSelector((state) => state.prediction.nutrients);
  const plantingTime = useSelector((state) => state.prediction.plantingTime);
  const harvestTime = useSelector((state) => state.prediction.harvestTime);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleFarmDetails = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  console.log(
    temperature,
    ph,
    soilMoisture,
    nutrients,
    plantingTime,
    harvestTime
  );

  return (
    <div className="main-content text-black-3">
      <div className="  flex  justify-center  my-4">
        <p className="w-64 bg-accent-1 border-grey-4 text-center p-2 rounded-full">
          Sunday 12th November, 2023
        </p>
      </div>
      <button
        className="flex gap-3 items-center bg-primary rounded-full text-white py-3 px-5"
        onClick={handleFarmDetails}
      >
        <p>Edit Farm Details </p>
        <FiEdit3 />
      </button>

      <FarmDetailsModal isOpen={isPopupOpen} onClose={handleClosePopup} />
      <section>
        <section className="grid md:grid-cols-3 gap-6 ">
          <div className="bg-accent-1 border-grey-4 rounded-lg my-5 p-3">
            <h3 className="text-lg font-bold mb-2">Farm Overview</h3>
            <div className="border border-zinc-100 my-3"></div>
            <div className="bg-white rounded-full text-sm text-gray3 text-center p-2">
              <p>Last Update: 5.00am</p>
            </div>
            <div className="flex items-center text-gray3 my-4">
              <Image
                src="/dashboard_images/sunny-cloud.svg"
                alt="cloud"
                width={200}
                height={200}
                className="-mx-4"
              />
              <div className="ms-7">
                <h1 className="text-3xl text-primary font-bold ">32°C</h1>
                <p>Sunny Cloudy</p>
                <p>New York, USA</p>
              </div>
            </div>

            <p className="my-2 font-bold">Crops:</p>
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <p>Tomato</p>
                <FaPlantWilt className="text-green-500 text-xl" />
              </div>

              <div className="flex flex-col items-center">
                <p>Carrot</p>
                <FaNutritionix className="text-orange-500 text-xl" />
              </div>

              <div className="flex flex-col items-center">
                <p>Apple</p>
                <FaApple className="text-red-500 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-accent-1 border-grey-4 rounded-lg my-5 p-5">
            <h3 className="text-lg font-bold mb-2">Weather Updates</h3>
            <div className="border border-zinc-100 my-3"></div>
            <div className="flex items-center my-11">
              <Image
                src="/dashboard_images/thunder.svg"
                alt="cloud"
                width={200}
                height={200}
                className="-mx-4"
              />
              <div className="text-gray3 ms-7">
                <h1 className="text-3xl text-primary font-bold">25°C</h1>
                <p>Thunderstorm</p>
                <p>New York, USA</p>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex flex-col items-center">
                <FaLeaf className="text-yellow-500 text-xl" />
                <p>Sun</p>
              </div>

              <div className="flex flex-col items-center">
                <FaBoltLightning className="text-gray-600 text-xl" />
                <p>Thunder</p>
              </div>

              <div className="flex flex-col items-center">
                <FaBolt className="text-yellow-500 text-xl" />
                <p>Lightning</p>
              </div>
            </div>
          </div>
          <div className="bg-accent-1 border-grey-4 rounded-lg p-3 my-5">
            <h3 className="text-lg font-bold mb-2">Soil Quality</h3>
            <div className="border border-zinc-100 my-3"></div>

            <div className="flex items-center justify-between mb-2">
              <div className="flex flex-wrap items-center">
                <FaCloudBolt className="text-grey-3 text-2xl mr-2" />
                <p>Soil Moisture</p>
              </div>
              <div className="ms-10 text-yellow-500">
                <p>{soilMoisturePercentage}%</p>
              </div>
            </div>

            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div></div>
              </div>
              <div className="flex flex-col">
                <div className="bg-yellow-200 h-2 rounded-full">
                  <div
                    style={{ width: `${soilMoisturePercentage}%` }}
                    className="shadow-none bg-yellow-500 h-2 rounded-full"
                  ></div>
                </div>
              </div>
            </div>
            <section className="my-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-wrap items-center">
                  <FaGlassWaterDroplet className="text-gray3 text-2xl mr-2" />
                  <p>Ph</p>
                </div>
                <div className="ms-10 text-green-500">
                  <p>{phPercentage}%</p>
                </div>
              </div>

              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div></div>
                </div>
                <div className="flex flex-col">
                  <div className="bg-green-200 h-2 rounded-full">
                    <div
                      style={{ width: `${phPercentage}%` }}
                      className="shadow-none bg-green-500 h-2 rounded-full"
                    ></div>
                  </div>
                </div>
              </div>
            </section>
            <section className="my-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-wrap items-center">
                  <FaGlassWaterDroplet className="text-gray3 text-2xl mr-2" />
                  <p>Ph</p>
                </div>
                <div className="ms-10 text-green-500">
                  <p>{phPercentage}%</p>
                </div>
              </div>

              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div></div>
                </div>
                <div className="flex flex-col">
                  <div className="bg-green-200 h-2 rounded-full">
                    <div
                      style={{ width: `${phPercentage}%` }}
                      className="shadow-none bg-green-500 h-2 rounded-full"
                    ></div>
                  </div>
                </div>
              </div>
            </section>
            <section className="my-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-wrap items-center">
                  <FaBowlFood className="text-gray3 text-2xl mr-2" />
                  <p>Nutrient</p>
                </div>
                <div className="ms-10 text-blue-500">
                  <p>{nutrientPercentage}%</p>
                </div>
              </div>

              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div></div>
                </div>
                <div className="flex flex-col">
                  <div className="bg-blue-200 h-2 rounded-full">
                    <div
                      style={{ width: `${nutrientPercentage}%` }}
                      className="shadow-none bg-blue-500 h-2 rounded-full"
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section>
          <div className="grid gap-6 sm:grid-cols-2">
            <Schedule
              title="Planting Schedule"
              subtitle="Upcoming Planting"
              data={plantingScheduleData}
            />
            <Schedule
              title="Harvesting Schedule"
              subtitle="Upcoming Harvesting"
              data={harvestingScheduleData}
            />
          </div>
        </section>

        <section className="grid sm:grid-cols-2 gap-6">
          <div>
            <div className="bg-accent-1 border-grey-4 rounded-lg p-8 my-3">
              <h3 className="text-[20px] mb-[24px] font-medium">
                Planting and Soil Tips
              </h3>
              <div className="flex flex-col gap-3">
                <h3 className="text-grey-3 text-[18px] mb-[17px]">
                  Fall Planting
                </h3>
                <div className="flex items-center gap-3 ">
                  <div className="flex gap-3">
                    <Image
                      src="/dashboard_images/maize.svg"
                      alt=""
                      width={15}
                      height={15}
                    />
                    <p>
                      Enhance soil health with cover crops! More tips in our
                      blog.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-8">
                <h3 className="text-grey-3 text-[18px] mb-[17px]">
                  Spring Soil Enrichment
                </h3>
                <div className="flex items-center gap-3 ">
                  <div className="flex gap-3">
                    <Image
                      src="/dashboard_images/maize.svg"
                      alt=""
                      width={15}
                      height={15}
                    />
                    <p>
                      Use compost and manure for a thriving spring planting
                      season.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-accent-1 border-grey-4 rounded-lg p-8 my-3">
              <h3 className="text-[20px] mb-[24px] font-medium">
                Weather and Pest Alerts
              </h3>
              <div className="flex flex-col gap-3">
                <h3 className="text-grey-3 text-[18px] mb-[17px]">
                  Frost Advisory
                </h3>
                <div className="flex items-center gap-3 ">
                  <div className="flex gap-3">
                    <Image
                      src="/dashboard_images/maize.svg"
                      alt=""
                      width={15}
                      height={15}
                    />
                    <p>
                      Protect crops on frosty nights. Check weather overview for
                      alerts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-8">
                <h3 className="text-grey-3 text-[18px] mb-[17px]">
                  Aphid Prevention Alert
                </h3>
                <div className="flex items-center gap-3 ">
                  <div className="flex gap-3">
                    <Image
                      src="/dashboard_images/maize.svg"
                      alt=""
                      width={15}
                      height={15}
                    />
                    <p>
                      Keep aphids at bay with ladybugs and lacewings. Explore
                      our guide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <div className="bg-accent-1 border-grey-4 rounded-lg p-8 my-3 max-w-[500px]">
            <h2 className="text-[20px] mb-[24px] font-medium">
              Recommendations
            </h2>
            <div className="flex flex-col gap-3 ">
              {recommendations.map((item, i) => (
                <div className="flex items-center gap-3" key={i}>
                  <Image src={item.icon} alt="" width={15} height={15} />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
