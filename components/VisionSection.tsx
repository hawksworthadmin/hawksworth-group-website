import React from "react";
import VisionDataComponent from "../data/VisionData";
import { cn } from "@/utils/styleUtilities";

export interface VisionProps {
  bgColor: string;
  text: string;
  subText: string;
  icon: React.ReactNode;
}

const VisionItem: React.FC<VisionProps> = ({
  bgColor,
  text,
  subText,
  icon,
}) => (
  <div
    className={cn(
      `border-0 md:border border-[#F3F3F3] drop-shadow-custom-light  lg:p-10 py-9 px-10 flex flex-col justify-between items-center text-center lg:items-start lg:text-start md:h-[18rem] h-[18.75rem] w-full`,
      bgColor
    )}
  >
    <div className="pb-10 lg:pb-0">{icon}</div>
    <p className="font-semibold text-[1.375] text-darkGrey">
      {text}&nbsp;
      <span className="font-normal">{subText}</span>
    </p>
  </div>
);

const EmptyBox = () => (
  <div
    className={cn(
      `bg-inherit md:h-[18rem] h-[18.75rem] w-full hidden lg:block`
    )}
  ></div>
);

const VisionSection = () => {
  const VisionData = VisionDataComponent();

  return (
    <section className="bg-opacYellow">
      <section className="bg-transparent max-w-[1440px] mx-auto">
        {/* Boxes 1 and 2 in a grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {VisionData[0] && <VisionItem {...VisionData[0]} />}
          <EmptyBox />
          {VisionData[1] && <VisionItem {...VisionData[1]} />}
        </div>

        {/* Box 3 centered using flex layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <EmptyBox />
          {VisionData[2] && <VisionItem {...VisionData[2]} />}
          <EmptyBox />
        </div>

        {/* Boxes 4 and 5 in a grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {VisionData[3] && <VisionItem {...VisionData[3]} />}
          <EmptyBox />
          {VisionData[4] && <VisionItem {...VisionData[4]} />}
        </div>

        {/* Box 6 centered using flex layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <EmptyBox />
          {VisionData[5] && <VisionItem {...VisionData[5]} />}
          <EmptyBox />
        </div>
      </section>
    </section>
  );
};

export default VisionSection;
