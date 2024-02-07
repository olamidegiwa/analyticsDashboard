import React from "react";
import { IoMdSunny } from "react-icons/io";
import { FiMoon } from "react-icons/fi";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);
  return (
    <div
      data-aos="fade-down-left"
      className=" flex flex-xl-column gap-3 py-2 px-2 dark:bg-white  rounded-full items-center border-4 dark:border-white"
    >
      <IoMdSunny
        onClick={() => setTheme(theme === "light" ? "light" : "light")}
        className="fs-1  rounded-full bg- px-1 text-gray-400 bg-gree-300 dark:text-black cursor-pointer transition-all duration-300"
      />
      <FiMoon
        onClick={() => setTheme(theme === "light" ? "dark" : "dark")}
        className="fs-1 cursor-pointer transition-all duration-300 fs-2 text-gray-400 dark:text-black"
      />
    </div>
  );
};

export default DarkMode;
