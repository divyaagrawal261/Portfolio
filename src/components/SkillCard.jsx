import React from 'react';
import Tilt from "react-parallax-tilt";

function SkillCard({title, src}) {
    return (
        <Tilt
        glareEnable={true}
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        glareColor='blue'
        glareMaxOpacity={0.2}
            className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] text-white aspect-square border-slate-900 border skillCard flex justify-center"
        >
            <div className="inner-Card w-[90px] h-[90px] md:w-[120px] aspect-square md:h-[120px] md:p-2 p-0 flex justify-center flex-col items-center">
            <div className="title iceland text-2xl">{title}</div>
            <img src={src} alt="" className='md:h-[80px] h-[50px]'/>
            </div>
        </Tilt>
    );
}

export default SkillCard;
