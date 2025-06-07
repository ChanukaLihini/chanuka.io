import React from "react";
import './ResearchCard.css';

function ResearchCard({props}) {

    return (<>
        <article className="research-card">
            <div class="research-card-wrapper">
                <figure>
                    <img className="non-padded" src={props.imgUrl} alt="" />
                </figure>
                <div class="research-card--body">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <a href={props.url} class="research-card--read-more">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </article></>)
}

export default ResearchCard;