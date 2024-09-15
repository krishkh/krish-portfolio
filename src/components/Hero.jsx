import React from "react";
import "./Hero.css";
import { gsap } from "gsap";

function Hero() {
  React.useEffect(() => {
    gsap.to("#Hero", {
      background: "linear-gradient(to bottom, #1D1D1D, #504028c4, #1D1D1D)",
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
    });
  }, []);
  return (
    <div
      id="Hero"
      className="bg-gradient-to-b from-[#1D1D1D] via-[#504028c4] to-[#1D1D1D]"
    >
      <div className="flex-col md:flex-row flex justify-center items-center gap-14 md:gap-24 m-24">
        <div className="flex justify-center p-4 items-center text-white text-2xl md:text-7xl font-lato font-thin">
          Hi I am Krish
        </div>
        <div className="flex justify-center p-4 items-center text-white text-7xl font-lato font-thin">
          <img
            src="/krish.jpg"
            alt="krish"
            className="w-40 md:w-80 rounded-full aspect-[1] object-cover"
          />
        </div>
      </div>
      <div className="bg-white p-[0.1px] mx-24"></div>
    </div>
  );
}

export default Hero;
