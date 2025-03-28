"use client";
import React, { useState } from "react";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => {
  //   setIsOpen(!isOpen); // สลับสถานะเปิด/ปิด
  //   onClick(); // เรียกฟังก์ชัน onClick ที่ส่งมาจาก props
  // };

  return (
    <div className=" md:hidden right-0 m-10  z-50">
      <button  className="relative group">
        <div className="relative flex items-center justify-center rounded-full w-[35px] h-[35px] transform transition-all bg-white ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div
            className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ${
              isOpen ? "-rotate-[45deg]" : ""
            } origin-center`}
          >
            <div
              className={`bg-black h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                isOpen ? "-rotate-90 h-[1px] -translate-y-[1px]" : ""
              } origin-right delay-75`}
            ></div>
            <div className="bg-black h-[1px] rounded"></div>
            <div
              className={`bg-black h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${
                isOpen ? "-rotate-90 h-[1px] translate-y-[1px]" : ""
              } origin-left delay-75`}
            ></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default MenuBar;