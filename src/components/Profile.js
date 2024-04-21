import React from "react";
import ProfileImage from "./ProfileImage";

function Profile() {
    return (
        <div class="profile">
            <ProfileImage />
            <div class="profile-content">
                <h1>Chanuka Lihini</h1>
                <h2>Graduate Researcher</h2>
                <h2>University of Moratuwa</h2>

                <button class="cv-download" onClick={downloadCV}>Download CV</button>
            </div>
        </div>
    )
}

function downloadCV() {
    return '';
}

export default Profile;