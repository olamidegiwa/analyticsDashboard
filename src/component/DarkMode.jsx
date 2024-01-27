import React from "react";
import img1 from "../assets/image/moon 1.png";
import { IoMdSunny } from "react-icons/io";

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
    <div className=" flex flex-xl-column gap-3 py-2 px-2 bg-white rounded-full items-center">
      <IoMdSunny
        onClick={() => setTheme(theme === "light" ? "light" : "light")}
        className="fs-2  rounded-full bg-success px-1 text-white bg-green-300 cursor-pointer transition-all duration-300"
      />
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "dark")}
        src={img1}
        alt="icon"
        className="fs-1 cursor-pointer transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
