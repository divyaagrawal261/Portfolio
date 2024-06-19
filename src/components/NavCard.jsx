import React from 'react'

const NavCard = ({title}) => {
  return (
    <div className='w-fit border-l-2 border-primary'>
        <div className="bg-primary-trans text-slate-200 flex justify-between h-6 items-center big-shoulders p-1 overflow-hidden w-full xl:w-[196px] lg:w-[196px]">
            <span className="text-lg font-bold tracking-wider">{title}</span>
            <svg
              fill="#000000"
              fillOpacity="0.7"
              height="600%"
              width="40"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 40 40"
              className="-mr-4"
            >
              <g>
                <g id="b123_geometrical_shape">
                  <path
                    d="M34.408,10.246L23.48,10.367l-5.359,9.527l5.572,9.402l10.928-0.123l5.359-9.525L34.408,10.246z M33.661,27.551
     l-9.043,0.104l-4.61-7.781l4.434-7.883l9.043-0.102l4.609,7.779L33.661,27.551z"
                  ></path>
                  <path
                    d="M16.549,18.932l5.357-9.527L16.334,0L5.406,0.125L0.049,9.65l5.57,9.402L16.549,18.932z M6.365,1.746l9.047-0.102
     l4.607,7.781l-4.432,7.883l-9.044,0.104L1.936,9.629L6.365,1.746z"
                  ></path>
                  <path
                    d="M5.644,21.098l-5.358,9.525l5.57,9.406l10.93-0.123l5.357-9.527l-5.571-9.406L5.644,21.098z M15.823,38.283l-9.044,0.104
     L2.17,30.602l4.433-7.881l9.046-0.105l4.607,7.783L15.823,38.283z"
                  ></path>
                </g>
                <g id="Capa_1_81_"></g>
              </g>
            </svg>
          </div>
          <div className="bg-primary-2 text-slate-500 flex justify-between h-6 items-center iceland p-1 overflow-hidden w-full xl:w-[196px] lg:w-[196px]">
            <span className="text-lg">THE REACT SKILL-UP LINE</span>
          </div>
    </div>
  )
}

export default NavCard