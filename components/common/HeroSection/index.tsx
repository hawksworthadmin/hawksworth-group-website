"use client";

import React from "react";
import StyledText from "../StyledText";

export interface HeroProps {
  imageUrl: string;
  header: string;
  subheader?: string;
  description?: string;
  button?: React.ReactNode;
}

const HeroSection = ({
  imageUrl,
  header,
  subheader,
  description,
  button,
}: HeroProps) => {
  return (
    <section
      className="relative w-full bg-cover bg-center flex flex-col justify-center items-center lg:px-20 lg:py-32 px-10 py-36"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Dark overlay to make text pop on image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black z-10"></div>
      <div className="relative z-20 lg:w-[60%] w-full text-center text-white ">
        <h1 className="font-semibold lg:text-[4.25rem] text-[1.75rem] lg:leading-[5.313rem] leading-[2.313rem] pb-2">
          {header}
          <span className="text-primaryYellow">{subheader}</span>
        </h1>
        <StyledText textClassname="pb-6">{description}</StyledText>
        {button}
      </div>
    </section>
  );
};

export default HeroSection;
