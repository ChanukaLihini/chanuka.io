import React from "react";
import SubHeaderLine from "./SubHeaderLine";
import DescriptionLine from "./DescriptionLine";

function SubHeaderSection({ props }) {
    return (<>
        <SubHeaderLine props={{ title: props.title, subtitle: props.subtitle, timeline: props.timeline }} />
        <DescriptionLine items={props.description} />
    </>)
}

export default SubHeaderSection;