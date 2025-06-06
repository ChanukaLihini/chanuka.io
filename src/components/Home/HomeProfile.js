import React from "react";
import ProfileImage from "../ProfileImage";
import "./HomeProfile.css";

import CV from "./../../documents/CV_ChanukaLihini.pdf"

function HomeProfile() {
  return (
    <>
      <div className="main-profile">
        <ProfileImage />
        <div className="main-profile--content">
          <h1>Chanuka Lihini</h1>
          <h2>Researcher | Lecturer</h2>
          {/* <h2>University of Moratuwa</h2> */}
          <p>
            As an experienced software developer with over 4.5 years of
            expertise, I specialize in delivering cutting-edge engineering
            solutions across diverse applications and technologies. My
            proficiency extends to full-stack development, allowing me to craft
            interactive
          </p>

          <button className="cv-download" onClick={downloadCV}>
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}

function downloadCV() {
  const link = document.createElement("a");
  link.href = CV;
  link.download = "CV Chanuka Lihini.pdf";
  link.click();
}

export default HomeProfile;
