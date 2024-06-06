import React from "react";

export const LoadingScreen=()=>
{
    return(
        <>
        <div className="w-screen h-screen flex justify-center items-center custom text-9xl bg-[#111111] text-[#FF715B] overflow-hidden">
            <div className="initialsContainer">
            <div>
            <span className="top-2">D</span>
            </div>
            <span className="block -mt-20 pl-14">A</span>
            </div>
        </div>
        </>
    )
}