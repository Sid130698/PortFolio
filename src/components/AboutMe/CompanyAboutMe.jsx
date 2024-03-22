import React from "react";
import Company from './Company'
import BrillioLogo from "../../assets/images/Brillio_Logo.jpg"
import AmazonLogo from "../../assets/images/amazon_logo.png"
import DigitalPandaLogo from "../../assets/images/digitalPanda.jpg"
import NoveltyVRLogo from "../../assets/images/nvr.jpg"
const CompanyAboutMe = () => {
  return (
    <>
      <div className=" flex company-heading">
        <h1 className="company-heading-title">Companies I have worked For</h1>
      </div>
      <div className="horizontal-scroll-container">
        <div className="content">
          <Company logo={BrillioLogo}      name={"Brillio"}/>
          <Company logo={AmazonLogo}       name={"Amazon"}/>
          <Company logo={DigitalPandaLogo} name={"Digital Panda"}/>
          <Company logo={NoveltyVRLogo}    name={"Novelty VR"}/>
        </div>
      </div>
    </>
  );
};

export default CompanyAboutMe;
