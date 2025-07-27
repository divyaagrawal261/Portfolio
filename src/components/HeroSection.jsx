import React from 'react'
import HeroCard from './HeroCard'
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";

function HeroSection({ audioEnabled }) {
  return (
    <div className='text-white h-screen p-10'
    >
      <h1 className='font-sakana text-4xl text-custom-yellow'>Choose your Journey</h1>
      <div className='flex gap-10 flex-wrap items-center justify-center h-full float-left'>
      <HeroCard 
        videoSrc={vid1} 
        projectName="Project Alpha" 
        className="transform -rotate-2"
        audioEnabled={audioEnabled}
      />
      <HeroCard 
        videoSrc={vid2} 
        projectName="Project Beta" 
        className="transform rotate-1"
        audioEnabled={audioEnabled}
      />
      </div>
    </div>
  )
}

export default HeroSection