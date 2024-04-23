import React from "react";
import Profile from "./Profile";
import HeaderLine from "../HeaderLine";
import SubHeaderSection from "../SubHeaderSection";
import { EducationalQualifications, Experiences } from "../../data/AboutPageData";

function About() {


    return (
        <>
            <div className="about-profile">
                <Profile />
            </div>
            <HeaderLine title="Education" />
            {
                EducationalQualifications.map((qualification) => {
                    return (<SubHeaderSection props={qualification} />)
                })
            }

            <HeaderLine title="Experience" />
            {
                Experiences.map((experience) => {
                    return (<SubHeaderSection props={experience} />)
                })
            }


        </>)
}

export default About;