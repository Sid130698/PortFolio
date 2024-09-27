// src/components/Projects/ProjectTimeline.js
import React from "react";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import Project from "./Project"; // Import the Project component

const ProjectTimeline = ({ projects }) => {
  return (
    <VerticalTimeline>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          subtitle={project.subtitle}
          date={project.date}
          description={project.description}
          paperLink={project.paperLink}
          githubLink={project.githubLink}
        />
      ))}
    </VerticalTimeline>
  );
};

export default ProjectTimeline;
