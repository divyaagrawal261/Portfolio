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
              <div className="h-full xl:p-32 lg:p-20 md:p-16 sm:p-14 p-8 text-white">
                <h1 className='lg:text-5xl iceland sm:text-3xl text-lg'>{role}</h1>
                <h1 className='lg:text-3xl iceland sm:text-xl text-md'>{company}</h1>
                <h1 className='sm:mt-10 lg:text-xl iceland md:text-lg text-sm mt-2'>{tenure}</h1>
              </div>
            </div>
          </Tilt>
  )
}

export default ExperienceCard