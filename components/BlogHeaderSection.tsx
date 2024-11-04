"use client";

import React, { useState } from "react";
import StyledSection from "./common/StyledSection";
import StyledHeaderText from "./common/StyledText/StyledHeaderText";
import Button from "./common/Button";
import Image from "next/image";

const BlogHeaderSection = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    console.log("Subscribed with email:", email);
  };

  return (
    <div>
      <StyledSection containerClassname="lg:p-[120px] py-[60px]">
        <div className="lg:w-2/5 text-center mx-auto flex flex-col items-center">
          <StyledHeaderText
            text={"Articles & Thought Leadership"}
            textClassname="lg:text-5xl text-3xl"
            subText="Stay ahead with our latest articles and updates, subscribe for faster delivery."
            subTextClassname="text-darkGrey"
            containerClassname="mb-6 lg:mb-8"
          />

          <div className="lg:max-w-[457px] flex items-center justify-between gap-3">
            <input
              type="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="lg:h-[45px] h-10 border border-[#DEDEDE] rounded-md lg:px-6 px-3 flex items-center justify-center flex-1 focus:outline-none focus:border-primaryBlue text-darkGrey placeholder:text-darkGrey text-sm lg:text-base"
            />

            <Button
              label="Subscribe"
              onClick={handleSubscribe}
              variant="blue"
              className="lg:h-[45px] h-10 hover:bg-white border-2 border-primaryBlue hover:text-primaryBlue transition-all duration-300 ease-in-out flex items-center justify-center"
            />
          </div>
        </div>
      </StyledSection>

      <div className="">
        <Image
          src={"/assets/images/blog-hero.webp"}
          alt={""}
          height={600}
          width={1512}
          //   className="h-[340px] lg:h-[600px] object-cover"
        />
      </div>
    </div>
  );
};

export default BlogHeaderSection;
