"use client";

import classNames from "classnames";
import Link from "next/link";
import React from "react";
import ArrowIcon from "@/public/assets/svg-icon/ArrowIcon";

export type StyledTextProps = {
  linkText?: string;
  href?: string;
  isLink?: boolean;
  linkContainerClassname?: string;
  textClassname?: string;
  variant?: "default" | "secondary";
  fontType?: "default" | "secondary";
  stroke?: string;
  children?: React.ReactNode;
  hasArrowIcon?: boolean;
};

const StyledText = ({
  linkText,
  href = "",
  isLink = false,
  linkContainerClassname,
  textClassname,
  variant = "default",
  fontType = "default",
  stroke,
  children,
  hasArrowIcon = true,
}: StyledTextProps) => {
  return (
    <>
      {isLink ? (
        <Link
          href={href}
          className={classNames(
            "inline-flex gap-1 items-center border-b-2 border-b-transparent  hover:border-b-primaryYellow cursor-pointer",
            linkContainerClassname,
          )}
        >
          <p
            className={classNames(
              "text-primaryBlue lg:text-lg text-sm font-bold",
              textClassname,
            )}
          >
            {linkText}
          </p>
          {hasArrowIcon && <ArrowIcon stroke={stroke} />}
        </Link>
      ) : (
        <p
          className={classNames(
            "lg:text-lg text-sm font-averta leading-snug",
            {
              "font-bold": variant === "secondary",
              "font-tiempos font-bold": fontType === "secondary",
            },
            textClassname,
          )}
        >
          {children}
        </p>
      )}
    </>
  );
};

export default StyledText;
