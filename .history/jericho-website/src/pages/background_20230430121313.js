import Navbar from './../components/navbar'
import React from "react";
import { Link } from "react-router-dom"
export default function background() {
    return (
        <>
        <Navbar />

        <div id="workpage-container">
            <div id="about-section">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci quam, venenatis vel velit ut, tincidunt finibus dui. 
                   Maecenas nec ex purus. Etiam viverra tellus congue, porttitor diam nec, laoreet velit. Sed pulvinar molestie massa, 
                   sed auctor magna viverra quis. Duis hendrerit leo sed erat porttitor</p>
            </div>

            <div>
                <h1>Education</h1>
                <span>BSc. Computer Science</span><br></br>
                <

            </div>

            <div>
                <h1>skills</h1>
            </div>


        </div>

        </>
    )
}