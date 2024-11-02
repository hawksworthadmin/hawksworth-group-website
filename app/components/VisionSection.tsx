import React from "react";
import VisionDataComponent from "../hooks/VisionData";

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
    className={`${bgColor} border-0 md:border border-[#F3F3F3] drop-shadow-custom-light  lg:p-10 py-9 px-10 flex flex-col justify-between items-center text-center lg:items-start lg:text-start md:h-[18rem] h-48 w-full md:w-[30.1rem]`}
  >
    <div className="pb-10 lg:pb-0">{icon}</div>
    <p className="font-semibold text-[1.375] text-darkGrey">
      {text}&nbsp;
      <span className="font-normal">{subText}</span>
    </p>
  </div>
);

const VisionSection = () => {
  const VisionData = VisionDataComponent();

  return (
    <section className="bg-opacYellow">
      {/* Boxes 1 and 2 in a grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="place-self-start">
          {VisionData[0] && <VisionItem {...VisionData[0]} />}
        </div>
        <div className="place-self-end">
          {VisionData[1] && <VisionItem {...VisionData[1]} />}
        </div>
      </div>

      {/* Box 3 centered using flex layout */}
      <div className="flex justify-center">
        {VisionData[2] && <VisionItem {...VisionData[2]} />}
      </div>

      {/* Boxes 4 and 5 in a grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="place-self-start">
          {VisionData[3] && <VisionItem {...VisionData[3]} />}
        </div>
        <div className="place-self-end">
          {VisionData[4] && <VisionItem {...VisionData[4]} />}
        </div>
      </div>

      {/* Box 6 centered using flex layout */}
      <div className="flex justify-center">
        {VisionData[5] && <VisionItem {...VisionData[5]} />}
      </div>
    </section>
  );
};

export default VisionSection;
