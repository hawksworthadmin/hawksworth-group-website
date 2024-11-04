"use client";

import classNames from "classnames";
import Link from "next/link";
import React from "react";
import ArrowIcon from "@/app/assets/svg-icon/ArrowIcon";

export type StyledTextProps = {
  linkText?: string;
  href?: string;
  isLink?: boolean;
  linkContainerClassname?: string;
  textClassname?: string;
  variant?: "default" | "secondary";
  fontType?: "default" | "secondary";
  stroke?: string;
  hoverStroke?: string;
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
  stroke = "#FFFFFF",
  hoverStroke = "#FFFFFF",
  children,
  hasArrowIcon = true,
}: StyledTextProps) => {
  return (
    <>
      {isLink ? (
        <Link
          href={href}
          className={classNames(
            "cursor-pointer font-inter flex gap-1 items-center",
            linkContainerClassname
          )}
        >
          <p
            className={classNames(
              "text-primaryBlue lg:text-lg text-sm font-bold",
              textClassname
            )}
          >
            {linkText}
          </p>
          {hasArrowIcon && (
            <ArrowIcon
              stroke={stroke}
              className={`transition-colors duration-300 group-hover:stroke-[${hoverStroke}]`}
              style={{
                stroke: stroke,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as SVGElement).style.stroke = hoverStroke;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as SVGElement).style.stroke = stroke;
              }}
            />
          )}
        </Link>
      ) : (
        <p
          className={classNames(
            "lg:text-lg text-sm font-inter leading-snug",
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
    </>
  );
};

export default StyledText;
