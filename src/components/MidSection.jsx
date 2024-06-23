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
import { experiences, projects, skills} from "../constants";

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

  return(
    <div className="custom-height-without-bg-projects box w-full  box-border">
    <div className="innerBox border border-[#ffffff38] h-full p-3">
      <h2 className="text-white text-center iceland my-2 mb-4">PROJECTS</h2>
      <div className="projectsContainer text-white w-full sm:block hidden">
        <Swiper modules={[Navigation, Pagination, Scrollbar]}
      slidesPerView={3}
      spaceBetween={10}
      navigation={true}
      loop={true}
      className="md:w-[60vw] sm:w-[80vw] bg-transparent">
          {projects.map(({title, desc, detail, demo, date, image})=><SwiperSlide><ProjectsCard title={title} desc={desc} detail={detail} demo={demo} date={date} image={image} /></SwiperSlide>)}
        </Swiper>
      </div>
      <div className="projectsContainer text-white w-full sm:hidden">
        <Swiper modules={[Navigation, Pagination, Scrollbar]}
      slidesPerView={1.2}
      spaceBetween={10}
      navigation={true}
      loop={true}
      className="w-[80vw] bg-transparent">
          {projects.map(({title, desc, detail, demo, date, image})=><SwiperSlide><ProjectsCard title={title} desc={desc} detail={detail} demo={demo} date={date} image={image} /></SwiperSlide>)}
        </Swiper>
      </div>
    </div>
  </div>
  )
}

export const ExperienceContainer = () =>{
  return(
    <div className="custom-height-without-bg box w-full box-border">
    <div className="innerBox border border-[#ffffff38] h-full sm:p-3 p-1 bg-black">
    <h2 className="text-white text-center iceland my-2 mb-4">EXPERIENCE</h2>
    <Swiper modules={[Navigation, Pagination, Scrollbar]}
      slidesPerView={1.2}
      spaceBetween={0}
      navigation={true}
      loop={true}
      className="w-[80vw] sm:w-[60vw] bg-transparent">
        {experiences.map(({role, company, tenure})=><SwiperSlide><ExperienceCard tenure={tenure} role={role} company={company}/></SwiperSlide>)}
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
    <div className="skillsContainer flex flex-wrap gap-2 lg:p-10 overflow-y-scroll h-fit max-h-[80%] box-border">
      {skills.map(({title, src})=><SkillCard title={title} src={src}/>)}
    </div>
    </div>
    </div>
  )
}