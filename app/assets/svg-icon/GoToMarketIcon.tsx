import React from "react";
import { cn } from "@/utils/styleUtilities";

type IconProps = {
  className?: Array<string> | string;
  strokeColor?: string;
  height?: number;
  width?: number;
};
const GoToMarketIcon = ({
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
        d="M37.31 4.33337H19.4134C18.5468 4.33337 17.7234 4.63672 17.0517 5.15672L12.3067 8.94838C10.4 10.4651 10.4 13.3467 12.3067 14.8633L17.0517 18.655C17.7234 19.1967 18.5684 19.4784 19.4134 19.4784H37.31C39.4117 19.4784 41.1017 17.7884 41.1017 15.6867V8.10335C41.1017 6.02335 39.4117 4.33337 37.31 4.33337Z"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7333 26H32.63C33.4967 26 34.3201 26.3033 34.9917 26.8233L39.7367 30.615C41.6434 32.1317 41.6434 35.0133 39.7367 36.53L34.9917 40.3216C34.3201 40.8633 33.475 41.145 32.63 41.145H14.7333C12.6317 41.145 10.9417 39.455 10.9417 37.3533V29.77C10.9417 27.69 12.6317 26 14.7333 26Z"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 26V19.5"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 47.6666V41.1666"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 47.6666H32.5"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GoToMarketIcon;
