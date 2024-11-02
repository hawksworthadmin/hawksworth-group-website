import Image from "next/image";
import React from "react";
import StyledText from "../StyledText";

const BlogPostCard = () => {
  return (
    <div className="lg:w-[392px] w-full">
      <div className="mb-5 lg:mb-6">
        <Image
          src="/images/dummy/blog.webp"
          width={392}
          height={400}
          alt="Picture of the author"
          className="rounded w-full h-[180px] lg:w-[392px] lg:h-[400px]"
        />
      </div>

      <div className="lg:text-base text-sm">
        <div className="flex items-center space-x-[6px] text-nowrap">
          <StyledText textClassname="text-[#347F62] font-semibold">
            Business Strategy
          </StyledText>{" "}
          <span>•</span> <StyledText> 22 Sept, 2024 </StyledText> <span>•</span>{" "}
          <StyledText>3 min read</StyledText>
        </div>

        <StyledText
          textClassname="mt-2 text-lg lg:text-xl text-customBlack"
          variant="secondary"
        >
          Maximizing Your Business Growth Through Comprehensive Strategic
          Planning
        </StyledText>

        <StyledText textClassname="mt-1 text-gray-700">
          Explore key strategies to help organizations plan for growth and
          navigate market challenges.
        </StyledText>
      </div>
    </div>
  );
};

export default BlogPostCard;
