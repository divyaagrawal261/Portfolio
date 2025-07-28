import React, { useState, useEffect} from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { Tilt } from 'react-tilt'
import useSound from "use-sound";
import hoverSound from "../assets/sounds/hover.wav";
import clickSound from "../assets/sounds/click.mp3";
import DialogBox from "./DialogBox";

const FuturisticMenu = ({ audioEnabled, setAudioEnabled }) => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showSoundDialog, setShowSoundDialog] = useState(false);
  const [hasAskedForAudio, setHasAskedForAudio] = useState(false);
  const [playSound] = useSound(hoverSound, { soundEnabled: audioEnabled })
  const [playClickSound] = useSound(clickSound, { soundEnabled: audioEnabled });

  // Show sound dialog after component mounts (simulating after loader)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAskedForAudio) {
        setShowSoundDialog(true);
      }
    }, 1000); // Show after 1 second (adjust based on your loader timing)

    return () => clearTimeout(timer);
  }, [hasAskedForAudio]);

  const handleSoundAllow = () => {
    setAudioEnabled(true);
    setHasAskedForAudio(true);
    setShowSoundDialog(false);
    console.log("Audio enabled by user");
  };

  const handleSoundDisallow = () => {
    setAudioEnabled(false);
    setHasAskedForAudio(true);
    setShowSoundDialog(false);
    console.log("Audio disabled by user");
  };

  const toggleAudioFromMenu = () => {
    setAudioEnabled(!audioEnabled);
    console.log(`Audio ${!audioEnabled ? 'enabled' : 'disabled'} from menu`);
  };

  const defaultOptions = {
    reverse: false,
    max: 45,
    perspective: 1500,
    scale: 1.2,
    speed: 1500,
    transition: true,
    axis: null,
    reset: true,
  }


  const handleToggle = () => {
    if (open) {
      setIsVisible(false);
      setTimeout(() => setOpen(false), 300);
      if (audioEnabled) playClickSound();
    } else {
      setOpen(true);
      if (audioEnabled) playClickSound();
      setTimeout(() => setIsVisible(true), 10);
    }
  };

  return (
    <>
      <div
        onClick={handleToggle}
        className="fixed z-[60] h-fit w-fit m-4 cursor-pointer transition-all duration-300"
      >
        <div className="text-white p-2 font-mono rounded-full text-2xl border-white/15 border bg-custom-yellow hover:scale-125 duration-500">
          {!open && <BiMenuAltLeft fill="#040303" stroke="#040303" strokeWidth={1}/>}
          {open && <IoClose fill="#040303" stroke="#040303" strokeWidth={1}/>}
        </div>
      </div>
      <div className="fixed right-4 p-4 z-[60]">
        <h1 
          className="font-sakana text-4xl text-custom-yellow relative overflow-hidden hover:text-center transition-all duration-300 cursor-pointer hover:uppercase hover:font-extrabold px-8"
          style={{
            clipPath: "none",
            transition: "clip-path 0.6s ease-in-out, color 0.3s ease-in-out",
            background: `linear-gradient(90deg, #e48c1e 0%, #e48c1e 100%)`,
            backgroundSize: "0% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            color: '#e48c1e'
          }}
          onMouseEnter={(e) => {
            e.target.style.clipPath = "polygon(10% 0%, 100% 0%, 90% 100%,0% 100%)";
            e.target.style.backgroundSize = "100% 100%";
            e.target.style.color = "#000000";
            e.target.style.transition = "clip-path 0.6s ease-in-out, background-size 0.4s ease-in-out, color 0.3s ease-in-out 0.2s";
          }}
          onMouseLeave={(e) => {
            e.target.style.clipPath = "none";
            e.target.style.backgroundSize = "0% 100%";
            e.target.style.color = '#e48c1e';
            e.target.style.transition = "clip-path 0.6s ease-in-out, background-size 0.4s ease-in-out, color 0.2s ease-in-out";
          }}
        >
          Divya Agrawal
        </h1>
      </div>

      {open && (
        <div className={`fixed z-50 h-screen overflow-hidden w-screen flex items-center justify-center backdrop-blur-sm bg-gradient-to-br from-black via-black/50 to-custom-yellow/20 ${isVisible ? "animate-fadeIn" : "animate-fadeOut"}`}>
          <div 
            className={`fixed ${isVisible ? "animate-fadeIn" : "animate-fadeOut"}`}
            style={{
              animation: isVisible ? 'float 3s ease-in-out infinite' : 'none'
            }}
          >
            <style jsx>{`
              @keyframes float {
                0%, 100% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(-10px);
                }
              }
            `}</style>
            <Tilt options={defaultOptions} className="w-72 p-5 text-custom-yellow font-mono transition-all duration-300">
            <svg
              className="absolute inset-0 w-full h-full z-[-1] pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon
                points="0,0 12,0 18,6 88,6 94,12 100,18 100,65 94,71 94,100 6,100 0,94 0,55 6,49 6,22 0,16"
                fill="#040303E5"
                fillOpacity="0.5"
                stroke="#e48c1e"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div
              className="relative p-5 bg-black/50 border border-custom-yellow outline outline-2 outline-custom-yellow rounded-xl shadow-xl transition-all duration-300 scale-100 hover:scale-[1.01] futuristic-box"
              style={{
                clipPath:
                  "polygon(0% 0%, 12% 0%, 18% 6%, 88% 6%, 94% 12%, 100% 18%, 100% 65%, 94% 71%, 94% 100%, 6% 100%, 0% 94%, 0% 55%, 6% 49%, 6% 22%, 0% 16%)",
              }}
            >
              <ul className="space-y-4">
                {["Dashboard", "Settings", "Logs", `Audio: ${audioEnabled ? 'ON' : 'OFF'}`, "Sign Out"].map((item) => (
                  <li
                    key={item}
                    className="relative overflow-hidden hover:text-center transition-all duration-300 cursor-pointer text-2xl hover:uppercase hover:font-extrabold font-sakana"
                    style={{
                      clipPath: "none",
                      transition: "clip-path 0.6s ease-in-out, color 0.3s ease-in-out",
                      background: `
                        linear-gradient(
                          90deg,
                          ${item.startsWith('Audio:') ? (audioEnabled ? '#00ff00' : '#ff4444') : '#e48c1e'} 0%,
                          ${item.startsWith('Audio:') ? (audioEnabled ? '#00ff00' : '#ff4444') : '#e48c1e'} 100%
                        )
                      `,
                      backgroundSize: "0% 100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "left center",
                      color: item.startsWith('Audio:') ? (audioEnabled ? '#00ff00' : '#ff4444') : '#e48c1e'
                    }}
                    onMouseEnter={(e) => {
                      if (audioEnabled) playSound();
                      e.target.style.clipPath = "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%,10% 100%, 0% 50%)";
                      e.target.style.backgroundSize = "100% 100%";
                      e.target.style.color = "#000000";
                      e.target.style.transition = "clip-path 0.6s ease-in-out, background-size 0.4s ease-in-out, color 0.3s ease-in-out 0.2s";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.clipPath = "none";
                      e.target.style.backgroundSize = "0% 100%";
                      e.target.style.color = item.startsWith('Audio:') ? (audioEnabled ? '#00ff00' : '#ff4444') : '#e48c1e';
                      e.target.style.transition = "clip-path 0.6s ease-in-out, background-size 0.4s ease-in-out, color 0.2s ease-in-out";
                    }}
                    onClick={() => {
                      if (item.startsWith('Audio:')) {
                        toggleAudioFromMenu();
                      }
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Tilt>
          </div>
        </div>
      )}

      <DialogBox
        isVisible={showSoundDialog}
        onAllow={handleSoundAllow}
        onDisallow={handleSoundDisallow}
        title="Enable Sound?"
        message="Allow audio effects for enhanced interactive experience?"
      />
    </>
  );
};

export default FuturisticMenu;
