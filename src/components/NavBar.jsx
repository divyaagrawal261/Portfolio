import React from 'react'
import NavCard from './NavCard'
import { Link } from 'react-router-dom'

const NavBar = ({page}) => {

  return (
    <>
    <div className='absolute sm:flex w-full justify-center gap-2 bottom-9 z-10 hidden'>
        <Link to="/"><NavCard title={"BEGINNING"} active={page==="home"} /></Link>
        <Link to="/experience"><NavCard title={"EXPERIENCE"} active={page==="experience"}/></Link>
        <Link to="/projects"><NavCard title={"PROJECTS"} active={page==="projects"}/></Link>
        <Link to="/skills"><NavCard title={"SKILLS"} active={page==="skills"}/></Link>
    </div>
    {/* <div className='absolute sm:hidden flex w-full justify-center gap-2 bottom-20 z-10'>
        <Link to="/"><NavCard title={"BEGINNING"} active={page==="home"} /></Link>
        <Link to="/experience"><NavCard title={"EXPERIENCE"} active={page==="experience"}/></Link>
        <Link to="/projects"><NavCard title={"PROJECTS"} active={page==="projects"}/></Link>
        <Link to="/skills"><NavCard title={"SKILLS"} active={page==="skills"}/></Link>
    </div> */}
    </>
  )
}

export default NavBar