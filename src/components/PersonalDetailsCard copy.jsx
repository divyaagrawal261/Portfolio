import React from 'react'
import { Tilt } from 'react-tilt'
import useSound from "use-sound";
import hoverSound from "../assets/sounds/hover.wav";
import photograph from "../assets/Divya.jpeg";

function PersonalDetailsCard({ 
  name = "Divya Agrawal", 
  title = "Full Stack Developer", 
  location = "India",
  email = "divya@example.com",
  phone = "+91 XXXXX XXXXX",
  experience = "3+ Years",
  audioEnabled = false 
}) {
  const [playHoverSound] = useSound(hoverSound, { 
    volume: 0.5,
    soundEnabled: audioEnabled 
  });

  const handleMouseEnter = () => {
    if (audioEnabled) {
      try {
        playHoverSound();
        console.log("Playing hover sound on PersonalDetailsCard");
      } catch (error) {
        console.error("Error playing hover sound:", error);
      }
    }
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

  return (
    <div className="z-30 flex flex-wrap items-center justify-center w-fit">
      <div 
        className=""
        style={{
          animation: 'float 3s ease-in-out infinite'
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
        <Tilt 
          options={defaultOptions} 
          className="w-72 text-custom-yellow font-mono transition-all duration-300"
          onMouseEnter={handleMouseEnter}
        >
          <svg
            className="absolute inset-0 w-full h-full z-[-1] pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              points="5,0 20,0 25, 5 95, 5 100,10 100, 20 95,25 95,50 100,55 100,74 100,95 100,95 95,100 5,100 0,95 0,5"
              fill="#040303E5"
              fillOpacity="0.5"
              stroke="#e48c1e"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div
            className="absolute inset-0 backdrop-blur-sm pointer-events-none"
            style={{
              clipPath:
                "polygon(5% 0%, 20% 0%, 25% 5%, 95% 5%, 100% 10%, 100% 20%, 95% 25%, 95% 50%, 100% 55%, 100% 74%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)",
            }}
          />

          <div
            className="relative p-4 transition-all duration-300 scale-100 hover:scale-[1.01] futuristic-box"
            style={{
              clipPath:
                "polygon(5% 0%, 20% 0%, 25% 5%, 95% 5%, 100% 10%, 100% 20%, 95% 25%, 95% 50%, 100% 55%, 100% 74%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)",
            }}
          >
            <div className="space-y-4 flex flex-col">
                <img 
                  src={photograph} 
                  alt="Divya Agrawal" 
                  className='mr-2 mt-4'
                  style={{
                    clipPath: "inset(6px 6px 6px 6px round 8px)",
                    borderRadius: "8px"
                  }}
                />
              {/* Header Section */}
              <div className="text-center border-b border-custom-yellow/30 pb-3">
                <h2 className="text-custom-yellow font-sakana text-xl font-bold mb-1">
                  {name}
                </h2>
                <p className="text-white/80 text-sm font-medium">
                  {title}
                </p>
              </div>

              {/* Personal Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-xs uppercase tracking-wider">Location</span>
                  <span className="text-custom-yellow text-sm font-medium">{location}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-xs uppercase tracking-wider">Experience</span>
                  <span className="text-custom-yellow text-sm font-medium">{experience}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-xs uppercase tracking-wider">Email</span>
                  <span className="text-custom-yellow text-sm font-medium truncate">{email}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-xs uppercase tracking-wider">Phone</span>
                  <span className="text-custom-yellow text-sm font-medium">{phone}</span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center justify-center pt-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-medium">Available for Work</span>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  )
}

export default PersonalDetailsCard