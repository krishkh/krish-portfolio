import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import NameSection from "../components/NameSection";
import SkillSection from "../components/SkillSection";
import { gsap } from "gsap";
import Projects from "../components/ProjectSection";
import SocialSection from "../components/SocialSection";
import Footer from "../components/Footer";
const HomePage = () => {
  React.useEffect(() => {
    gsap.to("#Hero", {
      background: "linear-gradient(to bottom, #1D1D1D, #504028c4, #1D1D1D)",
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
    });
  }, []);
  return (
    <div className="bg-[#1D1D1D]">
      <div
        id="Hero"
        className="bg-gradient-to-b from-[#1a1611c4] via-[#504028c4] to-[#1D1D1D]  min-h-screen"
      >
        <Navbar />
        <Hero />
        <NameSection />
        <SkillSection />
      </div>
      <Projects />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default HomePage;
