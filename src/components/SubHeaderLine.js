import React from "react";
import './../styles/SubHeaderLine.css';

function SubHeaderLine({ props }) {

    return (
        <>
            <div class="sub-header-line">
                <div class="main-line">
                    <h2>
                        {props.title}
                    </h2>
                    <div class="timeline-card">{props.timeline}</div>
                </div>

                <h3 class="sub-line">{props.subtitle}</h3>
            </div>
        </>
    )
}


export default SubHeaderLine;