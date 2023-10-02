import React from 'react';
import "../css/Header.css"
import American from "./American.js"
import {Route, Routes, Link, useNavigate} from 'react-router-dom';
import HomePage from './HomePage';


function Header () {
    const navigate = useNavigate();
    return (
    <div className="header">
        <ul className="navbar" style={{ listStyleType: 'none' }}>
        <Routes>
            <Route path = "/american" element = {<American/>}/>
            <Route path = "../" element = {<HomePage/>}/>
        </Routes>
            <li>
            <Link to="../" className="nav-item1">Home</Link>
            </li>
            <li>
            <Link to="/american" className="nav-item">American</Link>
            </li>
            <li> 
            <Link to="/chinese" className="nav-item">Chinese</Link>
            </li>
            <li>  
            <Link to="/japanese" className="nav-item">Japanese</Link>
            </li>
        </ul>
        <section className="header-logo" onClick = {() => navigate("../", { replace: true })}>
            <div className="line"> </div>
            <div className = "top">
                <div className = "title1"> Harvest</div>
                <div className = "title2"> And</div>
                <div className = "title3"> Spice</div>
            </div>
            <div className="rounded"></div>
        </section> 
    </div>
    )
}
export default Header;
