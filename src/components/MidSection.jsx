import React from "react";
import ProjectsCard from "./ProjectsCard";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ExperienceCard from "./ExperienceCard";
import SkillCard from "./SkillCard";

export const MidSection = () =>{
    return(
        <div className="custom-height box lg:w-full w-full ">
          <div className="innerBox border border-[#ffffff38] h-full w-full sm:p-0 p-4">
            <p className="text-white sm:w-[450px] w-full mx-auto mt-4 iceland leading-none sm:text-lg text-[16px]">SWIMMING THROUGH A VAST NETWORK OF INTERCONNECTED DEVICES AND SERVERS, SPREADING JOY AND WHIMSY TO USERS ACROSS THE GLOBE</p>
          </div>
        </div>
    )
}

export const ProjectsContainer = () =>{

  const projects=[
    {
      title:"PROJECT NAME",
      desc:"The quick brown fox jumped over the lazy dog",
      image:"",
      date:"",
      detail:"",
      demo:""
    }
  ]
  
  return(
    <div className="custom-height-without-bg box w-full  box-border">
    <div className="innerBox border border-[#ffffff38] h-full p-3">
      <h2 className="text-white text-center iceland my-2 mb-4">PROJECTS</h2>
      <div className="projectsContainer text-white w-full ">
        <Swiper modules={[Navigation, Pagination, Scrollbar]}
      slidesPerView={3}
      spaceBetween={10}
      navigation={true}
      loop={true}
      className="w-[60vw] bg-transparent">
          <SwiperSlide className=""><ProjectsCard title={"TITLE"}/></SwiperSlide>
          <SwiperSlide className=""><ProjectsCard title={"TITLE"}/></SwiperSlide>
          <SwiperSlide className=""><ProjectsCard title={"TITLE"}/></SwiperSlide>
          <SwiperSlide className=""><ProjectsCard title={"TITLE"}/></SwiperSlide>
          <SwiperSlide className=""><ProjectsCard title={"TITLE"}/></SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
  )
}

export const ExperienceContainer = () =>{
  return(
    <div className="custom-height-without-bg box w-full  box-border">
    <div className="innerBox border border-[#ffffff38] h-full p-3 bg-black">
    <h2 className="text-white text-center iceland my-2 mb-4">EXPERIENCE</h2>
    <Swiper modules={[Navigation, Pagination, Scrollbar]}
      slidesPerView={1.2}
      spaceBetween={0}
      navigation={true}
      loop={true}
      className="w-[60vw] bg-transparent">
        <SwiperSlide className=""><ExperienceCard role={"WEB DEVELOPER"} company={"COMPANY NAME"} tenure={"TENURE"}/></SwiperSlide>
        <SwiperSlide className=""><ExperienceCard role={"WEB DEVELOPER"} company={"COMPANY NAME"} tenure={"TENURE"}/></SwiperSlide>
        <SwiperSlide className=""><ExperienceCard role={"WEB DEVELOPER"} company={"COMPANY NAME"} tenure={"TENURE"}/></SwiperSlide>
        <SwiperSlide className=""><ExperienceCard role={"WEB DEVELOPER"} company={"COMPANY NAME"} tenure={"TENURE"}/></SwiperSlide>
        </Swiper>
    </div>
  </div>
  )
}

export const SkillsContainer = () =>{
  return(
    <div className="custom-height-without-bg box w-full  box-border">
    <div className="innerBox border border-[#ffffff38] h-full p-3 bpx-border">
    <h2 className="text-white text-center iceland my-2 mb-4">SKILLS</h2>
    <div className="skillsContainer flex flex-wrap gap-2 p-10 overflow-y-scroll h-fit max-h-[80%] box-border">
      <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" title="HTML"/>
      <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" title="CSS"/>
      <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" title="C"/>
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>
    </div>
    </div>
    </div>
  )
}