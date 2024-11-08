import React, { ReactNode } from "react";
import StyledText from "../common/StyledText";
import StyledHeaderText from "@/components/common/StyledText/StyledHeaderText";
import classNames from "classnames";
import Image from "next/image";
interface GlassMorphismCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  containerClassname?: string;
  extraDetail?: ReactNode;
  outerContainerClassname?: string;
  glassCardClassName?: string;
  styleHeaderClassName?: string;
  textClassname?: string;
  subTextClassname?: string;
  linkClassName?: string;
  className?: string;
}
const GlassMorphismCard = ({
  imageUrl,
  title,
  description,
  linkText,
  containerClassname,
  extraDetail,
  link,
  outerContainerClassname,
  glassCardClassName,
  styleHeaderClassName,
  textClassname,
  subTextClassname,
  linkClassName,
}: GlassMorphismCardProps) => {
  return (
    <div
      className={classNames(
        "relative lg:h-[620px] h-[400px] drop-shadow-4xl rounded",
        outerContainerClassname,
      )}
    >
      <Image
        src={imageUrl}
        alt={""}
        fill
        className="absolute z-10 object-cover rounded"
      />
      <div className="absolute inset-0  bg-gradient-to-b from-black/40 via-black/0 to-black/87 z-10 rounded" />
      <div className="w-full h-full z-20 relative">
        <div
          className={classNames(
            "w-full h-full flex items-end justify-end lg:px-[60px] lg:py-14",
            glassCardClassName,
          )}
        >
          <div
            className={classNames(
              "w-full h-fit py-6 px-4 lg:py-6 lg:px-10 bg-white/[8%] lg:rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-10 border border-white/45 text-white",
              containerClassname,
            )}
          >
            {extraDetail}
            <StyledHeaderText
              text={title}
              subText={description}
              textClassname={classNames("text-base lg:text-4xl", textClassname)}
              subTextClassname={classNames("text-[#E8E8E8]", subTextClassname)}
              containerClassname={styleHeaderClassName}
            />
            {linkText && (
              <div className={classNames("mt-6", linkClassName)}>
                <StyledText
                  linkText={linkText}
                  stroke="#FFFFFF"
                  isLink
                  textClassname="text-white font-bold text-base"
                  href={link}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GlassMorphismCard;
