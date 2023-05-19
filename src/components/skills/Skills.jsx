import React from 'react';
import './skills.css';
import { blender,
  cSharp,
  figma,
  git,
  java,
  js,
  python,
  unity } from './imports.js';

/*
      <div className='myPortfolio__skills-title' >
        <h4>Ve Daha Fazlası...</h4> 
      </div>*/

const skillsData= [
  {
    logo: blender
  },
  {
    logo: cSharp
  },
  {
    logo: figma
  },
  {
    logo: git
  },
  {
    logo: java
  },
  {
    logo: js
  },
  {
    logo: python
  },
  {
    logo: unity
  }
]

const Skills = () => {
  return (
    
    <div  data-aos="zoom-out-left" id='skills'>
      <div className='myPortfolio__skills-title ' >
        <h3>My Skills</h3> 
      </div>
    <div className='myPortfolio__skills-slider'>
      <div className='myPortfolio__skills-slider__slide-track'>
        {skillsData.map((item, index) => (
          <div key={index} className='myPortfolio__skills-slider_logo'>
            <img src={item.logo} alt='logo'/>
          </div>
          ))}
          {skillsData.map((item, index) => (
            <div key={index} className='myPortfolio__skills-slider_logo'>
              <img src={item.logo} alt='logo'/>
            </div>
          ))}
          
      </div>
    </div>    
  </div>
  )
}

export default Skills;