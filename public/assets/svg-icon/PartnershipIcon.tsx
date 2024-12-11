import React from "react";
import { cn } from "@/utils/styleUtilities";

type IconProps = {
  className?: Array<string> | string;
  strokeColor?: string;
  height?: number;
  width?: number;
};
const PartnershipsIcon = ({
  className,
  strokeColor = "#C49700",
  height = 120,
  width = 120,
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
        d="M64.6 11.3L97.15 28.85C100.95 30.9 100.95 36.75 97.15 38.8L64.6 56.35C61.7 57.9 58.3 57.9 55.4 56.35L22.85 38.8C19.05 36.75 19.05 30.9 22.85 28.85L55.4 11.3C58.3 9.74995 61.7 9.74995 64.6 11.3Z"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.05 50.65L48.3 65.8C52.05 67.7 54.45 71.55 54.45 75.75V104.35C54.45 108.5 50.1 111.15 46.4 109.3L16.15 94.15C12.4 92.25 10 88.4 10 84.2V55.6C10 51.45 14.35 48.8 18.05 50.65Z"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M101.95 50.65L71.7001 65.8C67.9501 67.7 65.55 71.55 65.55 75.75V104.35C65.55 108.5 69.9001 111.15 73.6001 109.3L103.85 94.15C107.6 92.25 110 88.4 110 84.2V55.6C110 51.45 105.65 48.8 101.95 50.65Z"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PartnershipsIcon;
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
></svg>;
