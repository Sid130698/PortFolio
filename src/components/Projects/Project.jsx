import React from "react";
import {
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";

const Project = ({ title, subtitle, date, description }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
};

export default Project;
