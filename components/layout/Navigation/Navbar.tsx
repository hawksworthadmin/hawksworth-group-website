"use client";

import Button from "@/components/common/Button";
import CloseIcon from "@/public/assets/svg-icon/CloseIcon";
import MenuIcon from "@/public/assets/svg-icon/MenuIcon";
import { cn } from "@/utils/styleUtilities";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export interface NavLink {
  label: string;
  href: string;
  className?: string;
}
const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const requiresUpdatedNav = pathname === "/blog" || pathname === "/careers";
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prev) => !prev); // Toggle navigation immediately
  };

  return (
    <nav>
      <aside className="w-full h-[72px] py-4 lg:px-20 px-6 bg-[#1819190D]/5 border border-[#F3F3F31A]/10 backdrop-blur-200 top-0 z-50 absolute flex items-center justify-between">
        <Image
          src={requiresUpdatedNav ? "/assets/logo.svg" : "/assets/navLogo.svg"}
          alt={"logo"}
          width={146.2}
          height={16}
          onClick={() => router.push("/")}
          className="w-[127.94px] h-[14px] lg:w-[146.2px] lg:h-[18px] cursor-pointer"
        />
        <MenuIcon
          className={openNav ? "hidden" : "md:hidden block"}
          stroke={requiresUpdatedNav ? "#021753" : "#FFFFFF"}
          onClick={toggleNav}
        />
        <ul className="hidden md:flex justify-between items-center w-[40%]">
          {navLinks.map(({ label, href, className }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  `text-base ${
                    requiresUpdatedNav ? "text-black" : "text-white"
                  } border-b-2 border-b-transparent hover:border-b-secondaryYellow pb-1 hover:font-bold cursor-pointer ${className}`
                )}
              >
                {label}
              </Link>
            </li>
          ))}
          <Button
            onClick={() => console.log("explore")}
            label="Explore"
            variant="primary"
            className={`${
              requiresUpdatedNav
                ? "hover:bg-primaryBlue hover:text-white "
                : "hover:bg-gradient-to-r from-white via-yellow-75 to-yellow-200 hover:text-white"
            }`}
            borderStyleClassName={`${
              requiresUpdatedNav
                ? "bg-primaryBlue text-white hover:text-textBlue hover:bg-white"
                : "bg-white hover:bg-black/[85%] hover:text-textBlue"
            } `}
          />
        </ul>
      </aside>
      {openNav && (
        <aside className="fixed inset-0 z-50 flex flex-col items-center  bg-white ">
          <div className="h-[72px] border-b border-#F3F3F3  backdrop-blur-200 px-6 w-full bg-white flex items-center">
            <div className="flex items-center justify-between w-full  ">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={146.2}
                height={16}
                onClick={() => {
                  toggleNav();
                  router.push("/");
                }}
                className="w-[127.94px] h-[14px] lg:w-[146.2px] lg:h-[18px] cursor-pointer"
              />
              <button onClick={toggleNav}>
                <CloseIcon />
              </button>
            </div>
          </div>

          <ul className="flex flex-col items-center pt-16 gap-16 border h-full w-full">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[2rem] font-semibold text-[#0A0A0A]"
                  onClick={toggleNav}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </nav>
  );
};

export default Navbar;
