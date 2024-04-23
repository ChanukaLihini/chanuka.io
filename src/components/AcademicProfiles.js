import React from "react";
import LinkedinLogo from './../images/LinkedIn_logo.png';
import ResearchGateLogo from './../images/ResearchGate_logo.png';
import GoogleScholarLogo from './../images/GoogleScholar_logo.png';
import { Link } from "react-router-dom";
import './AcademicProfiles.css';

function AcademicProfiles() {
    return (
        <div className="academic-profiles">
            <Link to="https://www.linkedin.com/in/chanukalihini/" >
                <img className="academic-profile--logo" src={LinkedinLogo} alt="" />
            </Link>
            <Link to="https://scholar.google.com/citations?user=xS5BONcAAAAJ&hl=en" > <img className="academic-profile--logo" src={GoogleScholarLogo} alt="" /></Link>
            <Link to="https://www.researchgate.net/profile/Chanuka-Tennakoon" ><img className="academic-profile--logo" src={ResearchGateLogo} alt="" /></Link>
        </div>
    )
}

export default AcademicProfiles;