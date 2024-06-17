import React from "react";
import img3 from "../assets/img3.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroSection()
{
    useGSAP(()=>{
        gsap.from("#WALL_E",{duration:2,scale:0.1})
    })
    return(
        <>
        <div className="w-screen h-screen bg-[#111111] flex py-2">
            <img src={img3} className="h-full overflow-hidden" alt="WALL_E" id="WALL_E" draggable="false"/>
        </div>
        </>
    )
}

export default HeroSection;