import React from 'react'
import HeroCard from './HeroCard'
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import PersonalDetailsCard from './PersonalDetailsCard';

function HeroSection({ audioEnabled }) {
  return (
    <div className='text-white min-h-screen p-3 sm:p-5 lg:p-8 xl:p-12 2xl:p-16'
    >
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between xl:justify-evenly h-full gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 max-w-7xl mx-auto">
        {/* Personal Details Card */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start xl:flex-shrink-0">
          <PersonalDetailsCard audioEnabled={audioEnabled} />
        </div>
        
        {/* Main Content Section */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 xl:gap-12 w-full lg:w-2/3 xl:w-3/5 2xl:w-1/2">
          {/* Title */}
          <div className="text-center lg:text-left xl:text-center 2xl:text-left">
            <h1 className='font-sakana text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-custom-yellow bg-black/50 px-4 py-2 xl:px-6 xl:py-3 2xl:px-8 2xl:py-4 rounded-lg inline-block'>
              Choose your Journey
            </h1>
          </div>
          
          {/* Hero Cards Container */}
          <div className='flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-14 2xl:gap-20 items-center justify-center lg:justify-end xl:justify-center w-full'>
            <div className="w-full sm:w-auto flex justify-center transform xl:scale-110 2xl:scale-125">
              <HeroCard
                videoSrc={vid1}
                projectName="Project Alpha"
                className="transform hover:-rotate-2 transition-transform duration-300"
                audioEnabled={audioEnabled}
              />
            </div>
            <div className="w-full sm:w-auto flex justify-center transform xl:scale-110 2xl:scale-125">
              <HeroCard
                videoSrc={vid2}
                projectName="Project Beta"
                className="transform hover:rotate-1 transition-transform duration-300"
                audioEnabled={audioEnabled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection