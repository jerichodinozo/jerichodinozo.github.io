import React from "react";
import { Link } from "react-router-dom"
import Navbar from './../components/navbar'
import Fade from 'react-reveal/Fade';
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

        <div id="background-container" class="page">
            <div id="about-section">
               <Fade bottom> <h1 class="header">About</h1></Fade>
                <Fade bottom><p class="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci quam, venenatis vel velit ut, tincidunt finibus dui. 
                   Maecenas nec ex purus. Etiam viverra tellus congue, porttitor diam nec, laoreet velit. Sed pulvinar molestie massa, 
                   sed auctor magna viverra quis. Duis hendrerit leo sed erat porttitor</p></Fade>
            
                <Fade bottom><h1 class="header">Education</h1></Fade>
                <Fade bottom><p class="body"><span>BSc. Computer Science</span><br></br>
                <span>University of Manitoba</span><br></br>
                <span>2018-2024</span></p></Fade>

            </div>

            <div id="skills-section">
                <h1 class="header">Skills</h1>
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
                    <div class="skill-title">Javascript</div>
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
                        <div class="skill-bar"></div>
                    </div>
                </div>

                <div class="skill-item">
                    <div class="skill-title">CSS</div>
                        <div class="skill-bars">
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                    </div>
                </div>

                <div class="skill-item">
                    <div class="skill-title">ReactJS</div>
                        <div class="skill-bars">
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar grayed-out"></div>
                        <div class="skill-bar grayed-out"></div>
                    </div>
                </div>

                <div class="skill-item">
                    <div class="skill-title">SQL</div>
                        <div class="skill-bars">
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar"></div>
                        <div class="skill-bar grayed-out"></div>
                        <div class="skill-bar grayed-out"></div>
                    </div>
                </div>

            </div>


        </div>

        </>
    );
}