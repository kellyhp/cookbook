import React from 'react';
import "../css/FrontPage.css"
import American from "./American.js"
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function FrontPage() {
    const navigate = useNavigate();
    return (
            <div className="front-page">
            <div className="About-Me">
                <div className="box1"> 
                <h2> My Cookbook </h2>
                <p className = "paragraph1">
                A college student's personal approach on foods harvested and cooked. I'm currently an undergraduate at UC Davis
                who's working on crafting on some recipes that are not only affordable but also easy to make. I started this in mind
                with the goal of looking back on this project after I graduate, and to continue to use to this to build my cooking portfolio.
                I want to share my passion of cooking with my friends and family to all see how far I've come!
                </p>
                </div>
            </div>  
            <div className="Three-E"> 
            <h1> The Three E's </h1>
                <p> As a young adult trying to find new inspirational foods, I tend to follow these three principles that I've made to find the best foods/recipies to document. </p>
                <div className="sectionE"> 
                    <li className="threebox"> 
                    <div className="section1-image" > </div>
                        <h1> Economical</h1>
                        <p> Find adequate prices that can suffice a student on a budget.</p>
                    </li>
                    <li className="threebox">
                    <div className="section2-image"> </div>
                    <h1> Enriched</h1> 
                     <p> Be mindful of the nuriteints & manage to make a nutritious meal.</p> 
                    </li>
                    <li className="threebox">
                    <div className="section3-image"> </div>
                    <h1>  Enjoyable </h1>
                    <p> Most importantly, find foods that taste delicious. </p>
                    </li>
                </div>
                </div>
                <div className="Cuisine">
                    <h1> Cuisines Harvested </h1> 
                    <div className="carrot"> </div>
                    <Routes> 
                    <Route path = "/american" element = {<American/>}/>
                    </Routes>
                    <input class="Button-a" type = "button" value ="American" onClick = {() => navigate("/american")}/>
                    <input class="Button-a" type = "button" value ="Chinese" onClick = {() => navigate("/chinese")}/>
                    <input class="Button-a" type = "button" value ="Japanese" onClick = {() => navigate("/japanese")}/>
                </div>  
            </div>  
    )
};   

export default FrontPage;