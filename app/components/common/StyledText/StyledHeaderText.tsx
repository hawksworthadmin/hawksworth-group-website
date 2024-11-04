import React from "react";
import { cn } from "@/app/utils/styleUtilities";

export type StyledHeaderTextProps = {
  text: string;
  subText?: string;
  textClassname?: string;
  subTextClassname?: string;
  className?: string;
};

const StyledHeaderText = ({
  text,
  subText,
  textClassname,
  subTextClassname,
  className,
}: StyledHeaderTextProps) => {
  return (
    <div className={cn("w-full flex flex-col items-center", className)}>
      <p className={cn("lg:text-4xl text-[22px]", textClassname)}>{text}</p>

      <p className={cn("mt-2", subTextClassname)}>{subText}</p>
    </div>
  );
};

export default StyledHeaderText;
