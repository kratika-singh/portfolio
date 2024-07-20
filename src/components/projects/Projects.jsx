import React from 'react'
import ProjectsItems from './ProjectsItems'
import { projectsData } from './Data'
const Projects = () => {
  return (
    <div className="work__container container grid">
        {
            projectsData.map((item) =>{
                return <ProjectsItems item={item} key={item.id}/>
            })
        }
    </div>
  )
}

export default Projects
