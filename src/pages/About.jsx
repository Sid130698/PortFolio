import React from 'react'
import PhotoWithInfo from '../components/AboutMe/PhotoWithInfo'
import EducationAboutMe from '../components/AboutMe/EducationAboutMe'
import CompanyAboutMe from '../components/AboutMe/CompanyAboutMe'
import SkillsAboutMe from '../components/AboutMe/SkillsAboutMe'


const About = () => {
  return (
    <div>
      <PhotoWithInfo/>
      <EducationAboutMe/>
      <CompanyAboutMe/>
      <SkillsAboutMe/>
    </div>
  )
}

export default About
