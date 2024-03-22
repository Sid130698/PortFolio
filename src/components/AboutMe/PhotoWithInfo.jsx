import React, { useEffect, useRef, useState } from "react";
import "./photoWithInfo.css";
import dpImage from "../../assets/images/dp.JPG"; // Import the image

const PhotoWithInfo = () => {
  const [typeText, setTypeText] = useState("");
  const currIndex = useRef(0);
  const infoText =
    "Hey there! I'm the full-stack wizard you've been looking for, ready to conjure up some magical software solutions! From front-end enchantments to back-end spells, I've got the coding potion to brew up success. Let's team up and create software so brilliant, it'll have bugs begging for mercy!";

  useEffect(() => {
    const interval = setInterval(() => {
      setTypeText((prevText) => {
        const nextChar = infoText[currIndex.current];
        currIndex.current++;
        return prevText + nextChar;
      });
      if (currIndex.current === infoText.length-1) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="outerBoxPWI">
      <div className="info">{typeText}</div>
      <div className="photo">
        {/* Use the imported image */}
        <img src={dpImage} alt="Profile" />
      </div>
    </div></>
    
  );
};

export default PhotoWithInfo;
