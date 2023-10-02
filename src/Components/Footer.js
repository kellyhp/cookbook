import React from 'react';
import "../css/Footer.css"
import {Route, Routes, Link, useNavigate} from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <div className = "footer">
            <div className="contact">
            <h1> Contact Me </h1>
            </div>
            <div className="logo">
                <div className ="linkedin" onClick={()=>window.open('https://www.linkedin.com/in/kellyphan03/','_blank')}> </div>
                <div className ="medium" onClick={()=>window.open('https://medium.com/@kellyphan159','_blank')}> </div>
                <div className = "github" onClick={()=>window.open('https://github.com/kelhong','_blank')}> </div>
                <a href = "mailto:khphan@ucdavis.edu = Feedback&body = Message">
                Email: kellyphan159@gmail.com
                </a>
            </div>
        </div>
    )
}

export default Footer;