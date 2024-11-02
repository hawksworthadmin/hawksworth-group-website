import React from "react";
import StyledText from "../StyledText";
import StyledHeaderText from "../StyledText/StyledHeaderText";

const GlassMorphismCard = () => {
  return (
    <div className="bg-red-500 relative h-[620px]">
      <div className="w-full h-full absolute top-0 left-0 right-0">
        <div className="w-full h-full flex justify-end lg:px-[60px] lg:py-14">
          <div className="w-fit h-fit py-6 px-4 lg:py-6 lg:px-10 bg-white/[8%] rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-10 border border-white/45 text-white ">
            <StyledHeaderText
              text={"Strategic Advisory"}
              subText="Guiding businesses through transformation with expert financial advisory, corporate restructuring, and operational strategies."
              subTextClassname="text-[#E8E8E8]"
            />

            <div className="mt-6">
              <StyledText
                linkText="Explore Hawksworth Advisors"
                stroke="#FFFFFF"
                isLink
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassMorphismCard;
