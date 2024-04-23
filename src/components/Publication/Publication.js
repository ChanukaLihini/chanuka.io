import React from "react";
import './Publication.css';

function Publication({ props }) {
    return (
        <>
            <div class="publication-content">
                <h3 class="publication-line--header">{props.title}</h3>
                <p class="publication-line--detailed">
                    {props.authors.map((author, index) => {
                        return <span key={index} style={author.highlighted ? { color: '#2185d5'} : {}}>{author.name} </span>
                    })}
                </p>
                <p class="publication-line--detailed">{props.conference}</p>
                <p class="publication-line-ref">{props.reference}</p>
            </div>
            <div class="slim-line"></div>
        </>
    )
}

export default Publication;