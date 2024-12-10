import { SVGProps } from "react";

const FacebookIcon = ({
  fill = "white",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      d="M8.16683 7.87508H9.62516L10.2085 5.54175H8.16683V4.37508C8.16683 3.77425 8.16683 3.20841 9.3335 3.20841H10.2085V1.24841C10.0183 1.22333 9.30025 1.16675 8.54191 1.16675C6.95816 1.16675 5.8335 2.13333 5.8335 3.90841V5.54175H4.0835V7.87508H5.8335V12.8334H8.16683V7.87508Z"
      fill={fill}
    />
  </svg>
);
export default FacebookIcon;
