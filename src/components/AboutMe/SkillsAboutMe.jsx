import React from "react";
import Skill from "./Skill";
import Reactlogo from '../../assets/images/reactLogo.png'
import JavaLogo from '../../assets/images/java_logo.jpg'
import JSPLogo from '../../assets/images/jsp.svg'
import AngularLogo from '../../assets/images/angular.jpg'
import SpringBootLogo from '../../assets/images/springboot.png'
import PythonLogo from '../../assets/images/Python.png'
import HTMLLogo from '../../assets/images/html.png'

const SkillsAboutMe = () => {
  return (
    <div className="skill-about-me">
      <h1 className="company-heading-title">My Skills</h1>
      <div className="skill-container">
        <Skill logo={Reactlogo} name="React" />
        <Skill logo={JavaLogo} name="Java" />
        <Skill logo={JSPLogo} name="JSP" />
        <Skill logo={AngularLogo} name="Angular" />
        <Skill logo={SpringBootLogo} name="SpringBoot" />
      </div>
      <div className="skill-container">
        <Skill logo={PythonLogo} name="Python" />
        <Skill logo={HTMLLogo} name="Html" />
        <Skill logo="JS" name="JS" />
        <Skill logo="CSS" name="CSS" />
        <Skill logo="SQL" name="SQL" />
      </div>
    </div>
  );
};

export default SkillsAboutMe;
