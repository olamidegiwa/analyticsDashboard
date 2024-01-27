import React, { useState } from "react";
import img1 from "../../assets/image/Icon (1).png";
import img2 from "../../assets/image/Bar.png";
import img3 from "../../assets/image/Icon (2).png";
import img4 from "../../assets/image/Icon (3).png";
import img5 from "../../assets/image/Icon.png";
import img7 from "../../assets/image/Vector 2 (1).png";
import img8 from "../../assets/image/Vector 2.png";
import img9 from "../../assets/image/trending-up (1).png";
import img10 from "../../assets/image/trending-up.png";
import { IoIosArrowDown } from "react-icons/io";
import Chart from ".././Chart";
import { UserData } from "../Data";

const DropdownLinks = [
  {
    id: 1,
    name: "Sunday",
  },
  {
    id: 2,
    name: "Monday",
  },
  {
    id: 3,
    name: "Tuesday",
  },
  {
    id: 4,
    name: "Wednesday",
  },
  {
    id: 5,
    name: "Thurday",
  },
  {
    id: 6,
    name: "Friday",
  },
  {
    id: 7,
    name: "Saturday",
  },
];

const SalesTrend = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Users Gain",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#34CAA5"],
        borderColor: "caf0f8",
        borderRadius: 24,
      },
    ],
  });

  return (
    <div className="container py-3">
      <div className="flex flex-col lg:flex-row justify-between py-3 gap-y-4 place items-center ">
        <div className="salestrend gap-y-4">
          <div className="flex items-center justify-between py-2 pb-3 ">
            <h1
              // data-aos="fade-down"
              data-aos-duration="1500"
              className="text-xl text-gray-900 fw-semibold dark:text-pink-500 "
            >
              Sales Trends
            </h1>
            <div className="flex items-center gap-2">
              <p
                // data-aos="fade-down"
                data-aos-duration="1500"
                className="text-lg text-gray-600 fw-semibold dark:text-green-300 hidden md:flex"
              >
                Short by :
              </p>
              <div className="flex items-center gap-2 group relative cursor-pointer">
                <div className="items-center rounded-full text-black border-2 px-3 py-1 dark:text-white ">
                  <a
                    // data-aos="fade-down"
                    // data-aos-duration="1500"
                    href="#"
                    className="text-lg flex items-center gap-2 text-gray-600 fw-semibold dark:text-white"
                  >
                    Weekly
                    <span>
                      <IoIosArrowDown className="transition-all group-hover:rotate-180 text-xl" />
                    </span>
                  </a>
                </div>

                <div className="absolute z-[9999] hidden group-hover:block w-[130px] rounded-md p-2 shadow-md top-[45px] bg-white dark:text-black dark:bg-white">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href="#"
                          className="inline-block w-full rounded-md px-2 py-1   text-xl text-gray-600 fw-semibold  hover:bg-gray-300 "
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="userdata px-3">
            <Chart chartData={userData} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center">
          <div
            // data-aos="zoom-in-up"
            className="flex flex-col w-[240px] h-[180px]  border-2 p-2 rounded-xl gap-2"
          >
            <div className="flex items-center justify-between">
              <img src={img4} alt="" />
              <img src={img8} alt="" />
            </div>
            <p className=" text-gray-400 text-base dark:text-white">
              Total Order
            </p>
            <p className=" text-2xl fw-bold pb-2 dark:text-white">350</p>
            <div className="flex justify-between items-center">
              <div className="flex  gap-1  rounded-full px-2 py-1 bg-green-200 dark:bg-white dark:text-green-600">
                <img src={img10} alt="" />
                <p className="text-green text-xs fw-semibold">23.5%</p>
              </div>
              <p className=" text-gray-400 text-base dark:text-white">
                vs.previous month
              </p>
            </div>
          </div>
          <div
            // data-aos="zoom-in-up"
            className="flex flex-col w-[240px] h-[180px]  border-2 p-2 rounded-xl gap-2"
          >
            <div className="flex items-center justify-between">
              <img src={img5} alt="" />
              <img src={img7} alt="" />
            </div>
            <p className=" text-gray-400 text-base dark:text-white">
              Total Refund
            </p>
            <p className=" dark:text-white text-2xl fw-bold pb-2">270</p>
            <div className="flex justify-between items-center">
              <div className="flex  gap-1  rounded-full px-2 py-1 bg-pink-200 dark:bg-white dark:text-pink-700">
                <img src={img9} alt="" />
                <p className="text-pink text-xs fw-semibold">23.5%</p>
              </div>
              <p className=" text-gray-400 text-base dark:text-white">
                vs.previous month
              </p>
            </div>
          </div>
          <div
            // data-aos="zoom-in-up"
            className="flex flex-col w-[240px] h-[180px] border-2 p-2 rounded-xl gap-2"
          >
            <div className="flex items-center justify-between">
              <img src={img1} alt="" />
              <img src={img7} alt="" />
            </div>
            <p className=" text-gray-400 text-base dark:text-white  ">
              Average Sales
            </p>
            <p className="dark:text-white text-2xl fw-bold pb-2">1567</p>
            <div className="flex justify-between items-center">
              <div className="flex  gap-1  rounded-full px-2 py-1 bg-pink-200 dark:bg-white dark:text-pink-700">
                <img src={img9} alt="" />
                <p className="text-pink text-xs fw-semibold">23.5%</p>
              </div>
              <p className=" text-gray-400 text-base dark:text-white">
                vs.previous month
              </p>
            </div>
          </div>

          <div
            // data-aos="zoom-in-up"
            className="flex flex-col w-[240px] h-[180px] border-2 p-2 rounded-xl gap-2"
          >
            <div className="flex items-center justify-between">
              <img src={img3} alt="" />
              <img src={img8} alt="" />
            </div>
            <p className=" text-gray-400 text-base dark:text-white">
              Total Income
            </p>
            <p className="dark:text-white text-2xl fw-bold pb-2">$350.000</p>
            <div className="flex justify-between items-center">
              <div className="flex  gap-1  rounded-full px-2 py-1 bg-green-200 dark:bg-white dark:text-green-700 ">
                <img src={img10} alt="" />
                <p className="text-green text-xs fw-semibold">23.5%</p>
              </div>
              <p className=" text-gray-400 text-base dark:text-white">
                vs.previous month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTrend;
