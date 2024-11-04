import Image from "next/image";
import React from "react";

const CareersHeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="relative lg:w-1/2 bg-[#021859] flex items-center justify-center text-white p-10 lg:p-20">
        <div className="z-10 max-w-lg text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">Welcome to</h1>
          <h1 className="text-4xl font-bold">Hawksworth Careers</h1>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute w-0 h-0 border-l-[100vw] border-l-transparent border-b-[100vh] lg:border-b-transparent lg:border-r-[100vh] border-[#021859] top-0 right-0 lg:right-auto lg:top-auto lg:bottom-0 lg:left-full transform -translate-y-1/2 lg:-translate-x-1/2 z-0"></div>
      </div>

      <div className="lg:w-1/2 relative">
        <Image
          src="/assets/images/venture-incubation.webp"
          alt="Hawksworth Careers"
          layout="fill"
          objectFit="cover"
          className="z-10"
        />
      </div>
    </div>
  );
};

export default CareersHeroSection;
