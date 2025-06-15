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
            Robotics researcher with expertise in soft robotics, swarm robotics,
            and robotic manipulators. Currently working as a lecturer in the
            fields of mechatronics, robotics, and automation. Research interests
            focus on the development of bio-inspired and adaptive robotic
            systems with real-world applicability. Experienced in designing and
            prototyping novel robotic mechanisms, integrating advanced control
            systems, and implementing industrial automation solutions.
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
