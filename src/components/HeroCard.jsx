import React, { useRef } from 'react'
import { Tilt } from 'react-tilt'
import useSound from "use-sound";
import hoverSound from "../assets/sounds/hover.wav";

function HeroCard({ videoSrc, projectName = "Project", className = "", audioEnabled = false }) {
  const videoRef = useRef(null);
  const [playHoverSound] = useSound(hoverSound, { 
    volume: 0.5,
    soundEnabled: audioEnabled 
  });

  const handleMouseEnter = () => {
    if (audioEnabled) {
      try {
        playHoverSound();
        console.log("Playing hover sound");
      } catch (error) {
        console.error("Error playing hover sound:", error);
      }
    }
    
    if (videoRef.current && videoSrc) {
      videoRef.current.muted = false;
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && videoSrc) {
      videoRef.current.muted = true;
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
    <div className="z-30 h-screen w-screen flex items-center justify-center bg-black/0">
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
              className="w-72 p-5 text-custom-yellow font-mono transition-all duration-300 pb-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
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
              className="relative p-5 transition-all duration-300 scale-100 hover:scale-[1.01] futuristic-box"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            //   style={{
            //     clipPath:
            //       "polygon(0% 0%, 12% 0%, 18% 6%, 88% 6%, 94% 12%, 100% 18%, 100% 65%, 94% 71%, 94% 100%, 6% 100%, 0% 94%, 0% 55%, 6% 49%, 6% 22%, 0% 16%)",
            //   }}
            >
              <div className="space-y-4">
                {videoSrc ? (
                  /* Single Video Display */
                  <div className="relative overflow-hidden rounded-lg border-custom-yellow hover:border-white transition-all duration-300">
                    <video 
                      ref={videoRef}
                      src={videoSrc}
                      autoPlay
                      loop
                      muted
                      className="w-full aspect-[3/5] object-cover hover:scale-105 transition-transform duration-300"
                      style={{
                        filter: "brightness(0.8) contrast(1.2)"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 left-2 text-custom-yellow font-sakana text-lg font-bold">
                      {projectName}
                    </div>
                  </div>
                ) : (
                  /* Default Content */
                  <div className="text-center">
                    <h3 className="text-custom-yellow font-sakana text-xl font-bold mb-4">
                      Portfolio Card
                    </h3>
                    <p className="text-white/80 text-sm">
                      Interactive showcase component
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Tilt>
          </div>
        </div>
  )
}

export default HeroCard