import React, { useState } from "react";
import './Header.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, HashRouter } from "react-router-dom";
import Home from "./../Home/Home";
import PublicationList from "./../Publication/PublicationList";
import About from "./../About/About";
import Contact from "./../Contact/Contact";
import Overview from "./../Overview/Overview";
import OverviewNo1 from "../Overview/OverviewDescription/OverviewNo1";
import OverviewNo2 from "../Overview/OverviewDescription/OverviewNo2";
import OverviewNo3 from "../Overview/OverviewDescription/OverviewNo3";
import OverviewNo4 from "../Overview/OverviewDescription/OverviewNo4";
import OverviewNo5 from "../Overview/OverviewDescription/OverviewNo5";


function Header() {
    const [researchClicked, setResearchClicked] = useState(false);
    const basePath = '';

    const onResearchClick = () => {
        setResearchClicked(!researchClicked)
    }

    return (
        <>
            <HashRouter>
                <nav className="main-nav">
                    <Link className="main-nav--logo  main-nav--text" to={basePath}></Link>
                    <div className="main-nav--links">
                        <Link className="main-nav--text" to={basePath}>Home</Link>
                        <div className="main-nav-dropdown">
                            <button className="dropdown-button main-nav--text" onClick={onResearchClick} >Research
                            </button>
                            <div onMouseOut={onResearchClick} className={!researchClicked ? 'dropdown-hide' : 'dropdown-content'}>
                                <Link className="dropdown--text" to={basePath + "/overview"}>Projects</Link>
                                <Link className="dropdown--text" to={basePath+"/publications"}>Publications</Link>
                            </div>
                        </div >
                        <Link className="main-nav--text" to={basePath+ "/contact"}>Contact</Link>
                    </div >
                </nav >
                <Routes>
                    <Route path={basePath+"/"} element={<Home />} />
                    <Route path={basePath+ "/about"} element={<About />} />
                    <Route path={basePath+ "/contact"} element={<Contact />} />
                    <Route path={basePath+ "/overview"} element={<Overview />} />
                    <Route path={basePath+ "/publications"} element={<PublicationList />} />
                    <Route path={basePath+ "/overview/overview-01"} element={<OverviewNo1 />} />
                    <Route path={basePath+ "/overview/overview-02"}element={<OverviewNo2/>} />
                    <Route path={basePath+ "/overview/overview-03"} element={<OverviewNo3/>} />
                    <Route path={basePath+ "/overview/overview-04"} element={<OverviewNo4/>} />
                    <Route path={basePath+ "/overview/overview-05"} element={<OverviewNo5/>} />
                    <Route path="*" element={<Navigate to={basePath + "/"} replace />} />
                </Routes>
            </HashRouter>

        </>
    );
}



export default Header;