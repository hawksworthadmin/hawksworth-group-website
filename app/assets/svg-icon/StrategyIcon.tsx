import React from "react";
import { cn } from "@/utils/styleUtilities";

type IconProps = {
  className?: Array<string> | string;
  strokeColor?: string;
  height?: number;
  width?: number;
};
const StrategyIcon = ({
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
        d="M26 46.3883H12.87C5.35166 46.3883 2.21 41.015 5.85 34.45L12.61 22.2733L18.98 10.8333C22.8367 3.87832 29.1633 3.87832 33.02 10.8333L39.39 22.295L46.15 34.4717C49.79 41.0367 46.6267 46.41 39.13 46.41H26V46.3883Z"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.4533 43.3334L26 29.0117L5.54666 43.3334"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 6.5V29.0117"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StrategyIcon;
