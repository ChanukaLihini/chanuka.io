import React from "react";
import './../styles/ProfileImage.css';
import profileImg from './../images/chanuka.png';

function ProfileImage() {
    return (
      <div className="profile-image__line">
        <div class="profile-image">
          <img
            src={profileImg}
            alt="Chanuka Lihini"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    );
}

export default ProfileImage;