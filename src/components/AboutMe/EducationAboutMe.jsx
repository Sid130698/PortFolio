import React, { useEffect, useRef, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EducationAboutMe = () => {
  return (
    <>
      <div className="flex justify-center my-journey">
        <h1 style={{ fontSize: "2rem" }}>My Journey</h1>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#f7f" }}
        >
          <h3 className="vertical-timeline-element-title">
            Class X (CBSE Board)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            G.D Mother International School
          </h4>
          <p>Completed my 10th with CGPA of 10.0</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#f5f" }}
        >
          <h3 className="vertical-timeline-element-title">
            Class XII (CBSE Board)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Paramount Academy
          </h4>
          <p>Completed my 12th with 84.8% marks </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#8ff" }}
        >
          <h3 className="vertical-timeline-element-title">B.E (CSE)</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Nitte Meenakshi Institute of Technology
          </h4>
          <p>Graduated as A Computer Science Engineer with CGPA of 8.27</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default EducationAboutMe;
