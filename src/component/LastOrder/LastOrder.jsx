import React, { useState } from "react";
import img1 from "../../assets/image/Frame 1000003208 (1).png";
import img2 from "../../assets/image/Frame 1000003208 (2).png";
import img3 from "../../assets/image/Frame 1000003208 (3).png";
import img4 from "../../assets/image/Frame 1000003208 (4).png";
import img5 from "../../assets/image/Frame 1000003208.png";
import { PiFileArrowDownLight } from "react-icons/pi";
import DetailsModal from "../DetailsModal";

const OrderDetails = [
  {
    id: 1,
    img: img5,
    name: "Mercus Bergson",
    date: "Nov15,2023",
    amount: "$80,000",
    status: "Paid",
    invoice: "View",
    details: "Mercus Bergson <br/> Nov15,2023 <br/> $80,000 <br/> Paid",
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
  {
    id: 6,
    img: img5,
    name: "Mercus Bergson",
    date: "Nov15,2023",
    amount: "$80,000",
    status: "Paid",
    invoice: "View",
  },
  {
    id: 7,
    img: img1,
    name: "Jaydon Vacarro",
    date: "Nov14,2023",
    amount: "$150,000",
    status: "Refund",
    invoice: "View",
  },
  {
    id: 8,
    img: img2,
    name: "Corey Schiefer",
    date: "Nov14,2023",
    amount: "$87,000",
    status: "Paid",
    invoice: "View",
  },
];

const LastOrder = () => {
  const [showAll, setShowAll] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openRow, setOpenRow] = useState(null);

  return (
    <div className="container flex flex-col lg:flex-ro gap-3 pb-16 lg:items-end items-center lg:pt-5">
      <div className=" border-2 flex flex-col  p-3 lastorder rounded-xl w-full  ">
        <div className="flex justify-between mb-2">
          <p
            data-aos="zoom-out-right"
            className="fs-4 fw-semibold text-gray-900 dark:text-pink-500"
          >
            Last Orders
          </p>
          <button
            data-aos="zoom-out-right"
            className="fs-4 fw-semibold text-green-300 focus:outline-none "
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "See Less" : "See All"}
          </button>
        </div>
        <div className="overflow-auto">
          <table className="w-100 ">
            <thead className="border-b-[3px] border-gray-300 hover:bg-white dark:hover:bg-yellow-600 ">
              <tr
                data-aos="zoom-out-left"
                className=" text-gray-400 dark:text-white items-center "
              >
                <th className="font-medium text-base whitespace-nowrap pb-3">
                  Name
                </th>
                <th className="font-medium text-base whitespace-nowrap pb-3 px-5">
                  Date
                </th>
                <th className="font-medium text-base whitespace-nowrap pb-3 px-4">
                  Amount
                </th>
                <th className="font-medium text-base whitespace-nowrap pb-3 px-4">
                  Status
                </th>
                <th className="font-medium text-base whitespace-nowrap pb-3">
                  Invoice
                </th>
              </tr>
            </thead>

            <tbody>
              {OrderDetails.slice(0, 5).map((data) => (
                <tr
                  key={data.id}
                  className="border-b-[3px] border-gray-300 hover:bg-white dark:hover:bg-yellow-600 py-4"
                >
                  {/* {showModal ? (
                    <DetailsModal data={data} setShowModal={setShowModal} />
                  ) : null} */}
                  <td
                    data-aos="fade-up-right"
                    className=" text-gray-600 dark:text-white "
                  >
                    <div className="flex items-center gap-3 ">
                      <img src={data.img} alt="" />
                      <h2 className="text-base whitespace-nowrap">
                        {data.name}
                      </h2>
                    </div>
                  </td>
                  <td
                    data-aos="fade-up-left"
                    className=" text-gray-500 dark:text-white text-base whitespace-nowrap px-5"
                  >
                    {data.date}
                  </td>
                  <td
                    data-aos="fade-down-right"
                    className=" text-gray-800 fw-semibold text-base dark:text-white whitespace-nowrap px-4"
                  >
                    {data.amount}
                  </td>
                  <td
                    data-aos="fade-down-left"
                    className={`text-base px-4 ${
                      data.status === "Paid" ? "text-green-300" : "text-red-600"
                    } `}
                  >
                    {data.status}
                  </td>

                  <td
                    data-aos="zoom-in-down"
                    className="relative text-gray-600 text-base dark:text-white whitespace-nowrap cursor-pointer"
                  >
                    <div className="flex items-center gap-1 ">
                      <PiFileArrowDownLight className="" />
                      <button
                        onClick={() =>
                          setOpenRow((prev) =>
                            prev === data.id ? null : data.id
                          )
                        }
                        className="text-base whitespace-nowrap m-0"
                      >
                        {data.invoice}
                      </button>
                    </div>
                  </td>
                  {openRow === data.id && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
                      <div className="p-3 bg-white rounded-lg flex flex-col items-center text-center shadow-lg w-40">
                        <p className="text-black font-semibold text-base">
                          {data.name}
                        </p>
                        <p className="text-black font-semibold text-base">
                          {data.date}
                        </p>
                        <p className="text-black font-semibold text-base">
                          {data.amount}
                        </p>
                        <p
                          className={`text-base px-4 ${
                            data.status === "Paid"
                              ? "text-green-300"
                              : "text-red-600"
                          } `}
                        >
                          {data.status}
                        </p>
                        <button
                          onClick={() => setOpenRow(null)}
                          className="mt-3 text-white bg-red-600 hover:bg-green-500 px-4 py-2 rounded-lg font-semibold"
                        >
                          CLOSE
                        </button>
                      </div>
                    </div>
                  )}
                </tr>
              ))}

              {showAll &&
                OrderDetails.slice(5, 8).map((data) => (
                  <tr
                    key={data.id}
                    className="border-b-[3px] border-gray-300 hover:bg-white dark:hover:bg-yellow-600 py-4"
                  >
                    <td
                      data-aos="fade-up-right"
                      className=" text-gray-600 dark:text-white"
                    >
                      <div className="flex items-center gap-3">
                        <img src={data.img} alt="" />
                        <h2 className="text-base whitespace-nowrap">
                          {data.name}
                        </h2>
                      </div>
                    </td>
                    <td
                      data-aos="fade-up-left"
                      className=" text-gray-500 dark:text-white text-base whitespace-nowrap px-5"
                    >
                      {data.date}
                    </td>
                    <td
                      data-aos="fade-down-right"
                      className=" text-gray-800 fw-semibold text-base dark:text-white whitespace-nowrap px-4"
                    >
                      {data.amount}
                    </td>
                    <td
                      data-aos="fade-down-left"
                      className={`text-base px-4 ${
                        data.status === "Paid"
                          ? "text-green-300"
                          : "text-red-600"
                      } `}
                    >
                      {data.status}
                    </td>

                    {/* <td
                      data-aos="zoom-in-down"
                      className=" text-gray-600 text-base dark:text-white whitespace-nowrap"
                    >
                      <div className="flex items-center gap-1">
                        <PiFileArrowDownLight className="" />
                        <h2 className="text-base whitespace-nowrap">
                          {data.invoice}
                        </h2>
                      </div>
                    </td> */}
                    <td
                      data-aos="zoom-in-down"
                      className="relative text-gray-600 text-base dark:text-white whitespace-nowrap cursor-pointer"
                    >
                      <div className="flex items-center gap-1 ">
                        <PiFileArrowDownLight className="" />
                        <button
                          onClick={() =>
                            setOpenRow((prev) =>
                              prev === data.id ? null : data.id
                            )
                          }
                          className="text-base whitespace-nowrap m-0"
                        >
                          {data.invoice}
                        </button>
                      </div>
                    </td>
                    {openRow === data.id && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
                        <div className="p-3 bg-white rounded-lg flex flex-col items-center text-center shadow-lg w-40">
                          <p className="text-black font-semibold text-base">
                            {data.name}
                          </p>
                          <p className="text-black font-semibold text-base">
                            {data.date}
                          </p>
                          <p className="text-black font-semibold text-base">
                            {data.amount}
                          </p>
                          <p
                            className={`text-base px-4 ${
                              data.status === "Paid"
                                ? "text-green-300"
                                : "text-red-600"
                            } `}
                          >
                            {data.status}
                          </p>
                          <button
                            onClick={() => setOpenRow(null)}
                            className="mt-3 text-white bg-red-600 hover:bg-green-500 px-4 py-2 rounded-lg font-semibold"
                          >
                            CLOSE
                          </button>
                        </div>
                      </div>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className=" border-2 rounded-xl p-3 topplatform dark:bg-black px-3 ">
        <div data-aos="zoom-out-right" className="flex justify-between mb-2 ">
          <p className="fs-4 fw-semibold text-gray-900 dark:text-pink-500 ">
            Top Platform
          </p>

          <button
            data-aos="zoom-out-right"
            className="fs-4 fw-semibold text-green-300 "
            onClick={() => setSeeMore(!seeMore)}
          >
            {seeMore ? "See Less" : "See All"}
          </button>
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
