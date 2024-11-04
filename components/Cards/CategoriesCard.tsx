import React from "react";
import StyledText from "../common/StyledText";

const CategoriesCard = ({ text }: { text: string }) => {
  return (
    <div className="h-fit border rounded border-[#DEDEDE] lg:px-5 lg:py-3 p-2 w-fit flex items-center justify-center text-center group hover:bg-primaryBlue hover:border-primaryBlue transition-all duration-300 ease-in-out">
      <StyledText textClassname="!text-[12.5px] lg:!text-lg text-nowrap group-hover:text-white">
        {text}
      </StyledText>
    </div>
  );
};

export default CategoriesCard;
