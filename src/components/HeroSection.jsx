import React from 'react'
import HeroCard from './HeroCard'
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";

function HeroSection({ audioEnabled }) {
  return (
    <div className='text-white h-screen flex justify-center items-center gap-8'
    style={{backgroundImage:"url(/bg.jpg)", backgroundSize: 'cover', backgroundPosition: 'top center'}}>
      {/* <Placholder/> */}
      {/* <SplineComponent/> */}
      
      {/* Card with vid1 */}
      <HeroCard 
        videoSrc={vid1} 
        projectName="Project Alpha" 
        className="transform -rotate-2"
        audioEnabled={audioEnabled}
      />
      
      {/* Card with vid2 */}
      <HeroCard 
        videoSrc={vid2} 
        projectName="Project Beta" 
        className="transform rotate-1"
        audioEnabled={audioEnabled}
      />
      
      {/* Default card without video */}
      <HeroCard 
        className="transform rotate-2" 
        audioEnabled={audioEnabled}
      />
    </div>
  )
}

export default HeroSection