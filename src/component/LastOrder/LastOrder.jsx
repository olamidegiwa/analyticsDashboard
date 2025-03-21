import React, { useState } from "react";

import TableData from "../TableData";

const LastOrder = () => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="container flex flex-col lg:flex-row gap-3 pb-16 lg:items-end items-center lg:pt-5">
      <TableData />

      <div className=" border-2 rounded-xl p-3 topplatform dark:bg-black px-3 ">
        <div
          // data-aos="zoom-out-right"
          className="flex justify-between mb-2 "
        >
          <p className="fs-4 fw-semibold text-gray-900 dark:text-pink-500 ">
            Top Platform
          </p>

          <button
            // data-aos="zoom-out-right"
            className="fs-4 fw-semibold text-green-300 "
            onClick={() => setSeeMore(!seeMore)}
          >
            {seeMore ? "See Less" : "See All"}
          </button>
        </div>

        <div className="flex flex-col gap-2 py-2  ">
          <p
            // data-aos="zoom-in-up"
            className="text-gray-900 text-xl fw-semibold dark:text-white"
          >
            Book Bazaar
          </p>
          <div
            // data-aos="zoom-in-up"
            className="w-100 h-[16px] rounded-full bg-gray-300 dark:bg-white"
          >
            <div className="w-50 h-[16px] bg-blue-700 rounded-full"></div>
          </div>
          <div
            // data-aos="zoom-in-up"
            className="flex items-center justify-between text-base text-gray-400 dark:text-white"
          >
            <p>$2,500,000</p>
            <p>+15%</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-2">
          <p
            // data-aos="zoom-in-up"
            className="text-gray-900 text-xl fw-semibold dark:text-white"
          >
            Artisan Aisle
          </p>
          <div
            // data-aos="zoom-in-up"
            className="w-100 h-[16px] rounded-full bg-gray-300 dark:bg-white"
          >
            <div className="h-[16px] bg-blue-400 rounded-full Aisle"></div>
          </div>
          <div
            // data-aos="zoom-in-up"
            className="flex items-center justify-between text-base text-gray-400 dark:text-white"
          >
            <p>$1,800,000</p>
            <p>+10%</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-2">
          <p
            // data-aos="zoom-in-up"
            className="text-gray-900 text-xl fw-semibold dark:text-white"
          >
            Toy Troop
          </p>
          <div
            // data-aos="zoom-in-up"
            className="w-100 h-[16px] rounded-full bg-gray-300 dark:bg-white"
          >
            <div className="h-[16px] Troop bg-yellow-500 rounded-full"></div>
          </div>
          <div
            // data-aos="zoom-in-up"
            className="flex items-center justify-between text-base text-gray-400 dark:text-white"
          >
            <p>$1,200,000</p>
            <p>+8%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastOrder;
