import React from "react";
import { Link } from "react-router-dom"
import Navbar from './../components/navbar'
export default function homepage() {
    return (
        <>
        <div id="homepage" class="page">
            <Navbar />

            <div id="home-elements">
                <div id="homepage-right">
                    <h3 id="worktitle-element">SOFTWARE<br></br>ENGINEER</h3>
                    <h1 id="symbol">&lt;/&gt;</h1>
                    <h3 id="location-element">Based in <br></br>Winnipeg,<br></br> Manitoba</h3>
                </div>

                <div id="name-title">
                    <div id="name-element">
                        <span>JERICHO</span><br/>
                        <span> DINOZO</span>
                    </div>
                    
                </div>


            </div>
            
            
        </div>
        </>
    );
}