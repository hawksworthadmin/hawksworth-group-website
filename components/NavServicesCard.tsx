import React from "react";
import StyledSection from "./common/StyledSection";
import StyledText from "./common/StyledText";
import { NavServicesList } from "@/data/servicesData";

const NavServicesCard = () => {
  return (
    <StyledSection
      containerClassname="bg-white w-full h-[405px] py-20  px-[45px]"
      noPadding
    >
      <div className="w-full flex items-center justify-center gap-6 ">
        {NavServicesList.map((item, index) => (
          <div
            className="bg-white rounded p-6 border border-[#C497000A]/[4%] drop-shadow-custom-dark w-[700px] h-[234px]"
            key={index}
          >
            <StyledText textClassname="font-semibold text-base font-averta text-[#343434]  pb-2">
              {item.header}
            </StyledText>
            <div className="h-32">
              {item.content.map((contentItem, contentIndex) => (
                <StyledText
                  key={contentIndex}
                  textClassname="font-normal text-base font-averta text-[#5F5F5F] pb-2"
                >
                  {contentItem}
                </StyledText>
              ))}
            </div>
            <StyledText
              textClassname="font-semibold text-base text-primaryYellow"
              isLink
              target="_blank"
              rel="noopener noreferrer"
              linkText="Explore"
              stroke="#C49700"
              href={item.href}
            ></StyledText>
          </div>
        ))}
      </div>
    </StyledSection>
  );
};

export default NavServicesCard;
