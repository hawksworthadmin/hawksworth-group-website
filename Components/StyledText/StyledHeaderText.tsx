import React from "react";
import StyledText from "../StyledText";

export type StyledHeaderTextProps = {
  text: string;
  subText?: string;
};

const StyledHeaderText = ({ text, subText }: StyledHeaderTextProps) => {
  return (
    <div className="">
      <StyledText fontType="secondary" textClassname="text-4xl">
        {text}
      </StyledText>

      <StyledText containerClassname="mt-2">{subText}</StyledText>
    </div>
  );
};

export default StyledHeaderText;
