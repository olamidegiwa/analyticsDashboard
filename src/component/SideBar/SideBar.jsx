import React from "react";
import icon1 from "../../assets/icon/Analytics Dashboard/Container/Vector.png";
import icon2 from "../../assets/icon/Analytics Dashboard (1)/Container/Component 8.png";
import icon3 from "../../assets/icon/Analytics Dashboard (2)/Container/Component 10.png";
import icon4 from "../../assets/icon/Analytics Dashboard (3)/Container/Component 9.png";
import icon5 from "../../assets/icon/Analytics Dashboard (4)/Container/Component 13.png";
import icon6 from "../../assets/icon/Analytics Dashboard (5)/Container/Frame 12.png";
import icon7 from "../../assets/icon/Analytics Dashboard (6)/Container/Icon.png";
import icon8 from "../../assets/icon/Analytics Dashboard (7)/Container/Frame 12.png";
import icon9 from "../../assets/icon/Analytics Dashboard (8)/Container/Icon.png";
import DarkMode from "../DarkMode";

const SideBar = () => {
  return (
    <div className="sidebar d-flex flex-xl-column items-center justify-content-between justify-content-xl-start gap-xl-4 px-2 py-3 mx-md-2  bg-gray-100 rounded-xl dark:bg-black dark:text-white">
      <img
      //  data-aos="fade-down-right"
        src={icon1} alt="" className="w-10" />
      <div
        // data-aos="fade-down-left"
        className=" flex-xl-column hidden lg:flex items-center"
      >
        <img src={icon2} alt="icon" />
        <img src={icon3} alt="icon" />
        <img src={icon4} alt="icon" />
        <img src={icon5} alt="icon" />
        <img src={icon8} alt="icon" className="w-10" />
        <img src={icon6} alt="icon" className="w-10" />
      </div>
      <div>
        <DarkMode />
      </div>

      <div
        // data-aos="fade-up"
        className=" flex-xl-column  align-items-center hidden xl:flex"
      >
        <img src={icon7} alt="icon" />
        <img src={icon8} alt="icon" />
        <img src={icon9} alt="icon" />
      </div>
    </div>
  );
};

export default SideBar;
