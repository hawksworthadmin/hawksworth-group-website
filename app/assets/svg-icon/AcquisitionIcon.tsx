import React from "react";
import { cn } from "@/utils/styleUtilities";

type IconProps = {
  className?: Array<string> | string;
  strokeColor?: string;
  height?: number;
  width?: number;
};

const AcquisitionIcon = ({
  className,
  strokeColor = "#C49700",
  height = 52,
  width = 52,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M8.70998 12.935C5.95831 16.575 4.33331 21.1033 4.33331 26C4.33331 37.96 14.04 47.6666 26 47.6666C37.96 47.6666 47.6666 37.96 47.6666 26C47.6666 14.04 37.96 4.33331 26 4.33331"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8333 26C10.8333 34.385 17.615 41.1666 26 41.1666C34.385 41.1666 41.1666 34.385 41.1666 26C41.1666 17.615 34.385 10.8333 26 10.8333"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 34.6666C30.7883 34.6666 34.6667 30.7883 34.6667 26C34.6667 21.2116 30.7883 17.3333 26 17.3333"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AcquisitionIcon;
