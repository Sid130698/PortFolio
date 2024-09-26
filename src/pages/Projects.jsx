// src/components/Projects/Projects.js
import React from "react";
import ProjectInfo from "../components/Projects/ProjectInfo";
import ProjectTimeline from "../components/Projects/ProjectTimeline";

const Projects = () => {
  const projectData = [
    {
      title: "Awesome Project",
      subtitle: "Description of Awesome Project",
      date: "Project 1 (2023)",
      description: "This project involved using React and Node.js to build a dynamic web application.",
    },
    {
      title: "Cool Project",
      subtitle: "Description of Cool Project",
      date: "Project 2 (2023)",
      description: "Developed a mobile application using Flutter and Firebase.",
    },
    {
      title: "Innovative Project",
      subtitle: "Description of Innovative Project",
      date: "Project 3 (2024)",
      description: "This project focused on machine learning and data analysis using Python.",
    },
  ];

  return (
    <>
      <div className="flex justify-center my-journey">
        <h1 style={{ fontSize: "2rem" }}>My Projects</h1>
      </div>
      <ProjectInfo />
      <ProjectTimeline projects={projectData} />
    </>
  );
};

export default Projects;
