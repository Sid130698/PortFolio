// src/components/Projects/Projects.js
import React from "react";
import ProjectInfo from "../components/Projects/ProjectInfo";
import ProjectTimeline from "../components/Projects/ProjectTimeline";

const Projects = () => {
  const projectData = [
    {
      title: "Online Compiler IDE",
      subtitle: "Web-Based Platform for Code Compilation and Execution",
      date: "October 2023",
      description: "Developed a full-stack application using JSP and Core Java, allowing users to compile and execute code online. The platform provides an intuitive interface for seamless code testing across multiple programming languages.",
      githubLink: "https://github.com/Sid130698/online_compiler_IDE", // Add GitHub repo link
    },
    {
      title: "Chain of Bharat",
      subtitle: "Blockchain Simulation Project",
      date: "January 2024",
      description: "Created a blockchain simulation using Java, implementing core features such as block creation, hash verification, and mining algorithms. The project simulates blockchain operations, demonstrating secure data chaining and transaction verification.",
      githubLink: "https://github.com/Sid130698/ChainOfBharat", // Add GitHub repo link
    },
    {
      title: "Self-Driving Car",
      subtitle: "Machine Learning-Based Autonomous Navigation System",
      date: "September 2024",
      description:
        "Designed and developed a machine learning model for autonomous vehicle navigation within a simulation environment. The system leverages advanced algorithms for real-time path detection, terrain analysis, and decision-making to control vehicle movement. Additionally, I co-authored a paper based on this project, which was published by Springer.",
      paperLink: "https://link.springer.com/chapter/10.1007/978-981-19-2500-9_52", // Paper link
      githubLink: "https://github.com/Sid130698/self_driving_car", // Add GitHub repo link
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
