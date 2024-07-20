import React from 'react'

const ProjectsItems = ({item}) => {
  return (
    <div>
      <div className="work__card" key={item.id}>
      <img src={item.image} alt='' className='work__img'/>
      <h3 className="work__title">{item.title}</h3>
      <a href={item.git} className="work__button">
        Git Repo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
        </div>
    </div>
  )
}

export default ProjectsItems
