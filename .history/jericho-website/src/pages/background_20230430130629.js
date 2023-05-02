import Navbar from './../components/navbar'
import React from "react";
import { Link } from "react-router-dom"
export default function background() {
    return (
        <>
        <Navbar />

        <div id="background-container">
            <div id="about-section">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci quam, venenatis vel velit ut, tincidunt finibus dui. 
                   Maecenas nec ex purus. Etiam viverra tellus congue, porttitor diam nec, laoreet velit. Sed pulvinar molestie massa, 
                   sed auctor magna viverra quis. Duis hendrerit leo sed erat porttitor</p>
            
                <h1>Education</h1>
                <span>BSc. Computer Science</span><br></br>
                <span>University of Manitoba</span><br></br>
                <span>2018-2024</span>

            </div>

            <div id="skills-section">
                <h1>Skills</h1>
                <div class="skill-item">
                    <div class="skill-title">Java</div>
                        <div class="skill-bars">
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar grayed-out"></div>
                    </div>
                </div>

                <div class="skill-item">
                    <div class="skill-title">Java</div>
                        <div class="skill-bars">
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar grayed-out"></div>
                    </div>
                </div>

                <div class="skill-item">
                    <div class="skill-title">C</div>
                        <div class="skill-bars">
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar grayed-out"></div>
                    </div>
                </div>

                <div class="skill-item">
                    <div class="skill-title">C++</div>
                        <div class="skill-bars">
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar grayed-out"></div>
                    </div>
                </div>

                <div class="skill-item">
                    <div class="skill-title">HTML</div>
                        <div class="skill-bars">
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar grayed-out"></div>
                    </div>
                </div>

                <div class="skill-item">
                    <div class="skill-title">CSS</div>
                        <div class="skill-bars">
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar grayed-out"></div>
                    </div>
                </div>

                <div class="skill-item">
                    <div class="skill-title">ReactJS</div>
                        <div class="skill-bars">
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar grayed-out"></div>
                    </div>
                </div>
            </div>


        </div>

        </>
    )
}