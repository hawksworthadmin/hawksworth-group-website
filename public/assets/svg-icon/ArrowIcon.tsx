import { SVGProps } from "react";

const ArrowIcon = ({
  stroke = "#021753",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.62 4.053 13.667 8.1 9.62 12.146M2.333 8.1h11.22"
    />
  </svg>
);
export default ArrowIcon;
