import React from "react";
import ProjectsCard from "./ProjectsCard";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const MidSection = () =>{
    return(
        <div className="custom-height box w-full">
          <div className="innerBox border border-[#ffffff38] h-full">
            <p className="text-white w-[450px] mx-auto mt-4 iceland leading-none text-lg">SWIMMING THROUGH A VAST NETWORK OF INTERCONNECTED DEVICES AND SERVERS, SPREADING JOY AND WHIMSY TO USERS ACROSS THE GLOBE</p>
          </div>
        </div>
    )
}

export const ProjectsContainer = () =>{
  
  return(
    <div className="custom-height-without-bg box w-full  box-border">
    <div className="innerBox border border-[#ffffff38] h-full p-3">
      <h2 className="text-white text-center iceland my-2 mb-4">PROJECTS</h2>
      <div className="projectsContainer text-white w-full ">
        <Swiper modules={[Navigation, Pagination, Scrollbar]}
      slidesPerView={3}
      spaceBetween={10}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={true}
      className="w-[60vw] bg-black">
          <SwiperSlide className=""><ProjectsCard title={"TITLE"}/></SwiperSlide>
          <SwiperSlide className=""><ProjectsCard title={"TITLE"}/></SwiperSlide>
          <SwiperSlide className=""><ProjectsCard title={"TITLE"}/></SwiperSlide>
          <SwiperSlide className=""><ProjectsCard title={"TITLE"}/></SwiperSlide>
          <SwiperSlide className=""><ProjectsCard title={"TITLE"}/></SwiperSlide>
          {/* <SwiperSlide className=""><ProjectsCard/></SwiperSlide>
          <SwiperSlide className=""><ProjectsCard/></SwiperSlide>
          <SwiperSlide className=""><ProjectsCard/></SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  </div>
  )
}