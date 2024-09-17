import React from "react";

const SkillSection = () => {
  return (
    <div className="mx-24">
      <div className="text-[#FFC772] text-2xl md:text-7xl font-semibold">
        SKILLS
      </div>
      <div className="flex flex-row gap-20 my-8 text-white text-xl md:text-4xl font-lato font-thin">
        <div>
          <div>FRONTEND:</div>
          <div>BACKEND:</div>
          <div>DATABASE:</div>
        </div>
        <div>
          <div>HTML, CSS, JSS, REACT, NEXT, SOLIDJS</div>
          <div>NODEJS, NEXTJS, EXPRESS, DOCKER</div>
          <div>MYSQL, MONGODB, PRISMA</div>
        </div>
      </div>
      {/* <div className="flex my-8 text-white text-xl md:text-4xl font-lato font-thin">
        FRONTEND{" "}
        <span className="px-20">HTML, CSS, JSS, REACT, NEXT, SOLIDJS</span>
      </div>
      <div className="flex my-8 text-white text-xl md:text-4xl font-lato font-thin">
        BACKEND: <span className="px-20">NODEJS, NEXTJS, EXPRESS, DOCKER</span>
      </div>
      <div className="flex my-8 text-white text-xl md:text-4xl font-lato font-thin">
        DATABASE: <span className="px-20">MYSQL, MONGODB, PRISMA</span>
      </div> */}
      <div className="bg-white p-[0.1px] my-12"></div>
    </div>
  );
};

export default SkillSection;
