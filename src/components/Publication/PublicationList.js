import React from "react";
import HeaderLine from "../HeaderLine";
import Publication from "./Publication";
import './PublicationList.css';
import { Publications } from "../../data/PublicationsData";

function PublicationList() {

    return (
        <>
            <div class="main-container">
                <HeaderLine title="Publications" />
                <div class="publication-container">
                    {
                        Publications.map((publication, index) => {
                            return <Publication key={index} props={publication} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PublicationList;