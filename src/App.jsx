import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className="dark:bg-black dark:text-white">
      <RootLayout />
    </div>
  );
}

export default App;
