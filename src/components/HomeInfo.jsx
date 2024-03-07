import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";
const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow}></img>
      </Link>
    </div>
  );
};
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi , I am <span className="font-semibold"> Siddharth Singh 👋</span>
      <br></br>A Software developer <br></br> click and drag to see my portfolio{" "}
      <br></br> ➡️
    </h1>
  ),
  3: (
    <InfoBox
      text="Having had the privilege of working with different companies, I've woven tales of success.
     Yet, it's my personal projects that truly fuel my creativity"
      btnText="Want to know more?"
      link="/projects"
    />
  ),
  4: (
    <InfoBox
      text="Ready to start a conversation? Feel free to reach out and let's connect. Whether it's about collaboration opportunities or simply sharing ideas, I'm all ears"
      btnText="Get in Touch"
      link="/Contact"
    />
  ),
  2: (
    <InfoBox
      text="Welcome to my portfolio! I'm an experienced Software Development Engineer (SDE) with a passion for crafting elegant solutions to complex problems. Ready to learn more about my journey?"
      btnText="Discover more?"
      link="/about"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
