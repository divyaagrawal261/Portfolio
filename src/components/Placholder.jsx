import React, { useRef } from 'react'
import useSound from "use-sound";
import hoverSound from "../assets/sounds/hover.wav";

function Placholder({ videoSrc, projectName = "Project", audioEnabled = false, className = "" }) {
  const videoRef = useRef(null);
  const [playHoverSound] = useSound(hoverSound, { 
    volume: 0.5,
    soundEnabled: audioEnabled 
  });

  const handleMouseEnter = () => {
    if (audioEnabled) {
      try {
        playHoverSound();
        console.log("Playing hover sound on Placeholder");
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

  return (
    <div 
      className={`w-full h-screen z-30 text-custom-yellow font-mono transition-all duration-300 backdrop-blur-sm ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
              <defs>
                {/* Glass gradient */}
                {/* <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0.05)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
                </linearGradient> */}
                
                {/* Glass border gradient */}
                <linearGradient id="glassBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(228, 140, 30, 0.8)" />
                  <stop offset="50%" stopColor="rgba(228, 140, 30, 0.4)" />
                  <stop offset="100%" stopColor="rgba(228, 140, 30, 0.6)" />
                </linearGradient>
                
                {/* Glass blur filter */}
                <filter id="glassBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
                  <feOffset dx="0" dy="1" result="offset"/>
                  <feFlood floodColor="rgba(255,255,255,0.3)"/>
                  <feComposite in2="offset" operator="in"/>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                {/* Inner glow */}
                <filter id="innerGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Main glass shape */}
              <polygon
                points="0,0 12,0 18,0 100, 0 100,100 6,100 0,94 0,55 6,49 6,22 0,16"
                fill="url(#glassGradient)"
                stroke="url(#glassBorder)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                filter="url(#glassBlur)"
                className="transition-all duration-300 hover:fill-opacity-80"
              />
              
              {/* Glass highlight */}
              <polygon
                points="0,0 12,0 18,0 100, 0 100,30 80,25 60,20 40,15 20,10 0,5"
                fill="rgba(255, 255, 255, 0.15)"
                opacity="0.3"
                className="transition-opacity duration-300 hover:opacity-80"
              />
              
              {/* Glass reflection */}
              {/* <polygon
                points="5,5 15,5 20,8 85,8 90,12 95,15 95,25 90,28 85,32 20,32 15,35 5,35"
                fill="rgba(255, 255, 255, 0.08)"
                opacity="0.4"
              /> */}
              
              {/* Subtle inner border */}
              <polygon
                points="2,2 12,2 16,2 98, 2 98,98 8,98 2,92 2,57 8,51 8,24 2,18"
                fill="none"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
              />              </svg>
              
              {/* Video Content Container */}
              <div 
                className="relative w-full h-full overflow-hidden"
                style={{
                  clipPath: "polygon(0% 0%, 12% 0%, 18% 0%, 100% 0%, 100% 100%, 6% 100%, 0% 94%, 0% 55%, 6% 49%, 6% 22%, 0% 16%)"
                }}
              >
                {videoSrc ? (
                  /* Video Display */
                  <div className="relative w-full h-full">
                    <video 
                      ref={videoRef}
                      src={videoSrc}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      style={{
                        filter: "brightness(0.7) contrast(1.3)"
                      }}
                    />
                    
                    {/* Video overlay gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-custom-yellow/10 via-transparent to-custom-yellow/10 pointer-events-none" />
                    
                    {/* Project name overlay */}
                    <div className="absolute bottom-4 left-4 text-custom-yellow font-sakana text-lg font-bold z-20">
                      {projectName}
                    </div>
                    
                    {/* Glass overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-custom-yellow/5 pointer-events-none" />
                  </div>
                ) : (
                  /* Default Content */
                  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-black/40 via-black/60 to-black/80">
                    <div className="text-center z-40">
                      <h3 className="text-custom-yellow font-sakana text-xl font-bold mb-2">
                        Glass Card
                      </h3>
                      <p className="text-white/70 text-sm">
                        Interactive placeholder
                      </p>
                    </div>
                    
                    {/* Default glass overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-custom-yellow/10 via-transparent to-white/5 pointer-events-none" />
                  </div>
                )}
              </div>
            </div>
  )
}

export default Placholder