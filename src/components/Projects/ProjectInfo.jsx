import React, { useEffect, useRef, useState } from "react";
import ProjectWallpaper from "../../assets/images/hero.jpg"; // Import the image
import './projectInfo.css'; // Import the CSS file

const ProjectInfo = () => {
  const [typeText, setTypeText] = useState("");
  const currIndex = useRef(0);
  const projectsInfoText = "Here are some of my Personal projects I've worked on. Each one represents a unique challenge and an opportunity to grow my skills!";

  useEffect(() => {
    const startTyping = () => {
      const interval = setInterval(() => {
        setTypeText((prevText) => {
          if (currIndex.current < projectsInfoText.length) {
            const nextChar = projectsInfoText[currIndex.current];
            currIndex.current++;
            return prevText + nextChar;
          } else {
            clearInterval(interval);
            setTimeout(() => {
              currIndex.current = 0; // Reset index
              setTypeText(""); // Clear text
              startTyping(); // Restart typing animation
            }, 5000); // Wait 5 seconds before restarting
            return prevText; // Return current text during the interval
          }
        });
      }, 50);

      return interval; // Return the interval ID for cleanup
    };

    const intervalId = startTyping();

    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, []);

  return (
    <div className="project-info-container">
      <div className="project-info-background">
        <div className="project-info-text">
          {typeText}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
