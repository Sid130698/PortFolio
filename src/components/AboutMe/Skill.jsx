import React from "react";

const Skill = ({ logo, name }) => {
  return (
    <div>
      <div className="skill_img">
        <img className="skill_img_circle" src={logo} alt={name}></img>
      </div>
      <div>{name}</div>
    </div>
  );
};

export default Skill;
