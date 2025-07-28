import React from 'react'

function Placholder() {
  return (
    <div className="w-full -mx-4 z-30 text-custom-yellow font-mono transition-all duration-300 backdrop-blur-md"
    >
    <svg
              className="inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Glass gradient */}
                <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0.05)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
                </linearGradient>
                
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
                opacity="0.6"
                className="transition-opacity duration-300 hover:opacity-80"
              />
              
              {/* Glass reflection */}
              <polygon
                points="5,5 15,5 20,8 85,8 90,12 95,15 95,25 90,28 85,32 20,32 15,35 5,35"
                fill="rgba(255, 255, 255, 0.08)"
                opacity="0.4"
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
            </div>
  )
}

export default Placholder