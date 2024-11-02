import React from "react";
import { cn } from "@/app/utils/styleUtilities";

type IconProps = {
  className?: Array<string> | string;
  strokeColor?: string;
  height?: number;
  width?: number;
};

const MultipleUserIcon = ({
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
        d="M39 15.5133C38.87 15.4917 38.7183 15.4917 38.5883 15.5133C35.5983 15.405 33.215 12.9567 33.215 9.92332C33.215 6.82498 35.7067 4.33331 38.805 4.33331C41.9033 4.33331 44.395 6.84665 44.395 9.92332C44.3733 12.9567 41.99 15.405 39 15.5133Z"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.7683 31.2867C39.7366 31.785 43.0083 31.265 45.305 29.7267C48.36 27.69 48.36 24.3534 45.305 22.3167C42.9867 20.7784 39.6716 20.2583 36.7033 20.7783"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.935 15.5133C13.065 15.4917 13.2166 15.4917 13.3466 15.5133C16.3366 15.405 18.72 12.9567 18.72 9.92332C18.72 6.82498 16.2283 4.33331 13.13 4.33331C10.0316 4.33331 7.53998 6.84665 7.53998 9.92332C7.56164 12.9567 9.94498 15.405 12.935 15.5133Z"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.1667 31.2867C12.1983 31.785 8.92666 31.265 6.63 29.7267C3.575 27.69 3.575 24.3534 6.63 22.3167C8.94833 20.7784 12.2633 20.2583 15.2317 20.7783"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 31.6983C25.87 31.6767 25.7183 31.6767 25.5883 31.6983C22.5983 31.59 20.215 29.1416 20.215 26.1083C20.215 23.01 22.7067 20.5183 25.805 20.5183C28.9033 20.5183 31.395 23.0316 31.395 26.1083C31.3733 29.1416 28.99 31.6117 26 31.6983Z"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.695 38.5233C16.64 40.5599 16.64 43.8966 19.695 45.9333C23.1617 48.2516 28.8383 48.2516 32.305 45.9333C35.36 43.8966 35.36 40.5599 32.305 38.5233C28.86 36.2266 23.1617 36.2266 19.695 38.5233Z"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MultipleUserIcon;
