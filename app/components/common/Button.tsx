'use client'

import React from 'react'
import { cn } from '../../utils/styleUtilities';

interface ButtonProps {
  label: string; 
  onClick: React.MouseEventHandler<HTMLButtonElement>; 
  variant: "primary" | "blue";
  loading?: boolean; 
  children?: React.ReactNode;
  className?: string;
}

const Button = ({
  label,
  onClick,
  loading,
  variant = "primary",
  children,
  className,
}: ButtonProps) => {
   const variantStyle =
     variant === "primary"
       ? "bg-white text-textBlue"
       : variant === "blue"
       ? "bg-primaryBlue text-white"
       : "bg-black text-white";
  const merged = cn(
    "rounded py-2.5 lg:px-8 px-6 font-semibold text-base diabled:opacity-75",
    className,
    variantStyle
  );
  return (
    <button onClick={onClick} className={merged} disabled={loading}>
      {children || label}
    </button>
  );
};

export default Button