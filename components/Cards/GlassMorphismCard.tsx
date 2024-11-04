import React from "react";
import StyledText from "../common/StyledText";
import StyledHeaderText from "../common/StyledText/StyledHeaderText";
import classNames from "classnames";
import Image from "next/image";

interface GlassMorphismCardProps {
  imageUrl: string;
  title: string;
  description: string;
  linkText: string;
}

const GlassMorphismCard = ({
  imageUrl,
  title,
  description,
  linkText = "Explore Hawksworth Advisors",
}: GlassMorphismCardProps) => {
  return (
    <div
      className={classNames("relative lg:h-[620px] h-[400px] drop-shadow-4xl")}
    >
      <Image
        src={imageUrl}
        alt={""}
        fill
        className="absolute z-10 object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      <div className="w-full h-full z-20 relative">
        <div className="w-full h-full flex items-end justify-end lg:px-[60px] lg:py-14">
          <div className="w-full h-fit py-6 px-4 lg:py-6 lg:px-10 bg-white/[8%] lg:rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-10 border border-white/45 text-white ">
            <StyledHeaderText
              text={title}
              subText={description}
              subTextClassname="text-[#E8E8E8]"
            />

            <div className="mt-6">
              <StyledText
                linkText={linkText}
                stroke="#FFFFFF"
                isLink
                textClassname="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassMorphismCard;
