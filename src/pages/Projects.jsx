import React,{useEffect} from "react";
import { LeftSide, RightSide } from "../components/SideBars";
import { ProjectsContainer } from "../components/MidSection";
import { Header } from "../components/Header";
import NavBar from "../components/NavBar";
import VisualSettings from "../components/VisualSettings";
import {useSelector} from "react-redux"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {

  const visible=useSelector(state=>state);
  
  useEffect(()=>{
    gsap.to(".heroSection",{transformOrigin: "bottom center",rotateX:60,duration:1,scrollTrigger:{trigger:".visualSettings",  invalidateOnRefresh:true,  toggleActions:"play reverse play reverse"}})
  })
  
  useSelector(state=>{
    gsap.to(".heroSection",{transformOrigin: "bottom center",rotateX:0,duration:1,scrollTrigger:{trigger:".heroSection",  invalidateOnRefresh:true,  toggleActions:"play reverse play reverse"}})
  })
  return (
    <>
    {visible && <VisualSettings/>}
    <div className="HERO box-border h-screen">
    <div className="heroSection box-border h-full">
    <div className="innerHeroSection lg:px-[15px] lg:py-[27px] xl:px-[15px] xl:py-[27px] box-border h-full">
      <Header/>
      <div className="flex gap-4 items-start">
        <LeftSide/>
        <ProjectsContainer/>
        <RightSide/>
      </div>
    </div>
    <NavBar page="projects"/>
    </div>
    </div>
    </>
  );
};
