import React from "react";
import './../styles/HeaderLine.css';

function HeaderLine({ title }) {

    return (
        <div class="header-line">
            <h2 class="title">{title}</h2>
            <div class="title-line"></div>
        </div>
    )
}

export default HeaderLine;