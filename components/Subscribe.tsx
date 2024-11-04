"use client";

import React, { useState } from "react";
import StyledSection from "./common/StyledSection";
import StyledHeaderText from "./common/StyledText/StyledHeaderText";
import Button from "./common/Button";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    console.log("Subscribed with email:", email);
  };

  return (
    <StyledSection containerClassname="bg-blue-gradient">
      <div className="lg:w-4/5 text-center mx-auto flex flex-col items-center">
        <StyledHeaderText
          text="Subscribe to our blog  today for the latest strategies, trends, and advice to drive your business forward."
          textClassname="lg:text-5xl text-3xl text-white"
          containerClassname="mb-[30px] lg:mb-8"
        />

        <div className="lg:max-w-[457px] flex items-center justify-between gap-3">
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="lg:h-[45px] h-10 border bg-primaryBlue border-[#DEDEDE] rounded-md lg:px-6 px-3 flex items-center justify-center flex-1 focus:outline-none focus:border-primaryBlue text-[#E8E8E8] placeholder:text-[#E8E8E8] text-sm lg:text-base"
          />

          <Button
            label="Subscribe"
            onClick={handleSubscribe}
            variant="primary"
            className="lg:h-[45px] h-10 hover:bg-primaryBlue border-2 border-white hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center "
          />
        </div>
      </div>
    </StyledSection>
  );
};

export default Subscribe;
