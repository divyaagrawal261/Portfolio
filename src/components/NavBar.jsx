import React from 'react'
import NavCard from './NavCard'
import { Link } from 'react-router-dom'

const NavBar = ({page}) => {

  return (
    <div className='absolute flex w-full justify-center gap-2 bottom-9 z-50'>
        <Link to="/"><NavCard title={"BEGINNING"} active={page==="home"} /></Link>
        <Link to="/experience"><NavCard title={"EXPERIENCE"} active={page==="experience"}/></Link>
        <Link to="/projects"><NavCard title={"PROJECTS"} active={page==="projects"}/></Link>
        <Link to="/skills"><NavCard title={"SKILLS"} active={page==="skills"}/></Link>
    </div>
  )
}

export default NavBar