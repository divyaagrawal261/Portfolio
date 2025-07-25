import React from 'react'

function Mask() {
  return (
    <div className='fixed z-50 h-screen w-screen flex items-center justify-center bg-black mask'>
        <h1 className='font-sakana text-custom-red text-9xl'>D</h1>
        <h1 className='text-clip pt-6 font-sakana text-custom-yellow text-9xl'>A</h1>
    </div>
  )
}

export default Mask