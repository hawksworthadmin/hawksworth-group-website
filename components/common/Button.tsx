"use client";

import React from "react";
import { cn } from "../../utils/styleUtilities";

interface ButtonProps {
  label?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant: "primary" | "blue";
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
  borderStyleClassName?: string;
}

const Button = ({
  label,
  onClick,
  loading,
  variant = "primary",
  children,
  className,
  borderStyleClassName,
}: ButtonProps) => {
  const variantStyle =
    variant === "primary"
      ? "bg-white text-textBlue"
      : variant === "blue"
        ? "bg-primaryBlue text-white"
        : "bg-black text-white";
  const merged = cn(
    "rounded p-[1.5px] font-semibold text-base diabled:opacity-75 cursor-pointer focus:outline-none",
    className,
    variantStyle,
  );
  return (
    <button onClick={onClick} className={merged} disabled={loading}>
      <span
        className={`w-full h-full rounded flex items-center justify-center py-2.5 lg:px-8 px-6 ${borderStyleClassName}`}
      >
        {children || label}
      </span>
    </button>
  );
};

export default Button;
