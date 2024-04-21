import React from "react";
import './Publication.css';

function Publication({ props }) {
    return (
        <>
            <div class="publication-content">
                <h3 class="header-line">{props.title}</h3>
                <p class="detail-line">
                    {props.authors.map((author, index) => {
                        return <span key={index} style={author.highlighted ? { color: '#2185d5' } : {}}>{author.name} </span>
                    })}
                </p>
                <p class="detail-line">{props.conference}</p>
                <p class="ref-line">{props.reference}</p>
            </div>
            <div class="slim-line"></div>
        </>
    )
}

export default Publication;