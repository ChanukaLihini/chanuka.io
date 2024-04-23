import React from "react";
import ProfileImage from "../ProfileImage";
import './Profile.css';

function Profile() {
    return (
        <div className="profile">
            <ProfileImage />
            <div className="profile-content">
                <h1>Chanuka Lihini</h1>
                <h2>Graduate Researcher</h2>
                <h2>University of Moratuwa</h2>

                <button className="cv-download" onClick={downloadCV}>Download CV</button>
            </div>
        </div>
    )
}

function downloadCV() {
    return '';
}

export default Profile;