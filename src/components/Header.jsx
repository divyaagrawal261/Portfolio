import React from "react";

export const Header = () =>{
    return(
        <header className="pb-5">
        <pre className="text-slate-300 big-shoulders text-xl">
          <span className="text-2xl yellow">48</span> LEVEL{" "}
          <span className="border border-[#ffffff38] aspect-square h-fit px-2 text-2xl red font-bold">
            +
          </span>{" "}
          <span className="text-2xl yellow">1,425</span> COINS AWARDED
        </pre>
      </header>
    )
}