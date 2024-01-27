import React from "react";
import { GoSearch } from "react-icons/go";
import { LuCalendarDays } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import img1 from "../../assets/image/seanheader.jpg";
import { IoIosArrowDown } from "react-icons/io";

const Search = () => {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  return (
    <div className="py-2 ">
      <div className="container flex justify-between items-center ">
        <h1
          // data-aos="fade-up"
          className=" dark:text-pink-500 text-gray-900 fw-semibold text-xl"
        >
          Dashboard
        </h1>
        <div className="flex  items-center gap-2 ">
          <div
            // data-aos="flip-up"
            className=" rounded-full border gap-2  w-[350px] dark:text-black text-gray-300 hover:w-[400px] transition-all duration-300 items-center py-2 px-3 bg-white search hidden lg:flex"
          >
            <GoSearch className="text-2xl dark:text-black " />
            <input
              type="text"
              placeholder="Search..."
              className="focus:outline-none w-[280px]  "
            />
          </div>

          <div
            // data-aos="flip-down"
            className=" items-center text-xl text-black dash-calender hidden lg:flex gap-1 "
          >
            <LuCalendarDays className="dark:text-white" />
            <div className="flex items-center dark:text-white ">
              <span>{month} </span>
              <span className="px-1">{new Date().getDate()},</span>
              <span> {new Date().getFullYear()}</span>
            </div>
            <div>
              <IoNotificationsOutline className="mx-4 border rounded-full px-1 fs-2 dark:text-white" />
            </div>
          </div>
          <div
            // data-aos="fade-up"
            className="flex items-center rounded-full w-[195px] gap-2 border px-1 py-1 "
          >
            <img src={img1} alt="" className="h-10 w-10 rounded-full" />
            <div className="flex flex-col items-center">
              <p className="fw-semibold dark:text-white text-base">
                Skillboy_intl
              </p>
              <p className=" text-gray-400 dark:text-white text-sm">
                gmail@gmail.com
              </p>
            </div>
            <IoIosArrowDown className="fs-3 dark:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
