import React, { useEffect, useRef, useState } from "react";
import "./projectInfo.css"; 

const ProjectInfo = () => {
  const [typeText, setTypeText] = useState("");
  const currIndex = useRef(0);
  const projectsInfoText = "Here are some of the projects I've worked on. Each one represents a unique challenge and an opportunity to grow my skills!";
  
  const projectImageUrl = "https://via.placeholder.com/400"; // Replace with any image URL

  useEffect(() => {
    const interval = setInterval(() => {
      setTypeText((prevText) => {
        const nextChar = projectsInfoText[currIndex.current];
        currIndex.current++;
        return prevText + nextChar;
      });
      if (currIndex.current === projectsInfoText.length-1) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="outerBoxProjectInfo">
      <div className="projectPhoto">
        <div className="projectPhotoFrame">
          <img src={projectImageUrl} alt="Project" />
        </div>
      </div>
      <div className="projectInfoText">{typeText}</div>
    </div>
  );
};

export default ProjectInfo;
