import React from "react";
import './ContactLine.css';

function ContractLine({ line }) {
    return (
        <div className="contact-line">
            <div className="contact-line--key">{line.key} :</div>
            <div className="contact-line-values">
                {
                    line.values.map(value => {
                        return <div>{value}</div>
                    })
                }
            </div>
        </div>)
}

export default ContractLine;