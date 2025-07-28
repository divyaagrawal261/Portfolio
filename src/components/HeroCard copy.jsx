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
    <div className="z-30 flex flex-wrap items-center justify-center">
          <div 
            className="w-full"
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
              className="text-custom-yellow font-mono transition-all duration-300"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
              />
            </svg>

            {/* Background blur layer */}
            <div
              className="absolute inset-0 backdrop-blur-sm pointer-events-none"
              style={{
                clipPath:
                  "polygon(4% 0.75%, 21% 0.75%, 25% 5%, 95% 5%, 99% 9%, 99% 21%, 95% 25%, 95% 50%, 99% 54%, 99% 96%, 96% 99%, 4% 99%, 1% 96%, 1% 4%)",
              }}
            />

            <div
              className="relative p-4 pr-6 pt-8 transition-all duration-300 scale-100 hover:scale-[1.01] futuristic-box"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                clipPath:
                  "polygon(5% 0%, 20% 0%, 25% 5%, 95% 5%, 100% 10%, 100% 20%, 95% 25%, 95% 50%, 100% 55%, 100% 74%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)",
              }}
            >
              <div className="">
                {videoSrc ? (
                  /* Single Video Display */
                  <div className="min-w-72 w-72 xl:max-w-96 relative overflow-hidden transition-all duration-300 rounded-lg">
                    <video 
                      ref={videoRef}
                      src={videoSrc}
                      autoPlay
                      loop
                      muted
                      className="w-full aspect-[3/5] object-cover hover:scale-110 transition-transform duration-300"
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