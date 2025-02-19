import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const RebateRatioHeader = () => {
  return (
    <header className="bg-custom-light-gray fixed top-0 w-[412px] h-12 flex items-center px-2 z-10">
      {/* Back Arrow on the Left */}
      <IoIosArrowBack className="text-[#f5f3f0] text-xl cursor-pointer ml-2" />

      {/* Notification Title in the Center */}
      <p className="text-[#f5f3f0] text-xl mx-auto">Rebate ratio</p>
    </header>
  );
};

export default RebateRatioHeader;
