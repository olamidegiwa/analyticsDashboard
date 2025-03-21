import React, { useEffect, useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { FiMoon } from "react-icons/fi";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); // Fixed: Now stores "light"
    }
  }, [theme]);

  return (
    <div className="flex xl:flex-col gap-3 py-1 px-1 rounded-full items-center border-2 border-gray-400 dark:border-white transition-all duration-300 z-10">
      <IoMdSunny
        onClick={() => setTheme("light")}
        className={`text-2xl rounded-full px-1 text-gray-400 cursor-pointer transition-all duration-300 
        ${theme === "light" ? "bg-green-400 text-white" : ""}`}
      />

      {/* Dark Mode Icon */}
      <FiMoon
        onClick={() => setTheme("dark")}
        className={`text-2xl cursor-pointer transition-all duration-300 text-gray-400 dark:text-black rounded-full
        ${theme === "dark" ? "bg-green-400 text-white" : ""}`}
      />
    </div>
  );
};

export default DarkMode;
