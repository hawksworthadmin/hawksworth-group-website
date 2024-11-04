import React from "react";
import Image from "next/image";
import StyledText from "../common/StyledText";

export interface JobListingsProp {
  image: string;
  Header: string;
  Subtext: string;
  Link: string;
}

const JobListingsCard = ({ image, Header, Subtext, Link }: JobListingsProp) => {
  return (
    <div className="bg-[#FBFBFB] lg:w-[24rem] w-full lg:h-[25rem] h-[21.375rem] drop-shadow-custom-light">
      <div className="w-full lg:h-[13.938rem] h-[10.313rem] rounded-sm relative overflow-hidden">
        <Image
          src={image}
          alt="logo"
          layout="fill"
          objectFit="cover"
          className="rounded-sm object-cover w-full h-full"
        />
      </div>
      <div className="border-b-2 border-x-2 border-[#F3F3F3] rounded-b p-6 bg-[#FBFBFB] ">
        <StyledText textClassname="font-semibold text-xl text-[#1F1F1F]">
          {Header}
        </StyledText>
        <StyledText textClassname="font-normal text-base text-darkGrey mb-6">
          {Subtext}
        </StyledText>
        <StyledText
          textClassname="font-semibold text-base text-primaryYellow"
          isLink
          linkText="Apply Now"
          stroke="#C49700"
          href={Link}
        ></StyledText>
      </div>
    </div>
  );
};

export default JobListingsCard;
