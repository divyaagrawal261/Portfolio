import React from 'react'
import NavCard from './NavCard'

const NavBar = () => {
  return (
    <div className='absolute flex w-full justify-center gap-2 bottom-9 '>
        <NavCard title={"BEGINNING"} active="true"/>
        <NavCard title={"ACHIEVEMENTS"}/>
        <NavCard title={"PROJECTS"}/>
        <NavCard title={"SKILLS"}/>
    </div>
  )
}

export default NavBar