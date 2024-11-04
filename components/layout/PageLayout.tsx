import React from "react";
import FooterLayout from "./FooterLayout";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="text-darkGrey max-w-[94.5rem]">
        {children}

        <FooterLayout />
      </div>
    </div>
  );
};

export default PageLayout;
