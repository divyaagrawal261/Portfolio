import React, { useState } from 'react';
import { Tilt } from 'react-tilt';

const DialogBox = ({ isVisible, onAllow, onDisallow, title = "Enable Sound?", message = "Allow audio effects for enhanced experience?" }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const defaultOptions = {
    reverse: false,
    max: 25,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm">
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
              transform: translateY(-8px);
            }
          }
        `}</style>
        
        <Tilt options={defaultOptions} className="relative">
          {/* Background SVG Shape */}
          <svg
            className="absolute inset-0 w-full h-full z-[-1] pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              points="0,0 15,0 20,5 85,5 90,10 100,15 100,70 90,75 90,100 10,100 0,90 0,25 5,20 5,15 0,10"
              fill="#040303F0"
              stroke="#e48c1e"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div
            className="relative p-8 w-96 bg-black/70 border border-custom-yellow/50 rounded-xl shadow-2xl"
            style={{
              clipPath: "polygon(0% 0%, 15% 0%, 20% 5%, 85% 5%, 90% 10%, 100% 15%, 100% 70%, 90% 75%, 90% 100%, 10% 100%, 0% 90%, 0% 25%, 5% 20%, 5% 15%, 0% 10%)",
              background: "linear-gradient(145deg, rgba(4,3,3,0.95) 0%, rgba(4,3,3,0.85) 50%, rgba(228,140,30,0.1) 100%)"
            }}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">🔊</div>
              <h2 className="text-2xl font-bold text-custom-yellow font-sakana mb-2">
                {title}
              </h2>
              <p className="text-white/80 text-sm font-mono">
                {message}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-center">
              {/* Allow Button */}
              <button
                className="relative overflow-hidden px-6 py-3 text-lg font-sakana font-bold transition-all duration-300 cursor-pointer"
                style={{
                  clipPath: hoveredButton === 'allow' 
                    ? "polygon(10% 0%, 90% 0%, 100% 50%, 90% 90%, 10% 100%, 0% 50%)" 
                    : "none",
                  background: hoveredButton === 'allow'
                    ? "linear-gradient(90deg, #00ff00 0%, #00ff00 100%)"
                    : "linear-gradient(90deg, #00ff00 0%, #00ff00 100%)",
                  backgroundSize: hoveredButton === 'allow' ? "100% 100%" : "0% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  color: hoveredButton === 'allow' ? "#000000" : "#00ff00",
                  border: "2px solid #00ff00",
                  transition: "clip-path 0.6s ease-in-out, background-size 0.4s ease-in-out, color 0.3s ease-in-out"
                }}
                onMouseEnter={() => setHoveredButton('allow')}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={onAllow}
              >
                ALLOW
              </button>

              {/* Disallow Button */}
              <button
                className="relative overflow-hidden px-6 py-3 text-lg font-sakana font-bold transition-all duration-300 cursor-pointer"
                style={{
                  clipPath: hoveredButton === 'disallow' 
                    ? "polygon(10% 0%, 90% 0%, 100% 50%, 90% 90%, 10% 100%, 0% 50%)" 
                    : "none",
                  background: hoveredButton === 'disallow'
                    ? "linear-gradient(90deg, #ff4444 0%, #ff4444 100%)"
                    : "linear-gradient(90deg, #ff4444 0%, #ff4444 100%)",
                  backgroundSize: hoveredButton === 'disallow' ? "100% 100%" : "0% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  color: hoveredButton === 'disallow' ? "#000000" : "#ff4444",
                  border: "2px solid #ff4444",
                  transition: "clip-path 0.6s ease-in-out, background-size 0.4s ease-in-out, color 0.3s ease-in-out"
                }}
                onMouseEnter={() => setHoveredButton('disallow')}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={onDisallow}
              >
                DISALLOW
              </button>
            </div>

            {/* Footer */}
            <div className="text-center mt-4">
              <p className="text-white/50 text-xs font-mono">
                You can change this later in settings
              </p>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default DialogBox;
