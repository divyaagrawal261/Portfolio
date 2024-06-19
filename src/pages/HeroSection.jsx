import React from "react";
import { LeftSide, RightSide } from "../components/SideBars";
import { MidSection } from "../components/MidSection";
import { Header } from "../components/Header";

export const HeroSection = () => {
  return (
    <div className="min-h-[100vh] heroSection lg:px-[15px] lg:py-[27px] ">
      <Header/>
      <div className="flex gap-4 items-start">
        <LeftSide/>
        <MidSection/>
        <RightSide/>
      </div>
    </div>
  );
};
