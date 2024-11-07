import Image from "next/image";
import React from "react";

const CareersHeroSection = () => {
  return (
    <div className="flex flex-col lg:flex lg:flex-row h-screen">
      <div className="bg-[#021859] lg:w-[40%]  h-full w-full  flex items-center justify-center text-white p-10 lg:p-20">
        <div className="max-w-lg text-center lg:text-left  mt-20 lg:mt-0">
          <h1 className="text-3xl font-bold mb-4 font-tiempos">Welcome to</h1>
          <h1 className="text-3xl font-bold font-tiempos">
            Hawksworth Careers
          </h1>
        </div>
      </div>
      <div className="lg:w-[60%] h-screen bg-[#021859] w-full relative">
        <div className="lg:hidden">
          <Image
            src="/assets/svg/CareersHeroImageSM.svg"
            alt="Hawksworth Careers"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="hidden lg:block">
          <Image
            src="/assets/svg/CareersHeroImage.svg"
            alt="Hawksworth Careers"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CareersHeroSection;
