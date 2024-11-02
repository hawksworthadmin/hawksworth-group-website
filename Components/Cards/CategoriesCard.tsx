import React from "react";
import StyledText from "../StyledText";

const CategoriesCard = ({ text }: { text: string }) => {
  return (
    <div className="h-fit border rounded border-[#DEDEDE] lg:px-5 lg:py-3 p-2 w-fit flex items-center justify-center text-center">
      <StyledText textClassname="text-[12.5px] lg:text-lg">{text}</StyledText>
    </div>
  );
};

export default CategoriesCard;
