import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="mx-24">
      <div className="flex-col md:flex-row flex  gap-12 md:gap-60">
        <div className="flex justify-center p-4 items-center text-white text-2xl md:text-8xl font-lato font-thin">
          HI I AM KRISH
        </div>
        <div className="flex justify-center p-4 items-center text-white text-7xl font-lato font-thin">
          <img
            src="/krish.jpg"
            alt="krish"
            className="w-40 md:w-[25rem] rounded-full  aspect-[1] object-cover"
          />
        </div>
      </div>
      <div className="bg-white my-12 p-[0.1px]"></div>
    </div>
  );
}

export default Hero;
