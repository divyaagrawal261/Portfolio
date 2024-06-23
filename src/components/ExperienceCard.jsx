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
              <div className="h-full xl:p-32 lg:p-20 md:p-16 text-white">
                <h1 className='lg:text-5xl iceland md:text-3xl'>{role}</h1>
                <h1 className='lg:text-3xl iceland md:text-xl'>{company}</h1>
                <h1 className='mt-10 lg:text-xl iceland md:text-lg'>{tenure}</h1>
              </div>
            </div>
          </Tilt>
  )
}

export default ExperienceCard