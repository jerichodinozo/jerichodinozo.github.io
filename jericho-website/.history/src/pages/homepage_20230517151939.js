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
                    <div id="skill-icons">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path></svg>
                    
                    </div>

                </div>
            
        </div>

        <div class="page">

    </div>
            
        </>
    );
    
}