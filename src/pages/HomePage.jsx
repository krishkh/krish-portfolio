import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="bg-[#1D1D1D] min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomePage;
