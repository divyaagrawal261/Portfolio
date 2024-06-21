import React from 'react'
import Tilt from "react-parallax-tilt";

function ExperienceCard({role, company, tenure}) {
  return (
    <Tilt
            glareEnable={false}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            className=" h-full experienceCard bg-transparent"
          >
            <div className="h-full">
              <div className="h-full p-32 text-white">
                <h1 className='text-5xl iceland'>{role}</h1>
                <h1 className='text-3xl iceland'>{company}</h1>
                <h1 className='mt-10 text-xl iceland'>{tenure}</h1>
              </div>
            </div>
          </Tilt>
  )
}

export default ExperienceCard