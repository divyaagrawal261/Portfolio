import React from 'react'
import useSound from "use-sound";
import hoverSound from "../assets/sounds/hover.wav";
import photograph from "../assets/Divya.jpeg";

function PersonalDetailsCard({ 
  name = "Divya Agrawal",
  title = "Developer", 
  subtitle = "Cloud Enthusiast",
  location = "India",
  email = "divyaagrawal0747@gmail.com",
  phone = "+91 82738 01346",
  education = "IIIT Gwalior",
  audioEnabled = false, 
  className = "",
  showAvatar = true,
  technologies = ['React', 'Node.js', 'Python', 'TypeScript']
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

  return (
    <div 
      className={`w-full h-screen z-30 text-custom-yellow font-mono transition-all duration-300 backdrop-blur-sm ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Glass border gradient */}
          <linearGradient id="personalGlassBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(228, 140, 30, 0.8)" />
            <stop offset="50%" stopColor="rgba(228, 140, 30, 0.4)" />
            <stop offset="100%" stopColor="rgba(228, 140, 30, 0.6)" />
          </linearGradient>
          
          {/* Glass blur filter */}
          <filter id="personalGlassBlur" x="-20%" y="-20%" width="140%" height="140%">
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
          <filter id="personalInnerGlow">
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
          fill="rgba(0, 0, 0, 0.1)"
          stroke="url(#personalGlassBorder)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          filter="url(#personalGlassBlur)"
          className="transition-all duration-300 hover:fill-opacity-80"
        />
        
        {/* Glass highlight */}
        <polygon
          points="0,0 12,0 18,0 100, 0 100,30 80,25 60,20 40,15 20,10 0,5"
          fill="rgba(255, 255, 255, 0.15)"
          opacity="0.3"
          className="transition-opacity duration-300 hover:opacity-80"
        />
        
        {/* Subtle inner border */}
        <polygon
          points="2,2 12,2 16,2 98, 2 98,98 8,98 2,92 2,57 8,51 8,24 2,18"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      
      {/* Personal Details Content Container */}
      <div 
        className="relative w-full h-full overflow-hidden flex items-center justify-center"
        style={{
          clipPath: "polygon(0% 0%, 12% 0%, 18% 0%, 100% 0%, 100% 100%, 6% 100%, 0% 94%, 0% 55%, 6% 49%, 6% 22%, 0% 16%)"
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-black/40 via-black/60 to-black/80">
          {/* Personal Details Content */}
          <div className="text-center ">
            {/* Avatar Section */}
            {showAvatar && (
              <div className="lg:flex hidden justify-center mb-4">
                <div className="w-40 h-40 rounded-lg border-2 border-custom-yellow/50 overflow-hidden bg-gradient-to-br from-custom-yellow/20 to-transparent" style={{ clipPath: "inset(6px 6px 6px 6px round 8px)" }}>
                  <img 
                    src={photograph} 
                    alt={name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            
            {/* Name and Title */}
            <div className="border-b border-custom-yellow/30 pb-3 mb-4">
              <h3 className="text-custom-yellow font-sakana text-xl font-bold mb-1">
                {name}
              </h3>
              <p className="text-white/80 text-sm">
                {title}
              </p>
              <p className="text-white/80 text-sm">
                {subtitle}
              </p>
            </div>
            
            {/* Details Grid */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-center lg:justify-between items-center">
                <span className="text-white/60">Location:</span>
                <span className="text-custom-yellow">{location}</span>
              </div>
              <div className="flex justify-center lg:justify-between items-center">
                <span className="text-white/60">Education:</span>
                <span className="text-custom-yellow">{education}</span>
              </div>
              <div className="flex justify-center lg:justify-between items-center">
                <span className="text-white/60">Email:</span>
                <span className="text-custom-yellow text-xs truncate max-w-32">{email}</span>
              </div>
              <div className="flex justify-center lg:justify-between">
                <span className="text-white/60">Phone:</span>
                <span className="text-custom-yellow">{phone}</span>
              </div>
            </div>
            
            {/* Status Indicator */}
            <div className="flex items-center justify-center pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Available for Work</span>
              </div>
            </div>
            
            {/* Skills/Technologies Preview */}
            {/* <div className="pt-4 border-t border-custom-yellow/20">
              <p className="text-white/60 text-xs mb-2">Technologies:</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-custom-yellow/20 text-custom-yellow text-xs rounded border border-custom-yellow/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
          
          {/* Glass overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-custom-yellow/5 via-transparent to-white/5 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}

export default PersonalDetailsCard