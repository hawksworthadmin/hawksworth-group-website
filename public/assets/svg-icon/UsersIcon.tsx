import React from "react";
import { cn } from "@/utils/styleUtilities";

type IconProps = {
  className?: Array<string> | string;
  strokeColor?: string;
  height?: number;
  width?: number;
};
const UsersIcon = ({
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
        d="M60.8 54.35C60.3 54.3 59.7 54.3 59.15 54.35C47.25 53.95 37.8 44.2 37.8 32.2C37.8 19.95 47.7 10 60 10C72.25 10 82.2001 19.95 82.2001 32.2C82.1501 44.2 72.7 53.95 60.8 54.35Z"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.8 72.8C23.7 80.9 23.7 94.1 35.8 102.15C49.55 111.35 72.1 111.35 85.85 102.15C97.95 94.05 97.95 80.85 85.85 72.8C72.15 63.65 49.6 63.65 35.8 72.8Z"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UsersIcon;
