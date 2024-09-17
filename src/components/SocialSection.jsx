import React from "react";

const SocialSection = () => {
  return (
    <div className="flex flex-col gap-12 mx-24">
      <div className="text-[#FFC772] text-2xl md:text-7xl font-semibold">
        SOCIALS
      </div>
      <div className="flex gap-8 bg-gradient-to-b from-[#1D1D1D] via-[#504028c4] to-[#1D1D1D]">
        <div className="bg-white p-8"></div>
        <div className="bg-white p-8"></div>
        <div className="bg-white p-8"></div>
        <div className="bg-white p-8"></div>
      </div>
      <div className="bg-white p-[0.1px] my-12"></div>
    </div>
  );
};

export default SocialSection;
