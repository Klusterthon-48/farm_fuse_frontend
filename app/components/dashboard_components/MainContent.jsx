// MainContent.js

import React from "react";
import {
  FaLeaf,
  FaBolt,
  FaApple,
  FaWater,
  FaNutritionix,
} from "react-icons/fa";
import {
  FaBoltLightning,
  FaBowlFood,
  FaCloudBolt,
  FaCloudMoonRain,
  FaGlassWaterDroplet,
  FaPlantWilt,
  FaRegLightbulb,
} from "react-icons/fa6";

export default function MainContent({ selectedItem }) {
  const soilMoisturePercentage = 30;
  const phPercentage = 70;
  const nutrientPercentage = 50;

  return (
    <div className="main-content text-black-3">
      <div className="  flex  justify-center  my-4">
        <p className="w-64 bg-accent text-center p-2 rounded-full">
          Sunday 12th November, 2023
        </p>
      </div>
      <section className="flex flex-wrap justify-around">
        <div className="bg-accent rounded-lg my-5 p-5">
          <h3 className="text-lg font-bold mb-2">Farm Overview</h3>
          <div className="border border-zinc-100 my-3"></div>
          <div className="bg-white rounded-full text-sm text-gray3 text-center p-2">
            <p>Last Update: 5.00am</p>
          </div>
          <div className="flex text-gray3 my-4">
            <FaCloudMoonRain className="text-white text-4xl ml-6" />
            <div className="ms-7">
              <h1 className="text-3xl text-primary font-bold ">32°C</h1>
              <p>Sunny Cloudy</p>
              <p>New York, USA</p>
            </div>
          </div>

          <p className="my-2 font-bold">Crops:</p>
          <div className="flex justify-between">
            <div className="text-center">
              <p>Tomato</p>
              <FaPlantWilt className="text-green-500 text-xl" />
            </div>

            <div className="text-center">
              <p>Carrot</p>
              <FaNutritionix className="text-orange-500 text-xl" />
            </div>

            <div className="text-center">
              <p>Apple</p>
              <FaApple className="text-red-500 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-accent rounded-lg my-5 p-5">
          <h3 className="text-lg font-bold mb-2">Weather Updates</h3>
          <div className="border border-zinc-100 my-3"></div>
          <div className="flex my-11">
            <FaRegLightbulb className="text-white text-4xl ml-4" />
            <div className="text-gray3 ms-7">
              <h1 className="text-3xl text-primary font-bold">25°C</h1>
              <p>Thunderstorm</p>
              <p>New York, USA</p>
            </div>
          </div>

          <div className="flex justify-between mt-2">
            <div className="text-center">
              <FaLeaf className="text-yellow-500 text-xl" />
              <p>Sun</p>
            </div>

            <div className="text-center">
              <FaBoltLightning className="text-gray-600 text-xl" />
              <p>Thunder</p>
            </div>

            <div className="text-center">
              <FaBolt className="text-yellow-500 text-xl" />
              <p>Lightning</p>
            </div>
          </div>
        </div>
        <div className="bg-accent rounded-lg p-3 my-5">
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

        <div className="bg-accent rounded-lg p-5 my-5">
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <div className="border border-zinc-100 my-3"></div>
          <div className="mt-2">
            <label
              htmlFor="selectCrops"
              className="block text-sm font-medium text-gray-700"
            >
              Select Crops
            </label>
            <select
              id="selectCrops"
              name="selectCrops"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-white"
            >
              <option value="crop1">Crop 1</option>
              <option value="crop2">Crop 2</option>
              <option value="crop3">Crop 3</option>
            </select>
          </div>

          <div className="mt-4">
            <label
              htmlFor="selectLocation"
              className="block text-sm font-medium text-gray-700"
            >
              Select Location
            </label>
            <select
              id="selectLocation"
              name="selectLocation"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-white"
            >
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
            </select>
          </div>

          <div className="mt-4 space-y-2">
            <button className="p-2 border border-gray-300 rounded-md bg-white">
              Planting Schedule
            </button>
            <button className="p-2 border border-gray-300 rounded-md bg-white">
              Harvesting Schedule
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
