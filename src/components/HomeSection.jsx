import React from "react";
import img3 from "../assets/img3.png";

function HeroSection()
{
    return(
        <>
        <div className="w-screen h-screen bg-[#111111] flex py-2">
            <img src={img3} className="h-full" alt="WALL_E"/>
        </div>
        </>
    )
}

export default HeroSection;