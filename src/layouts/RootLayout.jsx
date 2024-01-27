import React, { useState } from "react";
import SideBar from "../component/SideBar/SideBar";
import Search from "../component/Search/Search";
import { Outlet } from "react-router-dom";
import SalesTrend from "../component/SalesTrend/SalesTrend";
import LastOrder from "../component/LastOrder/LastOrder";

const RootLayout = () => {
  return (
    <div className="py-md-4 d-xl-flex">
      <SideBar />
      <div className="w-100">
        <Search />
        <SalesTrend />
        <LastOrder />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
