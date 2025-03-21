import React from "react";

import DarkMode from "../DarkMode";
import { RiLogoutCircleLine, RiLoginCircleLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import { BiSolidCategoryAlt, BiTrendingUp } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="sidebar   d-flex flex-xl-column  items-center justify-content-between justify-content-xl-start gap-xl-4  px-2 py-3 mx-md-4  bg-gray-100 rounded-xl dark:bg-black dark:text-white">
      <div
      //  data-aos="fade-down-left"
        className=" bg-green-300 p-2 rounded-full">
        <BsLightningChargeFill className="text-xl text-gray-400" />
      </div>
      <div
        // data-aos="zoom-out-right"
        className=" flex-xl-column gap-4 hidden lg:flex items-center text-gray-400 dark:text-white"
      >
        <BiSolidCategoryAlt className="text-xl" />
        <BiTrendingUp className="text-xl border-3 dark:border-white rounded-3 p-1" />
        <MdOutlinePeopleAlt className="text-xl " />
        <BsBoxSeam className="text-xl" />
        <IoSettingsOutline className="text-xl " />
        <BsExclamationCircle className="text-xl" />
      </div>
      <div>
        <DarkMode />
      </div>

      <div
        // data-aos="fade-up"
        className=" flex-xl-column gap-4 text-gray-400 dark:text-white align-items-center hidden lg:flex "
      >
        <RiLoginCircleLine className="text-xl" />
        <IoSettingsOutline className="text-xl" />
        <RiLogoutCircleLine className="text-xl" />
      </div>
    </div>
  );
};

export default SideBar;
