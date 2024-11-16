import React, {useState, useEffect} from "react";
import Tilt from "react-parallax-tilt";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux/index";
import Profile from "../assets/Divya.jpeg";

export const LeftSide = () =>{
     return(
      <>
        <div className="sm:flex md:flex-col md:w-fit w-full hidden">
          <Tilt
            glareEnable={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareMaxOpacity={0.3}
            glareColor="blue"
            className="box box-hover aspect-square lg:h-[120px] xl:h-[196px]"
          >
            <div className="innerBox border border-[#ffffff38] h-full">
              <div className="h-full p-2">
                <img
                  src={Profile}
                  alt="Profile"
                />
              </div>
            </div>
          </Tilt>
          <div className="detailsContainer flex flex-col sm:w-1/2 md:w-full">
            <h2 className="iceland text-slate-300 text-lg">NAME</h2>
            <h1 className="big-shoulders red text-xl font-bold">DIVYA AGRAWAL</h1>
            <h2 className="iceland text-slate-300 text-lg">OCCUPATION</h2>
            <h1 className="big-shoulders red text-xl font-bold">WEB DEVELOPER</h1>
            <h2 className="iceland text-slate-300 text-lg">LINKS</h2>
            <a
              href="https://github.com/divyaagrawal261"
              className="big-shoulders border-primary border px-1 flex justify-between items-center red h-fit hover:text-black hover-bg-primary"
            >
              <h1 className="text-xl">GITHUB</h1>
              <img src={Github} alt="Github Logo" className="h-6" />
            </a>
            <a href="https://www.linkedin.com/in/divya-agrawal-3b710825a/" className="big-shoulders border-primary border px-1 flex justify-between items-center red h-fit mt-1 hover-bg-primary hover:text-black">
              <h1 className="text-xl">LINKEDIN</h1>
              <img src={LinkedIn} alt="LinkedIn Logo" className="h-6" />
            </a>
            <a href="https://drive.google.com/file/d/1v7O_DXTSl-AtcAi4LPgEV5a4Jxhs0BMZ/view" className="big-shoulders border-primary border px-1 flex justify-between items-center red h-fit mt-1 hover-bg-primary hover:text-black">
              <h1 className="text-xl">RESUME</h1>
            </a>
          </div>
        </div>
        <div className="flex md:flex-col md:w-fit w-full sm:hidden">
          <Tilt
            glareEnable={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareMaxOpacity={0.3}
            glareColor="blue"
            className="box box-hover aspect-square lg:h-[120px] xl:h-[196px]"
          >
            <div className="innerBox border border-[#ffffff38] h-full">
              <div className="h-full p-2">
                <img
                  src={Profile}
                  alt="Profile"
                />
              </div>
            </div>
          </Tilt>
          <div className="detailsContainer flex flex-col w-1/2">
            <div className="w-full flex">
              <div className="flex flex-col w-1/2">
            <h2 className="iceland text-slate-300 text-lg">NAME</h2>
            <h1 className="big-shoulders red text-xl font-bold">DIVYA AGRAWAL</h1>
            </div>
            <div className="w-1/2 flex flex-col">
            <h2 className="iceland text-slate-300 text-lg">OCCUPATION</h2>
            <h1 className="big-shoulders red text-xl font-bold">WEB DEVELOPER</h1>
            </div>
            </div>
            <h2 className="iceland text-slate-300 text-lg">LINKS</h2>
            <a
              href="https://github.com/divyaagrawal261"
              className="big-shoulders border-primary border px-1 flex justify-between items-center red h-fit hover:text-black hover-bg-primary"
            >
              <h1 className="text-xl">GITHUB</h1>
              <img src={Github} alt="Github Logo" className="h-6" />
            </a>
            <a href="https://github.com/divyaagrawal261" className="big-shoulders border-primary border px-1 flex justify-between items-center red h-fit mt-1 hover-bg-primary hover:text-black">
              <h1 className="text-xl">LINKEDIN</h1>
              <img src={LinkedIn} alt="LinkedIn Logo" className="h-6" />
            </a>
            <a href="https://github.com/divyaagrawal261" className="big-shoulders border-primary border px-1 flex justify-between items-center red h-fit mt-1 hover-bg-primary hover:text-black">
              <h1 className="text-xl">RESUME</h1>
            </a>
          </div>
        </div>
      </>
    )
}

export const RightSide = () =>{
  const dispatch=useDispatch();
  const action=bindActionCreators(actions, dispatch);
  
    return(
        <div className="xl:w-[196px] lg:w-[196px] h-full custom-height flex-col lg:flex justify-between hidden">
        <div className="xl:w-[196px] lg:w-[196px] border-l-2 border-primary h-fit">
          <div className="bg-primary-trans text-slate-200 flex justify-between h-6 items-center big-shoulders p-1 overflow-hidden w-full xl:w-[196px] lg:w-[196px]">
            <span className="text-lg">ACTIVE QUESTS</span>
            <svg
              fill="#000000"
              fillOpacity="0.7"
              height="600%"
              width="40"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 40 40"
              className="-mr-4"
            >
              <g>
                <g id="b123_geometrical_shape">
                  <path
                    d="M34.408,10.246L23.48,10.367l-5.359,9.527l5.572,9.402l10.928-0.123l5.359-9.525L34.408,10.246z M33.661,27.551
     l-9.043,0.104l-4.61-7.781l4.434-7.883l9.043-0.102l4.609,7.779L33.661,27.551z"
                  ></path>
                  <path
                    d="M16.549,18.932l5.357-9.527L16.334,0L5.406,0.125L0.049,9.65l5.57,9.402L16.549,18.932z M6.365,1.746l9.047-0.102
     l4.607,7.781l-4.432,7.883l-9.044,0.104L1.936,9.629L6.365,1.746z"
                  ></path>
                  <path
                    d="M5.644,21.098l-5.358,9.525l5.57,9.406l10.93-0.123l5.357-9.527l-5.571-9.406L5.644,21.098z M15.823,38.283l-9.044,0.104
     L2.17,30.602l4.433-7.881l9.046-0.105l4.607,7.783L15.823,38.283z"
                  ></path>
                </g>
                <g id="Capa_1_81_"></g>
              </g>
            </svg>
          </div>
          <div className="bg-primary-2 text-slate-500 flex justify-between h-6 items-center iceland p-1 overflow-hidden w-full xl:w-[196px] lg:w-[196px]">
            <span className="text-lg">THE REACT SKILL-UP LINE</span>
          </div>
          <h2 className="iceland text-white mt-2 pl-2">QUEST NAME</h2>
          <h2 className="big-shoulders red pl-2 text-xl">REACT WEBSITE</h2>
          <h2 className="iceland text-white mt-4 pl-2">GOAL</h2>
          <p className="text-slate-500 pl-2 iceland text-sm">DEVELOP A COMPREHENSIVE REACT WEBSITE FEATURING MULTIPLE ROUTERS, INTRICATE UI ELEMENTS, AND SOPHISTICATED STYLING, ENSURING SEAMLESS FUNCTIONALITY AND OPTIMAL USER EXPERIENCE. EXECUTE THE PROJECT ADHERING TO BEST PRACTICES AND ADVANCED REACT PATTERNS.</p>
        </div>
        <button className="hidden border-primary border-2 sm:flex justify-between items-center p-1 red big-shoulders hover-bg-primary hover:text-black font-bold z-20" onClick={()=>action.VisualVisibility(false)}>VISUAL SETTINGS
        <svg width="20" height="20" viewBox="0 0 20 20" fill="#E84A4A" xmlns="http://www.w3.org/2000/svg" className="hover:fill-black"><path d="M1.3403 15C0.917575 14.269 0.58897 13.4875 0.362305 12.674C0.855612 12.4231 1.2699 12.0406 1.55933 11.5689C1.84877 11.0972 2.00207 10.5546 2.00228 10.0011C2.00248 9.44767 1.84959 8.90495 1.56051 8.43301C1.27143 7.96106 0.857424 7.57828 0.364305 7.32701C0.816341 5.69249 1.67703 4.19996 2.8653 2.99001C3.3294 3.29173 3.86792 3.45917 4.42128 3.47379C4.97464 3.48841 5.52126 3.34964 6.00063 3.07284C6.48001 2.79604 6.87346 2.392 7.13743 1.90545C7.4014 1.41889 7.52561 0.868782 7.4963 0.316006C9.13841 -0.108372 10.8615 -0.107683 12.5033 0.318006C12.4743 0.870771 12.5987 1.4208 12.8629 1.90721C13.1271 2.39363 13.5207 2.79748 14.0001 3.07407C14.4796 3.35065 15.0262 3.48919 15.5796 3.47436C16.1329 3.45952 16.6713 3.29189 17.1353 2.99001C17.7143 3.58001 18.2283 4.25101 18.6603 5.00001C19.0933 5.74901 19.4173 6.53001 19.6383 7.32601C19.145 7.57691 18.7307 7.95938 18.4413 8.43111C18.1518 8.90284 17.9985 9.44545 17.9983 9.99889C17.9981 10.5523 18.151 11.0951 18.4401 11.567C18.7292 12.039 19.1432 12.4217 19.6363 12.673C19.1843 14.3075 18.3236 15.8001 17.1353 17.01C16.6712 16.7083 16.1327 16.5408 15.5793 16.5262C15.026 16.5116 14.4794 16.6504 14 16.9272C13.5206 17.204 13.1272 17.608 12.8632 18.0946C12.5992 18.5811 12.475 19.1312 12.5043 19.684C10.8622 20.1084 9.13907 20.1077 7.4973 19.682C7.52635 19.1292 7.4019 18.5792 7.13773 18.0928C6.87355 17.6064 6.47995 17.2025 6.00048 16.9259C5.52101 16.6494 4.97436 16.5108 4.42103 16.5257C3.8677 16.5405 3.32927 16.7081 2.8653 17.01C2.2743 16.407 1.7619 15.7316 1.3403 15ZM7.0003 15.196C8.06593 15.8106 8.86715 16.797 9.25031 17.966C9.7493 18.013 10.2503 18.014 10.7493 17.967C11.1327 16.7979 11.9343 15.8114 13.0003 15.197C14.0655 14.5807 15.3208 14.3795 16.5253 14.632C16.8153 14.224 17.0653 13.789 17.2733 13.334C16.4527 12.4174 15.9994 11.2302 16.0003 10C16.0003 8.74001 16.4703 7.56301 17.2733 6.66601C17.0638 6.21115 16.8128 5.77664 16.5233 5.36801C15.3196 5.62032 14.0651 5.41948 13.0003 4.80401C11.9347 4.18938 11.1335 3.20299 10.7503 2.03401C10.2513 1.98701 9.7503 1.98601 9.2513 2.03301C8.8679 3.20215 8.06631 4.18857 7.0003 4.80301C5.93509 5.41932 4.67978 5.62053 3.4753 5.36801C3.18587 5.77629 2.93544 6.21087 2.7273 6.66601C3.54788 7.58257 4.00119 8.7698 4.0003 10C4.0003 11.26 3.5303 12.437 2.7273 13.334C2.93678 13.7889 3.18784 14.2234 3.4773 14.632C4.68102 14.3797 5.93551 14.5805 7.0003 15.196ZM10.0003 13C9.20466 13 8.44159 12.6839 7.87898 12.1213C7.31637 11.5587 7.0003 10.7957 7.0003 10C7.0003 9.20436 7.31637 8.44129 7.87898 7.87869C8.44159 7.31608 9.20466 7.00001 10.0003 7.00001C10.796 7.00001 11.559 7.31608 12.1216 7.87869C12.6842 8.44129 13.0003 9.20436 13.0003 10C13.0003 10.7957 12.6842 11.5587 12.1216 12.1213C11.559 12.6839 10.796 13 10.0003 13ZM10.0003 11C10.2655 11 10.5199 10.8946 10.7074 10.7071C10.8949 10.5196 11.0003 10.2652 11.0003 10C11.0003 9.73479 10.8949 9.48044 10.7074 9.2929C10.5199 9.10536 10.2655 9.00001 10.0003 9.00001C9.73509 9.00001 9.48073 9.10536 9.2932 9.2929C9.10566 9.48044 9.00031 9.73479 9.00031 10C9.00031 10.2652 9.10566 10.5196 9.2932 10.7071C9.48073 10.8946 9.73509 11 10.0003 11Z"></path></svg></button>
        </div>
    )
}