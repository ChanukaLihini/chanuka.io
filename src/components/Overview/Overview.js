import React from "react";
import ResearchCard from "./ResearchCard";
import './Overview.css';
import { ResearchContent } from "../../data/ResearchData";
import HeaderLine from "../HeaderLine";

function Overview() {

    return (<>
       <div className="overview-container">
       <HeaderLine title="Projects" />
        <div className="research-card--list">
            {ResearchContent.map((props, index) => {
                return (<div ><ResearchCard key={index} props={props} /></div>);
            })}
        </div>
       </div>
    </>)
}

export default Overview;