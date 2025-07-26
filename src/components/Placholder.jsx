import React from 'react'

function Placholder() {
  return (
    <div className="w-72 z-50 p-5 text-custom-yellow font-mono transition-all duration-300" style={{
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
    <svg
              className="inset-0 w-52 h-52 pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon
                points="0,0 12,0 18,6 88,6 94,12 100,18 100,65 94,71 94,100 6,100 0,94 0,55 6,49 6,22 0,16"
                fill="#040303E5"
                stroke="#e48c1e"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            </div>
  )
}

export default Placholder