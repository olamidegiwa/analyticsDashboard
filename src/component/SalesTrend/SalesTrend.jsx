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
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="flex flex-col xl:flex-row py-3 gap-3 place-items-center xl:items-end">
        <div className="salestrend flex flex-col">
          <div className="flex items-center justify-between">
            <h1
              // data-aos="fade-down"
              // data-aos-duration="1500"
              className="text-xl text-gray-900 fw-semibold dark:text-pink-500 "
            >
              Sales Trends
            </h1>
            <div className="flex items-center gap-2">
              <p
                // data-aos="fade-down"
                data-aos-duration="1500"
                className="text-lg text-gray-600 fw-semibold dark:text-green-300"
              >
                Sort by:
              </p>
              <div className="flex items-center gap-2 group relative cursor-pointer">
              
                <div onClick={() => setIsOpen(true)} className="flex gap-2 items-center px-3 py-1 border-2 rounded-lg ">
                  <p> Weekly</p>
                  <span>
                    <IoIosArrowDown className="transition-all group-hover:rotate-180 text-xl" />
                  </span>
                </div>
                {isOpen && (
                  <ul
                    onClick={() => setIsOpen(false)}
                    className="border-2 rounded-lg w-28 bg-white dark:text-black dark:bg-white fixed top-48 z-10"
                  >
                    <li className="hover:bg-gray-300 text-gray-600 p-2">
                      Sunday
                    </li>
                    <li className="hover:bg-gray-300 text-gray-600 p-2">
                      {" "}
                      Monday
                    </li>
                    <li className="hover:bg-gray-300 text-gray-600 p-2">
                      Tuesday
                    </li>
                    <li className="hover:bg-gray-300 text-gray-600 p-2">
                      Wednesday
                    </li>
                    <li className="hover:bg-gray-300 text-gray-600  p-2">
                      Thursday
                    </li>
                    <li className="hover:bg-gray-300 text-gray-600 p-2">
                      Friday
                    </li>
                    <li className="hover:bg-gray-300 text-gray-600 p-2">
                      Saturday
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          <Chart chartData={userData} />
          {/* <div className="userdata">
          </div> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center w-100">
          <div
            // data-aos="zoom-in-up"
            className="flex flex-col orders border-2 py-4 px-3 rounded-xl gap-2 dark:bg-black"
          >
            <div className="flex items-center justify-between">
              <img src={img4} alt="" />
              <img src={img8} alt="" />
            </div>
            <p className=" text-gray-400 text-base dark:text-white">
              Total Order
            </p>
            <p className=" text-2xl fw-bold pb-2 dark:text-white">350</p>
            <div className="flex justify-between items-center gap-2">
              <div className="flex  gap-1  rounded-full py-2 px-3 bg-green-200 dark:bg-white dark:text-green-600">
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
            className="flex flex-col orders  border-2 py-4 px-3 rounded-xl gap-2"
          >
            <div className="flex items-center justify-between">
              <img src={img5} alt="" />
              <img src={img7} alt="" />
            </div>
            <p className=" text-gray-400 text-base dark:text-white">
              Total Refund
            </p>
            <p className=" dark:text-white text-2xl fw-bold pb-2">270</p>
            <div className="flex justify-between items-center gap-2">
              <div className="flex  gap-1   rounded-full py-2 px-3 bg-pink-200 dark:bg-white dark:text-pink-700">
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
            className="flex flex-col orders border-2 py-4 px-3 rounded-xl gap-2"
          >
            <div className="flex items-center justify-between">
              <img src={img1} alt="" />
              <img src={img7} alt="" />
            </div>
            <p className=" text-gray-400 text-base dark:text-white  ">
              Average Sales
            </p>
            <p className="dark:text-white text-2xl fw-bold pb-2">1567</p>
            <div className="flex justify-between items-center gap-2">
              <div className="flex  gap-1  rounded-full py-2 px-3 bg-pink-200 dark:bg-white dark:text-pink-700">
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
            className="flex flex-col orders border-2 px-3 py-4 rounded-xl gap-2"
          >
            <div className="flex items-center justify-between">
              <img src={img3} alt="" />
              <img src={img8} alt="" />
            </div>
            <p className=" text-gray-400 text-base dark:text-white">
              Total Income
            </p>
            <p className="dark:text-white text-2xl fw-bold pb-2">$350.000</p>
            <div className="flex justify-between items-center gap-2">
              <div className="flex  gap-1  rounded-full py-2 px-3 bg-green-200 dark:bg-white dark:text-green-700 ">
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
