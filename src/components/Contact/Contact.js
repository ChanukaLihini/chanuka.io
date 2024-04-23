import React from "react";
import HeaderLine from './../HeaderLine';
import ContractLine from "./ContactLine";
import { ContactData } from "../../data/ContactPageData";
import './Contact.css';
import AcademicProfiles from "../AcademicProfiles";

function Contact() {
    return (
        <>
            <div class="main-container">
                <HeaderLine title="Contact" />
                {
                    ContactData.map((data, index)=>{
                        return( 
                            <div className="contact-lines" key={index}>
                                <ContractLine line={data} />
                            </div>
                        )
                    })
                }
                <div>
                    <AcademicProfiles/>
                </div>
            </div>
        </>
    )
}

export default Contact;