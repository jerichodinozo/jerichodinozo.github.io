import React from "react";
import { Link } from "react-router-dom"
import Navbar from './../components/navbar'


import ScrollReveal from"scrollreveal";
import Fade from 'react-reveal/Fade';

import MovingComponent from 'react-moving-text';
import Letters from 'react-moving-text';


import { motion, AnimateSharedLayout, AnimatePresence, easeIn, easeInOut } from "framer-motion";
import StaggerAnimation from '.././components/StaggerAnimation'


export default function homepage() {
    return (

<>
        <div id="homepage" class="page">
            <Navbar />
            <div id="home-elements" className="banner">
                <div id="homepage-right" className="worktitle-element">
                    {/*<h3 id="worktitle-element">SOFTWARE<br></br>ENGINEER</h3>*/}
                    <StaggerAnimation word="SOFTWARE" />
                    <StaggerAnimation word="ENGINEER" />
                    <motion.h1 id="symbol"
                        initial={{y:400, opacity:0}}
                        animate={{y:0, opacity: 1}}
                        transition={{ease: easeInOut, duration: 1.5}}
                    >
                        &lt;/&gt;
                    </motion.h1>
                    <h3 id="location-element">Based in <br></br>Winnipeg,<br></br> Manitoba</h3>
                </div>

                <motion.div className="name-title">
                    <StaggerAnimation word={"JERICHO"}/>
                    <StaggerAnimation word={"DINOZO"}/>
                </motion.div>

            </div>
        </div>


        <div class="page" id="projects-page">
            
                <div class="project-item" id="project-1">
                    <h1>Project 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci quam, venenatis vel velit ut, tincidunt finibus dui. 
                                Maecenas nec ex purus. Etiam viverra tellus congue, porttitor diam nec, laoreet velit. Sed pulvinar molestie massa, 
                                sed auctor magna viverra quis.</p>
                </div>
            

            
                <div class="project-item" id="project-2">
                    <h1>Project 2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci quam, venenatis vel velit ut, tincidunt finibus dui. 
                                Maecenas nec ex purus. Etiam viverra tellus congue, porttitor diam nec, laoreet velit. Sed pulvinar molestie massa, 
                                sed auctor magna viverra quis.</p>
                </div>
            

            
                <div class="project-item" id="project-3">
                    <h1>Project 3</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci quam, venenatis vel velit ut, tincidunt finibus dui. 
                                Maecenas nec ex purus. Etiam viverra tellus congue, porttitor diam nec, laoreet velit. Sed pulvinar molestie massa, 
                                sed auctor magna viverra quis.</p>
                </div>
            

            
                <div class="project-item" id="project-4">
                    <h1>Project 4</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci quam, venenatis vel velit ut, tincidunt finibus dui. 
                                Maecenas nec ex purus. Etiam viverra tellus congue, porttitor diam nec, laoreet velit. Sed pulvinar molestie massa, 
                                sed auctor magna viverra quis.</p>
                </div>
            

        </div>

        
        <div id="background-container" class="page">
            
                <div id="about-section">
                    <h1 class="header">About</h1>
                        <p class="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci quam, venenatis vel velit ut, tincidunt finibus dui. 
                        Maecenas nec ex purus. Etiam viverra tellus congue, porttitor diam nec, laoreet velit. Sed pulvinar molestie massa, 
                        sed auctor magna viverra quis. Duis hendrerit leo sed erat porttitor</p>
                        
                        <h1 class="header">Education</h1>
                        <p class="body"><span>BSc. Computer Science</span><br></br>
                        <span>University of Manitoba</span><br></br>
                        <span>2018-2024</span></p>
                </div>
                    
                <div id="skills-section">

                


                    <h1 class="header">Skills </h1>

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

        <div class="page">

    </div>
            
        </>
    );
    
}