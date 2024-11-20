import React from "react";
import StyledSection from "../common/StyledSection";
import StyledText from "../common/StyledText";
import classNames from "classnames";

interface OverviewCardProps {
  text: string;
  description: string;
  header: string;
  haslink?: boolean;
  linkText?: string;
  containerClassname?: string;
}
const OverviewCard = ({
  text,
  description,
  header,
  haslink = false,
  linkText,
  containerClassname,
}: OverviewCardProps) => {
  return (
    <StyledSection
      containerClassname={classNames(
        "lg:pb-20 pt-10 pb-[60px] text-center lg:text-left 3xl:px-96",
        containerClassname
      )}
      noPadding={true}
    >
      <div className="mb-6 lg:mb-10">
        <StyledText textClassname="text-[#9E9E9E] lg:font-bold font-semibold lg:text-lg text-base ">
          {header}
        </StyledText>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 justify-between w-full">
        <StyledText textClassname="lg:text-3xl text-[21px]  font-tiempos leading-[28.35px] font-bold  lg:w-[32%] w-[90%] ">
          {text}
        </StyledText>
        <div className="lg:w-[40%] w-[90%] pt-4 lg:pt-0">
          <StyledText textClassname="font-normal text-darkGrey mb-2">
            {description}
          </StyledText>
          {haslink && (
            <StyledText
              linkText={linkText}
              isLink
              stroke="#021753"
              textClassname="text-left font-bold text-lg text-primaryBlue"
            />
          )}
        </div>
      </div>
    </StyledSection>
  );
};
export default OverviewCard;
