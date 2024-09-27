import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // GitHub Icon
import "./projectInfo.css"; 

const Project = ({ title, subtitle, date, description, paperLink, githubLink }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>{description}</p>

      {/* Paper Link */}
      {paperLink && (
        <a
          href={paperLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Paper
        </a>
      )}
      <br></br>
      {/* GitHub Link */}
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" /> {/* GitHub Icon */}
          <span style={{ marginLeft: "5px" }}>See on GitHub</span>
        </a>
      )}
    </VerticalTimelineElement>
  );
};

export default Project;
