import React from "react";
import StyledText from "../StyledText";

export type StyledHeaderTextProps = {
  text: string;
  subText?: string;
};

const StyledHeaderText = ({ text, subText }: StyledHeaderTextProps) => {
  return (
    <div>
      <StyledText fontType="secondary" textClassname="lg:text-4xl text-[22px]">
        {text}
      </StyledText>

      <StyledText textClassname="mt-2">{subText}</StyledText>
    </div>
  );
};

export default StyledHeaderText;
