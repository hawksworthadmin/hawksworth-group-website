"use client";

import Image from "next/image";
import React from "react";
import StyledText from "../common/StyledText";


export interface PostCardProps {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  categoryName?: string;
  category?: string;
  id: string;
}

const BlogPostCard = ({
  imageUrl,
  title,
  description,
  date,
  readTime,
  category,
  id,
}: PostCardProps) => {
  return (
    <article className="lg:w-[392px] w-full">
      <div className="mb-5 lg:mb-6 h-[180px] lg:w-[392px] lg:h-[400px] relative">
        <Image
          src={imageUrl}
          fill
          alt="Picture of the author"
          className="rounded w-full absolute object-cover"
        />
      </div>

      <div className="lg:text-base text-sm">
        <div className="flex items-center space-x-1 text-nowrap">
          {category && (
            <>
              <StyledText textClassname="text-[#347F62] font-semibold lg:!text-sm !text-xs">
                {category}
              </StyledText>
              <span>•</span>
            </>
          )}
          <StyledText textClassname="lg:!text-sm !text-xs"> {date}</StyledText>{" "}
          <span>•</span>
          <StyledText textClassname="lg:!text-sm !text-xs">
            {readTime}
          </StyledText>
        </div>

        <StyledText
          textClassname="mt-2 text-lg lg:text-xl text-customBlack cursor-pointer"
          variant="secondary"
          href={`/blog/${id}`}
        >
          {title}
        </StyledText>

        <StyledText textClassname="mt-1 text-gray-700">
          {description}
        </StyledText>
      </div>
    </article>
  );
};

export default BlogPostCard;
