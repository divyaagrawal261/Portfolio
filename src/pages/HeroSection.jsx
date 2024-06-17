import React from "react";
import Tilt from "react-parallax-tilt";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";

export const HeroSection = () => {
  return (
    <div className="min-h-[100vh] heroSection lg:px-[15px] lg:py-[27px] ">
      <header className="pb-5">
        <pre className="text-slate-300 big-shoulders text-xl">
          <span className="text-2xl yellow">48</span> LEVEL{" "}
          <span className="border border-[#ffffff38] aspect-square h-fit px-2 text-2xl red font-bold">
            +
          </span>{" "}
          <span className="text-2xl yellow">1,425</span> COINS AWARDED
        </pre>
      </header>
      <div className="flex gap-4 items-start">
        <div className="flex flex-col w-fit">
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
                  src="https://media.licdn.com/dms/image/D4D03AQHnFQgz7KL-Ew/profile-displayphoto-shrink_200_200/0/1676355303240?e=1724284800&v=beta&t=zxnPJ4qatS8ws2gx3bHPF4-_RXjTGRYXX4dtqPlGZwY"
                  alt=""
                />
              </div>
            </div>
          </Tilt>
          <div className="detailsContainer flex flex-col">
            <h2 className="iceland text-slate-300 text-lg">NAME</h2>
            <h1 className="big-shoulders red text-xl">DIVYA AGRAWAL</h1>
            <h2 className="iceland text-slate-300 text-lg">OCCUPATION</h2>
            <h1 className="big-shoulders red text-xl">WEB DEVELOPER</h1>
            <h2 className="iceland text-slate-300 text-lg">LINKS</h2>
            <a
              href="https://github.com/divyaagrawal261"
              target="_blank"
              className="big-shoulders border-primary border px-1 flex justify-between items-center red h-fit hover:text-black hover-bg-primary"
            >
              <h1 className="text-xl">GITHUB</h1>
              <img src={Github} alt="" className="h-6" />
            </a>
            <a className="big-shoulders border-primary border px-1 flex justify-between items-center red h-fit mt-1 hover-bg-primary hover:text-black">
              <h1 className="text-xl">LINKEDIN</h1>
              <img src={LinkedIn} alt="" className="h-6" />
            </a>
          </div>
        </div>
        <div className="custom-height box w-full">
          <div className="innerBox border border-[#ffffff38] h-full"></div>
        </div>
        <div className="xl:w-[196px] border-l-2 border-primary h-52">
          <div className="bg-primary text-slate-200 flex justify-between h-6 items-center iceland p-1 overflow-hidden">
            <span className="text-sm">ACTIVE QUESTS</span>
            <svg
              fill="#000000"
              fill-opacity="0.7"
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
        </div>
      </div>
    </div>
  );
};
