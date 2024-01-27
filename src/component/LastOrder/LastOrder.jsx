import React from "react";
import img1 from "../../assets/image/Frame 1000003208 (1).png";
import img2 from "../../assets/image/Frame 1000003208 (2).png";
import img3 from "../../assets/image/Frame 1000003208 (3).png";
import img4 from "../../assets/image/Frame 1000003208 (4).png";
import img5 from "../../assets/image/Frame 1000003208.png";
import { PiFileArrowDownLight } from "react-icons/pi";

const OrderDetails = [
  {
    id: 1,
    img: img5,
    name: "Mercus Bergson",
    date: "Nov15,2023",
    amount: "$80,000",
    status: "Paid",
    invoice: "View",
  },
  {
    id: 2,
    img: img1,
    name: "Jaydon Vacarro",
    date: "Nov14,2023",
    amount: "$150,000",
    status: "Refund",
    invoice: "View",
  },
  {
    id: 3,
    img: img2,
    name: "Corey Schiefer",
    date: "Nov14,2023",
    amount: "$87,000",
    status: "Paid",
    invoice: "View",
  },
  {
    id: 4,
    img: img3,
    name: "Cooper Press",
    date: "Nov14,2023",
    amount: "$100,000",
    status: "Refund",
    invoice: "View",
  },
  {
    id: 5,
    img: img4,
    name: "Philip Lubin",
    date: "Nov13,2023",
    amount: "$78,000",
    status: "Paid",
    invoice: "View",
  },
];

const LastOrder = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-3 place-items-center pb-8">
      <div className=" border-2 flex flex-col p-3 lastorder rounded-xl">
        <div data-aos="zoom-out-right" className="flex justify-between mb-2">
          <p className="fs-4 fw-semibold text-gray-900 dark:text-pink-500">
            Last Orders
          </p>
          <p className="fs-4 fw-semibold text-green-300 ">See all</p>
        </div>

        <table>
          <thead>
            <tr
              data-aos="zoom-out-left"
              className=" text-gray-400 text-base dark:text-white items-center"
            >
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th className="hidden md:flex">Invoice</th>
            </tr>
          </thead>

          <tbody>
            {OrderDetails.map((data) => (
              <tr key={data.id}>
                <td>
                  <div className="flex flex-col md:flex-row items-center dark:text-white text-gray-600 fw-semibold gap-2 text-base">
                    <img src={data.img} alt="" />
                    {data.name}
                  </div>
                </td>
                <td className=" text-gray-500 dark:text-white text-base">
                  {data.date}
                </td>
                <td className=" text-gray-800 fw-semibold text-base dark:text-white">
                  {data.amount}
                </td>
                <td className="text-base">{data.status}</td>

                <td className=" text-gray-600 text-base dark:text-white ">
                  <div
                    data-aos="zoom-in-down"
                    className=" items-center gap-1 hidden md:flex"
                  >
                    <PiFileArrowDownLight />
                    {data.invoice}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=" border-2 rounded-xl p-3 topplatform dark:bg-black mb-4 px-3 ">
        <div data-aos="zoom-out-right" className="flex justify-between mb-2 ">
          <p className="fs-4 fw-semibold text-gray-900 dark:text-pink-500 ">
            Top Platform
          </p>
          <p className="fs-4 fw-semibold text-green-300">See all</p>
        </div>

        <div className="flex flex-col gap-2 py-2  ">
          <p
            data-aos="zoom-in-up"
            className="text-gray-900 fs-4 fw-semibold dark:text-white"
          >
            Book Bazaar
          </p>
          <div
            data-aos="zoom-in-up"
            className="w-100 h-[16px] rounded-full bg-gray-300 dark:bg-white"
          >
            <div className="w-50 h-[16px] bg-blue-700 rounded-full"></div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="flex items-center justify-between fs-4 text-gray-400 dark:text-white"
          >
            <p>$2,500,000</p>
            <p>+15%</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-2">
          <p
            data-aos="zoom-in-up"
            className="text-gray-900 fs-4 fw-semibold dark:text-white"
          >
            Artisan Aisle
          </p>
          <div
            data-aos="zoom-in-up"
            className="w-100 h-[16px] rounded-full bg-gray-300 dark:bg-white"
          >
            <div className="h-[16px] bg-blue-400 rounded-full Aisle"></div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="flex items-center justify-between fs-4 text-gray-400 dark:text-white"
          >
            <p>$1,800,000</p>
            <p>+10%</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-2">
          <p
            data-aos="zoom-in-up"
            className="text-gray-900 fs-4 fw-semibold dark:text-white"
          >
            Toy Troop
          </p>
          <div
            data-aos="zoom-in-up"
            className="w-100 h-[16px] rounded-full bg-gray-300 dark:bg-white"
          >
            <div className="h-[16px] Troop bg-yellow-500 rounded-full"></div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="flex items-center justify-between fs-4 text-gray-400 dark:text-white"
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
