import React, { useState } from "react";
import './Header.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./../Home/Home";
import PublicationList from "./../Publication/PublicationList";
import About from "./../About/About";
import Contact from "./../Contact/Contact";
import Overview from "./../Overview/Overview";
import OverviewNo1 from "../Overview/OverviewDescription/OverviewNo1";
import OverviewNo2 from "../Overview/OverviewDescription/OverviewNo2";
import OverviewNo3 from "../Overview/OverviewDescription/OverviewNo3";


function Header() {
    const [researchClicked, setResearchClicked] = useState(false);

    const onResearchClick = () => {
        setResearchClicked(!researchClicked)
    }

    return (
        <>
            <Router>
                <nav className="main-nav">
                    <Link className="main-nav--logo  main-nav--text" to="/"></Link>
                    <div className="main-nav--links">
                        <Link className="main-nav--text" to="/">Home</Link>
                        <div className="main-nav-dropdown">
                            <button className="dropdown-button main-nav--text" onClick={onResearchClick} >Research
                            </button>
                            <div onMouseOut={onResearchClick} className={!researchClicked ? 'dropdown-hide' : 'dropdown-content'}>
                                <Link className="dropdown--text" to="/overview">Projects</Link>
                                <Link className="dropdown--text" to="/publications">Publications</Link>
                            </div>
                        </div >
                        <Link className="main-nav--text" to="/contact">Contact</Link>
                    </div >
                </nav >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/publications" element={<PublicationList />} />
                    <Route path="/overview-01" element={<OverviewNo1 />} />
                    <Route path="/overview-02" element={<OverviewNo2/>} />
                    <Route path="/overview-03" element={<OverviewNo3/>} />
                </Routes>
            </Router>

        </>
    );
}



export default Header;