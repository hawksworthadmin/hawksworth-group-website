import classNames from "classnames";
import Link from "next/link";
import React from "react";
import ArrowIcon from "../Svgs/ArrowIcon";

export type StyledTextProps = {
  linkText?: string;
  href?: string;
  isLink?: boolean;
  linkContainerClassname?: string;
  textClassname?: string;
  containerClassname?: string;
  variant?: "default" | "secondary";
  fontType?: "default" | "secondary";
  stroke?: string;
  children?: React.ReactNode;
};

const StyledText = ({
  linkText,
  href = "",
  isLink = false,
  linkContainerClassname,
  textClassname,
  containerClassname,
  variant = "default",
  fontType = "default",
  stroke,
  children,
}: StyledTextProps) => {
  return (
    <div className={classNames("font-inter", containerClassname)}>
      {isLink ? (
        <Link href={href} className="cursor-pointer">
          <div
            className={classNames(
              "flex gap-1 items-center",
              linkContainerClassname
            )}
          >
            <p
              className={classNames(
                "text-primaryBlue text-lg font-bold",
                textClassname
              )}
            >
              {linkText}
            </p>
            <ArrowIcon stroke={stroke} />
          </div>
        </Link>
      ) : (
        <p
          className={classNames(
            "text-lg",
            {
              "font-bold": variant === "secondary",
              "font-tiempos font-bold": fontType === "secondary",
            },
            textClassname
          )}
        >
          {children}
        </p>
      )}
    </div>
  );
};

export default StyledText;
