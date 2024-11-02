import React from "react";
import { cn } from "@/app/utils/styleUtilities";

type IconProps = {
  className?: Array<string> | string;
  strokeColor?: string;
  height?: number;
  width?: number;
};
const WalletIcon = ({
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
        d="M88.757 35.2498C87.557 35.0498 86.307 34.9999 85.007 34.9999H35.007C33.607 34.9999 32.257 35.0999 30.957 35.2999C31.657 33.8999 32.657 32.6 33.857 31.4L50.107 15.1C56.957 8.3 68.057 8.3 74.907 15.1L83.657 23.9498C86.857 27.0998 88.557 31.0998 88.757 35.2498Z"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 95C45 98.75 43.95 102.3 42.1 105.3C38.65 111.1 32.3 115 25 115C17.7 115 11.35 111.1 7.9 105.3C6.05 102.3 5 98.75 5 95C5 83.95 13.95 75 25 75C36.05 75 45 83.95 45 95Z"
        stroke={strokeColor}
        strokeWidth="4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.4586 94.8975H17.5586"
        stroke={strokeColor}
        strokeWidth="4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 87.5977V102.548"
        stroke={strokeColor}
        strokeWidth="4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M110 60V85C110 100 100 110 85 110H38.15C39.7 108.7 41.05 107.1 42.1 105.3C43.95 102.3 45 98.75 45 95C45 83.95 36.05 75 25 75C19 75 13.65 77.6499 10 81.7999V60C10 46.4 18.2 36.9 30.95 35.3C32.25 35.1 33.6 35 35 35H85C86.3 35 87.55 35.0499 88.75 35.2499C101.65 36.7499 110 46.3 110 60Z"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M110 62.5H95C89.5 62.5 85 67 85 72.5C85 78 89.5 82.5 95 82.5H110"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WalletIcon;
