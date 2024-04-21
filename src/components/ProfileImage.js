import React from "react";
import './../styles/ProfileImage.css';
import profileImg from './../images/chanuka.png';

function ProfileImage() {
    return (
        <div class="profile-image">
            <img
                src={profileImg} alt="Chanuka Lihini" style={{ width: '100%', height: '100%' }} />
        </div>
    )
}

export default ProfileImage;