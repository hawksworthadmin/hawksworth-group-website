'use client'
import React from "react";
import FooterLayout from "./FooterLayout";
import Navbar from "./Navigation/Navbar";
import { Next13ProgressBar } from 'next13-progressbar';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-darkGrey">
      <Navbar />
        <Next13ProgressBar height="4px" color="#C49700" options={{ showSpinner: true }} showOnShallow />
      {children}

      <FooterLayout />
    </div>
  );
};

export default PageLayout;
