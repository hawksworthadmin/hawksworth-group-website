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
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isButton?: boolean;
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
  style,
  onClick,
  isButton = false,
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
      ) : isButton ? (
        <button
          onClick={onClick}
          className={classNames(
            "lg:text-lg text-sm leading-snug  p-0 m-0 text-start",
            {
              "font-bold": variant === "secondary",
              "font-tiempos font-bold": fontType === "secondary",
            },
            textClassname,
          )}
          style={style}
        >
          {children}
        </button>
      ) : (
        <p
          className={classNames(
            textClassname,
            "lg:text-lg text-sm leading-snug",
            {
              "font-bold": variant === "secondary",
              "font-tiempos font-bold": fontType === "secondary",
            },
          )}
          style={style}
        >
          {children}
        </p>
      )}
    </>
  );
};

export default StyledText;
