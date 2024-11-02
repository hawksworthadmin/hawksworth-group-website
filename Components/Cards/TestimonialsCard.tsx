import React from "react";
import StyledText from "../StyledText";
import Image from "next/image";

const TestimonialsCard = ({ text }: { text: string }) => {
  return (
    <div className="drop-shadow-3xl p-6 lg:p-7 bg-[#FBFBFB] rounded">
      <div>
        <StyledText>{text}</StyledText>

        <div className="mt-8 flex space-x-4 items-center">
          <Image
            src="/images/dummy/testimonial.webp"
            width={52}
            height={52}
            alt="Picture of the author"
            className="rounded-full w-[42px] h-[42px] lg:w-[52px] lg:h-[52px]"
          />

          <div className="">
            <StyledText textClassname="font-semibold lg:text-xl text-base text-customBlack">
              Oladimeji A. Edu
            </StyledText>

            <StyledText textClassname="mt-[2px] text-sm lg:text-base">
              Strategy Consultant
            </StyledText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
