import React, { useEffect, useRef, useState } from "react";
import ProjectWallpaper from "../../assets/images/hero.jpg"; // Import the image

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
    <div style={{ position: 'relative', width: '100%', height: '700px', padding: '20px', backgroundColor: '#f5f5f5' }}>
      <div
        style={{
          height: '100%',
          backgroundImage: `url(${ProjectWallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '10px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '10px 15px',
            borderRadius: '10px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#333',
            width: 'fit-content',
            maxWidth: '90%',
            lineHeight: '1.5',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {typeText}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
