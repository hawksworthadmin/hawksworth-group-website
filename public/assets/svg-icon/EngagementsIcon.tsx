import React from "react";
import { cn } from "@/utils/styleUtilities";

type IconProps = {
  className?: Array<string> | string;
  strokeColor?: string;
  height?: number;
  width?: number;
};
const EngagementsIcon = ({
  className,
  strokeColor = "#C49700",
  height = 50,
  width = 50,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M11 70.1C15.65 92.9 35.8 110 60 110C84.1 110 104.2 92.95 108.95 70.25"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M109.05 50.3C104.55 27.3 84.3 10 60 10C35.85 10 15.7 27.1501 11 49.9001"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 67.5C64.1421 67.5 67.5 64.1421 67.5 60C67.5 55.8579 64.1421 52.5 60 52.5C55.8579 52.5 52.5 55.8579 52.5 60C52.5 64.1421 55.8579 67.5 60 67.5Z"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EngagementsIcon;
