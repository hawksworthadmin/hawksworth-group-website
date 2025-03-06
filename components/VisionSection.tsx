import React from "react";
import StyledSection from "./common/StyledSection";
import classNames from "classnames";
import StyledText from "./common/StyledText";

export interface VisionProps {
  bgColor: string;
  text: string;
  subText: string;
  icon: React.ReactNode;
}

// const VisionItem: React.FC<VisionProps> = ({
//   bgColor,
//   text,
//   subText,
//   icon,
// }) => (
//   <div
//     className={cn(
//       `border-0 md:border border-[#F3F3F3] drop-shadow-custom-light  lg:p-10 py-9 px-10 flex flex-col justify-between items-center text-center lg:items-start lg:text-start md:h-[18rem] h-[18.75rem] w-full`,
//       bgColor,
//     )}
//   >
//     <div className="pb-10 lg:pb-0">{icon}</div>
//     <p className="font-semibold text-[1.375] text-darkGrey">
//       {text}&nbsp;
//       <span className="font-normal">{subText}</span>
//     </p>
//   </div>
// );

// const EmptyBox = () => (
//   <div
//     className={cn(
//       `bg-inherit md:h-[18rem] h-[18.75rem] w-full hidden lg:block`,
//     )}
//   ></div>
// );

const VisionSection = () => {
  // const VisionData = VisionDataComponent();

  return (
    <>
      <StyledSection
        containerClassname={classNames(
          "lg:pb-20 pt-10 pb-[60px] text-center lg:text-left 3xl:px-96 lg:px-[120px] px-0"
        )}
        noPadding={true}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 justify-between w-full  ">
          <div className="lg:w-[32%] w-[90%] ">
            <StyledText textClassname="text-[#9E9E9E] lg:font-bold font-semibold lg:text-xl text-lg mb-4 lg:mb-6">
              Vision
            </StyledText>
            <StyledText textClassname="lg:text-3xl text-[21px]  font-tiempos leading-[28.35px] font-bold  ">
              To be a leading catalyst for sustainable transformation across
              Africa
            </StyledText>
          </div>
          <div className="lg:w-[40%] w-[90%] pt-4 lg:pt-0 ">
            <StyledText textClassname="text-[#9E9E9E] lg:font-bold font-semibold lg:text-xl text-lg mb-4 lg:mb-6">
              Mission
            </StyledText>
            <StyledText textClassname=" text-darkGrey mb-2 font-bold font-tiempos">
              To deliver innovative solutions that empower businesses,
              governments, and communities to thrive in an ever-evolving world.
            </StyledText>
          </div>
        </div>
      </StyledSection>
      {/* <section className="bg-opacYellow">
        <section className="bg-transparent max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {VisionData[0] && <VisionItem {...VisionData[0]} />}
            <EmptyBox />
            {VisionData[1] && <VisionItem {...VisionData[1]} />}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <EmptyBox />
            {VisionData[2] && <VisionItem {...VisionData[2]} />}
            <EmptyBox />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {VisionData[3] && <VisionItem {...VisionData[3]} />}
            <EmptyBox />
            {VisionData[4] && <VisionItem {...VisionData[4]} />}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <EmptyBox />
            {VisionData[5] && <VisionItem {...VisionData[5]} />}
            <EmptyBox />
          </div>
        </section>
      </section >
      */}
    </>
  );
};

export default VisionSection;
