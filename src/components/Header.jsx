import React, { useState } from "react";
import NavCard from "./NavCard";
import { Link } from "react-router-dom";

export const Header = ({page}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="pb-5">
        <pre className="text-slate-300 big-shoulders text-xl">
          <span className="text-2xl yellow">48</span> LEVEL{" "}
          <span className="border border-[#ffffff38] aspect-square h-fit px-2 text-2xl red font-bold">
            +
          </span>{" "}
          <span className="text-2xl yellow">1,425</span> COINS AWARDED
          <span
            className="border border-[#ffffff38] aspect-square h-[32px] px-2 text-2xl red font-bold float-right sm:hidden"
            onClick={handleClick}
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </span>
        </pre>
      </header>
      <div className={`fixed responsiveNav bg-black bg-opacity-55 sm:hidden ${isMenuOpen ? "flex" : "hidden"} flex-col w-fit justify-center gap-2 bottom-10 z-10 h-fit py-4 pr-5`}>
        <Link to="/"><NavCard title={"BEGINNING"} active={page==="home"} /></Link>
        <Link to="/experience"><NavCard title={"EXPERIENCE"} active={page==="experience"}/></Link>
        <Link to="/projects"><NavCard title={"PROJECTS"} active={page==="projects"}/></Link>
        <Link to="/skills"><NavCard title={"SKILLS"} active={page==="skills"}/></Link>
    </div>
    </>
  );
};
