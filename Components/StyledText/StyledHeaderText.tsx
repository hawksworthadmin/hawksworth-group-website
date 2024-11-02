import React from "react";
import StyledText from "../StyledText";
import classNames from "classnames";

export type StyledHeaderTextProps = {
  text: string;
  subText?: string;
  textClassname?: string;
  subTextClassname?: string;
};

const StyledHeaderText = ({
  text,
  subText,
  textClassname,
  subTextClassname,
}: StyledHeaderTextProps) => {
  return (
    <div>
      <StyledText
        fontType="secondary"
        textClassname={classNames("lg:text-4xl text-[22px]", textClassname)}
      >
        {text}
      </StyledText>

      <StyledText textClassname={classNames("mt-2", subTextClassname)}>
        {subText}
      </StyledText>
    </div>
  );
};

export default StyledHeaderText;
