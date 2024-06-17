import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const SkillSection = () => {
    useGSAP(()=>{
        gsap.from(".bgContainer",{  left:200, duration:2,scrollTrigger:{
          trigger:".skillsContainer", scrub:"true", start:"top 50%", end:"top 10%", markers:"true"
        }})
    })
    
  return (
  <>
  <div className="skillsContainer bg-[#111111]">
    <h2 className='text-white text-9xl'>Skills</h2>
    <span className='bg-red-500 bg-clip-text bgContainer'>
    <span className='text-transparent text-stroke-1 stroke-red-200 text-3xl textContainer'>Hello</span>
    </span>
  </div>
  </>
  )
}

export default SkillSection