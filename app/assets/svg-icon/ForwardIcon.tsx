import React from "react";
import { cn } from "@/app/utils/styleUtilities";

type IconProps = {
  className?: Array<string> | string;
  strokeColor?: string;
  height?: number;
  width?: number;
};

const ForwardIcon = ({
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
        d="M9.14322 6.71667H33.9299C35.4032 6.71667 37.2449 7.73501 38.0249 8.99168L47.0816 23.465C47.9482 24.8733 47.8616 27.0833 46.865 28.405L35.6416 43.355C34.84 44.4167 33.1066 45.2833 31.7849 45.2833H9.14322C5.35155 45.2833 3.05499 41.1233 5.04832 37.895L11.0499 28.2967C11.8516 27.0183 11.8516 24.9383 11.0499 23.66L5.04832 14.0617C3.05499 10.8767 5.37322 6.71667 9.14322 6.71667Z"
        stroke={strokeColor}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ForwardIcon;
