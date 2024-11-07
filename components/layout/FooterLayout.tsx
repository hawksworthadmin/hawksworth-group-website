import React from "react";
import StyledSection from "../common/StyledSection";
import Image from "next/image";
import { footerCategories, FooterCategory, groupSocialMedia } from "@/data/footerData";
import Link from "next/link";

const FooterLayout = () => {
  return (
    <StyledSection containerClassname="px-8 py-12 lg:px-[100px] lg:py-[66px] bg-[#FBFBFB]">
      <div className="lg:pb-[60px] pb-8 flex justify-between gap-[120px]">
        <div className="lg:max-w-[379px]">
          <div>
            <Image
              src={"/assets/logo.svg"}
              alt={"logo"}
              width={164.5}
              height={16}
              className="w-[127.94px] h-[14px] lg:w-[164.5px] lg:h-[18px]"
            />

            <p className="mt-[18px] hidden lg:block font-normal leading-none">
              Empowering Businesses with Innovative Solutions Across Finance,
              Insights, Capital, and Ventures.
            </p>
          </div>

          <div className="lg:mt-12 mt-6 flex gap-4">
            {groupSocialMedia.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                aria-label={`Follow us on ${item.name}`}
              >
                <div className="bg-primaryBlue rounded-full flex items-center justify-center box-border h-[28px] lg:w-[32px] lg:h-[32px] w-[28px]">
                  <div className="flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={`${item.name} Icon`}
                      width={14}
                      height={14}
                      className="object-cover w-[14px] h-[14px] lg:h-[18px] lg:w-[18px] "
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 text-left">
          {footerCategories.map((category: FooterCategory) => (
            <div key={category.title}>
              <h6 className="text-lg font-semibold mb-2 text-customBlack">
                {category.title}
              </h6>

              <ul className="space-y-4">
                {category.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-lightGrey text-nowrap border-b-2 border-transparent hover:border-b-secondaryYellow pb-1 hover:font-medium hover:text-darkGrey"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 mb-6 space-y-2 lg:hidden border-t border-[#DEDEDE]">
        <p className="text-sm text-lightGrey text-nowrap">+234802459492</p>
        <p className="text-sm text-lightGrey text-nowrap">
          support@hawksworth.com
        </p>
      </div>

      <div className="grid lg:hidden grid-cols-1 gap-3 text-left py-6 border-t border-[#DEDEDE]">
        {footerCategories.map((category: FooterCategory) => (
          <div key={category.title}>
            <h6 className="text-sm text-lightGrey text-nowrap">
              {category.title}
            </h6>
          </div>
        ))}
      </div>

      <p className="pt-6 border-t border-[#DEDEDE]">
        © Hawksworth {new Date().getFullYear()}. All rights reserved.
      </p>
    </StyledSection>
  );
};

export default FooterLayout;
