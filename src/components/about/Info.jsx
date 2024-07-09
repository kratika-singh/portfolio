import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class="uil uil-lightbulb-alt about__icon"></i>
            <h3 className="about__title">Data Structures</h3>
              
            
        </div>

        <div className="about__box">
        <i class="uil uil-server about__icon"></i>
            <h3 className="about__title">Web Development</h3>
              
        </div>

        <div className="about__box ">
        <i class="uil uil-palette about__icon"></i>
            <h3 className="about__title">Web Designing</h3>
              
        </div>
    </div>
  )
}

export default Info
