import React from 'react'
// import image from "../assets/img3.png"
export default function ProjectsCard({title, desc, image}) {
  return (
    <div className="projectCard h-[380px]">
    <div className="innerBox border border-[#ffffff38] h-full">
      <img src={image} className="w-full bg-image" alt="" draggable="false"/>
      <div className="innerCard p-3">
      <h2 className="text-white  iceland  mb-4">PUBLISHED AT 12/12/12</h2>
      <img src={image} className="projectImage"/>
      <h2 className='iceland text-2xl -tracking-tighter projectTitle'>{title}</h2>
      <h2 className='iceland text-xl'>{title}</h2>
      <p className='iceland text-justify leading-none text-slate-300'>{desc}</p>
      <div className="actionsContainer flex justify-between">
        <button className='text-lg  border border-white p-1'>DETAILS</button>
        <button className='text-lg border border-white p-1'>DEMO</button>
      </div>
      </div>
    </div>
  </div>
  )
}
