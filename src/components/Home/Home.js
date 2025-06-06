import React from "react";
import HomeProfile from "./HomeProfile";
import AcademicProfiles from "../AcademicProfiles";
import HeaderLine from "../HeaderLine";
import SubHeaderSection from "../SubHeaderSection";
import { EducationalQualifications, Experiences } from "../../data/AboutPageData";

function Home() {
    return (
        <>
            <HomeProfile />
            <AcademicProfiles />

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
        </>
    )
}

export default Home;