import React from "react";
import FooterLayout from "./FooterLayout";
import Navbar from "./Navigation/Navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-darkGrey">
      <Navbar />
      {children}

      <FooterLayout />
    </div>
  );
};

export default PageLayout;
