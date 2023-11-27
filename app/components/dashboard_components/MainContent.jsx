"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaApple, FaBolt, FaLeaf, FaNutritionix } from "react-icons/fa";
import {
  FaBoltLightning,
  FaBowlFood,
  FaCloudBolt,
  FaGlassWaterDroplet,
  FaPlantWilt,
} from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";

import { FiEdit3 } from "react-icons/fi";
import { useSelector } from "react-redux";
import FarmDetailsModal from "../dashboard_components/FarmDetailsModal";
import Schedule from "../utils/Schedule";
import {
  harvestingScheduleData,
  plantingScheduleData,
  recommendations,
} from "../utils/constants";
import { formatDateToCustomString, kelvinToCelsius } from "../utils/helpers";
import axios from "axios";

export default function MainContent() {
  const soilMoisturePercentage = 30;
  const phPercentage = 70;
  const nutrientPercentage = 50;
  // const [weatherData, setWeatherData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(null);

  // Function to update form data
  const updateFormData = (data) => {
    setFormData(data);
  };

  const token = useSelector((state) => state.prediction.token);
  const ph = useSelector((state) => state.prediction.ph);
  const temperature = useSelector((state) => state.prediction.temperature);
  const soilMoisture = useSelector((state) => state.prediction.soilMoisture);
  const nutrients = useSelector((state) => state.prediction.nutrients);
  const plantingTime = useSelector((state) => state.prediction.plantingTime);
  const harvestTime = useSelector((state) => state.prediction.harvestTime);
  const country = useSelector((state) => state.prediction.country);
  const label = useSelector((state) => state.prediction.label);
  const farmDetails = useSelector((state) => state.prediction.farmDetails);

  console.log(farmDetails, "farmDetails");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleFarmDetails = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  console.log(weatherData?.main.temp, "weatherData");

  useEffect(() => {
    const handleWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=Nigeria&APPID=82252ce902b395ad117325e81348b09e"
        );

        const data = response.data;

        if (response.status === 200) {
          setWeatherData(data);
        } else {
          setError(data.error);
        }
      } catch (error) {
        setError(error.message);
        // toast.error(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    handleWeatherData();
  }, []);

  console.log(
    "temperature: ",
    temperature,
    "ph: ",
    ph,
    "Moisture Content: ",
    soilMoisture,
    "Humidity: ",
    nutrients,
    "plantingTime: ",
    plantingTime,
    "harvestTime: ",
    harvestTime,
    "country: ",
    country,
    "label: ",
    label,
    token
  );

  console.log(formData, "formData");
  console.log(formData?.country, "formData");

  // console.log(
  //   temperature,
  //   ph,
  //   soilMoisture,
  //   nutrients,
  //   plantingTime,
  //   harvestTime
  // );

  return (
    <div className="main-content text-black-3">
      <div className="  flex  justify-center  my-4">
        <p className="w-64 bg-accent-1 border-grey-4 text-center p-2 rounded-full">
          {formatDateToCustomString(new Date())}
        </p>
      </div>

      <button
        className="flex gap-3 items-center bg-primary rounded-full text-white py-3 px-5"
        onClick={handleFarmDetails}
      >
        <p>Edit Farm Details </p>
        <FiEdit3 />
      </button>

      <FarmDetailsModal
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        updateFormData={updateFormData}
      />
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
                <h1 className="text-3xl text-primary font-bold ">
                  {parseFloat(temperature)?.toFixed()}°C
                </h1>
                <p>{weatherData?.weather[0].description}</p>
                <p>{weatherData?.country}</p>
              </div>
            </div>

            <p className="my-2 font-bold">Crop:</p>
            <div className="flex justify-between">
              <p className="text-xl font-semibold">{formData?.label}</p>
              {/* <div className="flex flex-col items-center">
                <p>{label}</p>
                <FaPlantWilt className="text-green-500 text-xl" />
              </div>

              <div className="flex flex-col items-center">
                <p>{country}</p>
                <FaNutritionix className="text-orange-500 text-xl" />
              </div>

              <div className="flex flex-col items-center">
                <p>Apple</p>
                <FaApple className="text-red-500 text-xl" />
              </div> */}
            </div>
          </div>

          {/* ph => 14
          humidity => 100
          temperature => 100 */}

          <div className="bg-accent-1 border-grey-4 rounded-lg my-5 p-5">
            <h3 className="text-lg font-bold mb-2">Weather Updates</h3>
            <div className="border border-zinc-100 my-3"></div>
            <div className="flex items-center my-11">
              <Image
                src="/dashboard_images/sunny-cloud.svg"
                alt="cloud"
                width={200}
                height={200}
                className="-mx-4"
              />
              <div className="text-gray3 ms-7">
                <h1 className="text-3xl text-primary font-bold">
                  {kelvinToCelsius(weatherData?.main.temp) ?? 0}°C
                </h1>
                <p>{weatherData?.weather[0].description}</p>
                <p>{weatherData?.name}</p>
              </div>
            </div>
          </div>
          {/* Temperature */}
          <div className="bg-accent-1 border-grey-4 rounded-lg p-3 my-5">
            <h3 className="text-lg font-bold mb-2">Soil Quality</h3>
            <div className="border border-zinc-100 my-3"></div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-wrap items-center">
                  <FaCloudBolt className="text-grey-3 text-2xl mr-2" />
                  <p>Temperature</p>
                </div>
                <div className="ms-10 text-red-500">
                  {/* <p>{soilMoisturePercentage}%</p> */}
                  <p>{parseFloat(temperature)?.toFixed(2)}°C</p>
                </div>
              </div>

              {/* <div className="relative pt-1">
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
            </div> */}
              {/* pH */}

              <section className="my-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex flex-wrap items-center">
                    <FaGlassWaterDroplet className="text-gray3 text-2xl mr-2" />
                    <p>Ph</p>
                  </div>
                  <div className="ms-10 text-green-500">
                    {/* <p>{phPercentage}%</p> */}
                    <p>{parseFloat(ph)?.toFixed(2)}</p>
                  </div>
                </div>

                {/* <div className="relative pt-1">
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
              </div> */}
              </section>
              {/* Moisture content */}
              <section className="my-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex  items-center">
                    <WiHumidity className="text-gray3 text-2xl mr-2" />
                    <p>Moisture content</p>
                  </div>
                  <div className="ms-10 text-green-500">
                    <p className="flex">
                      <span>{parseFloat(soilMoisture)?.toFixed(2)}</span>
                      <span>{" kPa"}</span>
                    </p>
                  </div>
                </div>

                {/* <div className="relative pt-1">
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
              </div> */}
              </section>
              <section className="my-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex flex-wrap items-center">
                    <FaBowlFood className="text-gray3 text-2xl mr-2" />
                    <p>Humidity</p>
                  </div>
                  <div className="ms-10 text-blue-500 relative">
                    {parseFloat(nutrients)?.toFixed(2)}
                    {" g/m"}{" "}
                    <span className="absolute text-[10px] mb-8">3</span>
                  </div>
                </div>

                {/* <div className="relative pt-1">
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
              </div> */}
              </section>
            </div>
          </div>
        </section>
        <section>
          <div className="grid gap-6 sm:grid-cols-2">
            <Schedule
              title="Planting Schedule"
              // subtitle="Upcoming Planting"
              // data={plantingScheduleData}
              // crop={label}
              text={plantingTime}
            />
            <Schedule
              title="Harvesting Schedule"
              // subtitle="Upcoming Harvesting"
              // crop={label}
              text={
                harvestTime &&
                `While harvesting season for ${formData?.label} in ${formData?.country} is ${harvestTime} season`
              }
              // data={harvestingScheduleData}
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
