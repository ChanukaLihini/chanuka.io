import React from "react";
import ProfileImage from "../ProfileImage";
import './HomeProfile.css';

function HomeProfile() {
    return (<>
        <div className="main-profile">
            <ProfileImage/>
            <div className="main-profile--content">
                <h1>Chanuka Lihini</h1>
                <h2>Graduate Researcher</h2>
                <h2>University of Moratuwa</h2>
                <p>As an experienced software developer with over 4.5 years of expertise, I
                    specialize in delivering cutting-edge engineering solutions across diverse
                    applications and technologies. My proficiency extends to full-stack
                    development, allowing me to craft interactive</p>

                <button className="cv-download" onClick={downloadCV}>Download CV</button>
            </div>
        </div>
    </>)
}

function downloadCV() {
    return null;
}

export default HomeProfile;