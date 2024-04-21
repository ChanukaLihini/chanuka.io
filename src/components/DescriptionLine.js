import React from "react";
import './../styles/DescriptionLine.css'

function DescriptionLine({ items }) {

    return (
        <div class="description-line">
            {
                items.map((item,index) => {
                    return (
                        <div key={index}>
                            <h3>{item}</h3>
                        </div>
                    );
                })
            }
              <div class="slim-line"></div>
        </div>
    )
}


export default DescriptionLine;