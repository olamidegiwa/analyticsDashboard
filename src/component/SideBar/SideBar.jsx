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
    <div className="sidebar position-sticky top-0 d-flex flex-xl-column items-center justify-content-between justify-content-xl-start gap-xl-4  px-2 py-3 mx-md-4  bg-gray-100 rounded-xl dark:bg-black dark:text-white">
      <div data-aos="fade-down-left" className=" bg-green-300 p-2 rounded-full">
        <BsLightningChargeFill className="fs-2 text-gray-400" />
      </div>
      <div
        data-aos="zoom-out-right"
        className=" flex-xl-column gap-4 hidden lg:flex items-center text-gray-400 dark:text-white"
      >
        <BiSolidCategoryAlt className="fs-3" />
        <BiTrendingUp className="fs-3 border-3 dark:border-white rounded-3 p-1" />
        <MdOutlinePeopleAlt className="fs-3 " />
        <BsBoxSeam className="fs-3" />
        <IoSettingsOutline className="fs-3 " />
        <BsExclamationCircle className="fs-3" />
      </div>
      <div>
        <DarkMode />
      </div>

      <div
        data-aos="fade-up"
        className=" flex-xl-column gap-4 text-gray-400 dark:text-white align-items-center hidden lg:flex "
      >
        <RiLoginCircleLine className="fs-3" />
        <IoSettingsOutline className="fs-3" />
        <RiLogoutCircleLine className="fs-3" />
      </div>
    </div>
  );
};

export default SideBar;
