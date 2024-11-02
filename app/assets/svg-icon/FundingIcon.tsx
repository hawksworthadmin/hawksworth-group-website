import React from "react";
import { cn } from "@/app/utils/styleUtilities";

type IconProps = {
  className?: Array<string> | string;
  strokeColor?: string;
  height?: number;
  width?: number;
};

const FundingIcon = ({
  className,
  strokeColor = "#C49700",
  height = 53,
  width = 52,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M41.8166 17.2599V28.4183C41.8166 35.0917 38.0033 37.9516 32.2833 37.9516H13.2383C12.2633 37.9516 11.3316 37.865 10.465 37.67C9.9233 37.5834 9.40332 37.4317 8.92665 37.2584C5.67665 36.045 3.70498 33.2283 3.70498 28.4183V17.2599C3.70498 10.5866 7.5183 7.72668 13.2383 7.72668H32.2833C37.1366 7.72668 40.625 9.78501 41.5566 14.4867C41.7083 15.3533 41.8166 16.2416 41.8166 17.2599Z"
        stroke={strokeColor}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48.319 23.7602V34.9186C48.319 41.5919 44.5057 44.4518 38.7857 44.4518H19.7407C18.1373 44.4518 16.6857 44.2353 15.429 43.7586C12.8507 42.8053 11.0957 40.8336 10.4673 37.6703C11.334 37.8653 12.2657 37.9518 13.2407 37.9518H32.2857C38.0057 37.9518 41.819 35.0919 41.819 28.4186V17.2602C41.819 16.2419 41.7324 15.3319 41.559 14.4869C45.6757 15.3536 48.319 18.2569 48.319 23.7602Z"
        stroke={strokeColor}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.7466 28.5698C25.9057 28.5698 28.4667 26.0088 28.4667 22.8497C28.4667 19.6907 25.9057 17.1297 22.7466 17.1297C19.5876 17.1297 17.0266 19.6907 17.0266 22.8497C17.0266 26.0088 19.5876 28.5698 22.7466 28.5698Z"
        stroke={strokeColor}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3567 18.0833V27.6166"
        stroke={strokeColor}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.147 18.0839V27.6173"
        stroke={strokeColor}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FundingIcon;
