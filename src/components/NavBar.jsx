import React, { useState, useEffect } from "react";
import { BiMenuAltLeft } from "react-icons/bi";

const FuturisticMenu = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // For fade control

  const handleToggle = () => {
    if (open) {
      // Start fadeOut first, then remove after animation
      setIsVisible(false);
      setTimeout(() => setOpen(false), 300); // match fadeOut duration
    } else {
      setOpen(true);
      setTimeout(() => setIsVisible(true), 10); // small delay for fadeIn class to apply
    }
  };

  return (
    <>
      <div
        onClick={handleToggle}
        className="fixed z-[60] h-fit w-fit m-4 cursor-pointer transition-all duration-300"
      >
        <div className="text-white p-2 font-mono rounded-full text-2xl border-white/15 border">
          <BiMenuAltLeft />
        </div>
      </div>

      {open && (
        <div className="fixed z-50 h-screen w-screen flex items-center justify-center">
          <div
            className={`fixed w-72 p-5 text-cyan-200 font-mono transition-all duration-300 ${
              isVisible ? "animate-fadeIn" : "animate-fadeOut"
            }`}
          >
            {/* SVG border */}
            <svg
              className="absolute inset-0 w-full h-full z-[-1] pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon
                points="0,0 12,0 18,6 88,6 94,12 100,18 100,65 94,71 94,100 6,100 0,94 0,55 6,49 6,22 0,16"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div
              className="relative p-5 bg-black/90 border border-cyan-300 outline outline-2 outline-cyan-500 rounded-xl shadow-xl transition-all duration-300 scale-100 hover:scale-[1.01] futuristic-box"
              style={{
                clipPath:
                  "polygon(0% 0%, 12% 0%, 18% 6%, 88% 6%, 94% 12%, 100% 18%, 100% 65%, 94% 71%, 94% 100%, 6% 100%, 0% 94%, 0% 55%, 6% 49%, 6% 22%, 0% 16%)",
              }}
            >
              <ul className="space-y-4">
                {["Dashboard", "Settings", "Logs", "Sign Out"].map((item) => (
                  <li
                    key={item}
                    className="hover:text-cyan-100 hover:underline hover:pl-2 transition-all duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FuturisticMenu;
