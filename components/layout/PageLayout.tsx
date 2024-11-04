import React from "react";
import FooterLayout from "./FooterLayout";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-darkGrey">
      {children}

      <FooterLayout />
    </div>
  );
};

export default PageLayout;
