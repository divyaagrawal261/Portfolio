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
            className="w-[120px] text-white aspect-square border-slate-500 skillCard flex justify-center"
        >
            <div className="inner-Card w-[120px] aspect-square h-[120px] p-2 flex justify-center flex-col items-center">
            <div className="title iceland text-2xl">{title}</div>
            <img src={src} alt="" className='h-[80px]'/>
            </div>
        </Tilt>
    );
}

export default SkillCard;
