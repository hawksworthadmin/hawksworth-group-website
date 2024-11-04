import React from "react";
import StyledText from "../common/StyledText";
import Image from "next/image";

const TestimonialsCard = ({
  name,
  testimonial,
  position,
  image,
}: {
  name: string;
  position: string;
  image: string;
  testimonial: string;
}) => {
  return (
    <div className="drop-shadow-3xl p-6 lg:p-7 bg-[#FBFBFB] rounded">
      <div>
        <StyledText>{testimonial}</StyledText>

        <div className="mt-8 flex space-x-4 items-center">
          <Image
            src={image}
            width={52}
            height={52}
            alt="Picture of the author"
            className="rounded-full w-[42px] h-[42px] lg:w-[52px] lg:h-[52px]"
          />

          <div className="">
            <StyledText textClassname="font-semibold lg:text-xl text-base text-customBlack">
              {name}
            </StyledText>

            <StyledText textClassname="mt-[2px] text-sm lg:text-base">
              {position}
            </StyledText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
