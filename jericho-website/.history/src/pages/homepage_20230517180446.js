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
<AnimatePresence>
<Navbar />
        <div id="homepage" class="page">
            
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


       

        
        <div id="background-container" class="page skillsandabout ">
            
                <div id="about-section">
                    <div class="header"><StaggerAnimation word="ABOUT"/></div>
                        <p class="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci quam, venenatis vel velit ut, tincidunt finibus dui. 
                        Maecenas nec ex purus. Etiam viverra tellus congue, porttitor diam nec, laoreet velit. Sed pulvinar molestie massa, 
                        sed auctor magna viverra quis. Duis hendrerit leo sed erat porttitor</p>
                        
                        {/*<h1 class="header">Education</h1>*/}
                    <div class="header"><StaggerAnimation word="EDUCATION" className="header"/></div>
                        <p class="body"><span>BSc. Computer Science</span><br></br>
                        <span>University of Manitoba</span><br></br>
                        <span>2018-2024</span></p>
                </div>
                    
                <div id="skills-section">

                


                    <div class="header"><StaggerAnimation word="SKILLS"/></div>
                    <motion.div id="skill-icons"
                        initial={{y:-400}}
                        whileInView={{y:1}}
                        
                    >
                        <svg class="icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                        <svg class="icon"stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path></svg>
                        <svg  class="icon" id="react-icon" height="1em" width="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>react</title> <rect width="24" height="24" fill="none"></rect> <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"></path> </g></svg>
                        <svg class="icon"stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.1 3.5l.7 1.1.7-1.1v1.5h1v-3h-1l-.7 1.1-.6-1.1h-1.1v3h1zM18.4 5v-1h-1.4v-2h-1v3zM9.8 5h1v-2h.9v-1h-2.8v1h.9zM6.6 4h.9v1h1v-3h-1v1h-.9v-1h-1v3h1zM5 6l1.2 14.4 5.8 1.6 5.8-1.6 1.2-14.4h-14zm11.3 4.6h-6.8l.2 1.8h6.3999999999999995l-.5 5.5-3.6 1-3.6-1-.3-2.9h1.8l.1 1.5 2 .5 2-.5.2-2.3h-6.2l-.5-5.3h9l-.2 1.7z"></path></svg>
                        <svg class="icon"stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"></path></svg>
                        <svg class="icon"stroke="currentColor" fill="currentColor" stroke-width="0" t="1569683650778" viewBox="0 0 1024 1024" version="1.1" pId="13065" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M301.3 496.7c-23.8 0-40.2-10.5-41.6-26.9H205c0.9 43.4 36.9 70.3 93.9 70.3 59.1 0 95-28.4 95-75.5 0-35.8-20-55.9-64.5-64.5l-29.1-5.6c-23.8-4.7-33.8-11.9-33.8-24.2 0-15 13.3-24.5 33.4-24.5 20.1 0 35.3 11.1 36.6 27h53c-0.9-41.7-37.5-70.3-90.3-70.3-54.4 0-89.7 28.9-89.7 73 0 35.5 21.2 58 62.5 65.8l29.7 5.9c25.8 5.2 35.6 11.9 35.6 24.4 0.1 14.7-14.5 25.1-36 25.1z" pId="13066"></path><path d="M928 140H96c-17.7 0-32 14.3-32 32v496c0 17.7 14.3 32 32 32h380v112H304c-8.8 0-16 7.2-16 16v48c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-48c0-8.8-7.2-16-16-16H548V700h380c17.7 0 32-14.3 32-32V172c0-17.7-14.3-32-32-32z m-40 488H136V212h752v416z" pId="13067"></path><path d="M828.5 486.7h-95.8V308.5h-57.4V534h153.2zM529.9 540.1c14.1 0 27.2-2 39.1-5.8l13.3 20.3h53.3L607.9 511c21.1-20 33-51.1 33-89.8 0-73.3-43.3-118.8-110.9-118.8s-111.2 45.3-111.2 118.8c-0.1 73.7 43 118.9 111.1 118.9z m0-190c31.6 0 52.7 27.7 52.7 71.1 0 16.7-3.6 30.6-10 40.5l-5.2-6.9h-48.8L542 491c-3.9 0.9-8 1.4-12.2 1.4-31.7 0-52.8-27.5-52.8-71.2 0.1-43.6 21.2-71.1 52.9-71.1z" pId="13068"></path></svg>
                        <svg class="icon" fill="#000000" height="1em" width="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.078 12A5.928 5.928 0 0 1 12 6.078a5.946 5.946 0 0 1 5.129 2.959l-1.499.867 5.027-2.902a1.579 1.579 0 0 0-.543-.575l-7.345-4.24c-.424-.245-1.116-.245-1.539 0l-7.345 4.24c-.422.244-.768.844-.768 1.333v8.48c0 .245.086.517.226.758l3.529-2.038A5.883 5.883 0 0 1 6.078 12z"></path><path d="M14.564 10.519A2.971 2.971 0 0 0 12 9.039a2.964 2.964 0 0 0-2.564 4.441L12 12l2.564-1.481z"></path><path d="m20.657 7.002-5.046 2.913-1.046.605-.001-.001L12 12l-2.563 1.48A2.964 2.964 0 0 0 12 14.961a2.97 2.97 0 0 0 2.565-1.481l2.563 1.483a5.944 5.944 0 0 1-5.129 2.959 5.926 5.926 0 0 1-5.128-2.962l-3.529 2.038c.14.242.332.453.543.575l7.345 4.24c.423.245 1.115.245 1.539 0l7.345-4.24c.211-.122.403-.333.543-.575.14-.241.226-.513.226-.758V7.76c0-.245-.086-.517-.226-.758zm-2.735 5.327h-.658v.658h-.657v-.658h-.658v-.658h.658v-.658h.657v.658h.658v.658zm2.468 0h-.658v.658h-.658v-.658h-.657v-.658h.657v-.658h.658v.658h.658v.658z"></path></g></svg>
                        <svg class="icon" height="1em" width="1em" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 8V7H11V8H10Z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0.421143L14 4.21281V10.7872L7.5 14.5788L1 10.7872V4.21281L7.5 0.421143ZM6.33156 4C4.49159 4 3 5.49159 3 7.33156V7.66844C3 9.50841 4.49159 11 6.33156 11C6.84877 11 7.35887 10.8796 7.82148 10.6483L8.22361 10.4472L7.77639 9.55279L7.37426 9.75385C7.05052 9.91573 6.69352 10 6.33156 10C5.04387 10 4 8.95613 4 7.66844V7.33156C4 6.04387 5.04387 5 6.33156 5C6.69352 5 7.05052 5.08427 7.37426 5.24615L7.77639 5.44721L8.22361 4.55279L7.82148 4.35172C7.35887 4.12042 6.84877 4 6.33156 4ZM9 5V6H8V7H9V8H8V9H9V10H10V9H11V10H12V9H13V8H12V7H13V6H12V5H11V6H10V5H9Z" fill="#000000"></path> </g></svg>
                        <svg class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="c"><path fill="#000000" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.8c.1-.8 0-1.7-.4-2.6zm-53.5 55c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5s17.7-39.5 39.5-39.5c14.7 0 27.5 8.1 34.3 20l-13 7.5c-4.2-7.5-12.2-12.5-21.3-12.5-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"></path></svg>
                        <svg class="icon" fill="#000000" width="1em" height="1em" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 16 5 C 11.011719 5 11 7 11 7 L 11 11 L 17 11 L 17 12 L 7 12 C 7 12 4 11.539063 4 17 C 4 22.460938 7 22 7 22 L 10 22 L 10 20.375 C 10 17.964844 11.964844 16 14.375 16 L 17.625 16 C 19.484375 16 21 15.484375 21 13.625 L 21 7 C 21 7 20.988281 5 16 5 Z M 13 7 C 13.550781 7 14 7.449219 14 8 C 14 8.550781 13.550781 9 13 9 C 12.449219 9 12 8.550781 12 8 C 12 7.449219 12.449219 7 13 7 Z M 22 11 L 22 13.625 C 22 16.035156 20.035156 17 17.625 17 L 14.375 17 C 12.515625 17 11 18.515625 11 20.375 L 11 26 C 11 26 11.0625 28 16 28 C 20.9375 28 21 26 21 26 L 21 22 L 15 22 L 15 21 L 25 21 C 25 21 28 21.503906 28 16 C 28 10.496094 25 11 25 11 Z M 19 24 C 19.550781 24 20 24.449219 20 25 C 20 25.550781 19.550781 26 19 26 C 18.449219 26 18 25.550781 18 25 C 18 24.449219 18.449219 24 19 24 Z"></path></g></svg>
                        <svg class="icon" fill="#000000" height="1em" width="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M15,5.6,10.4,1A3.4,3.4,0,0,0,5.78.86L7.66,2.74a1.25,1.25,0,0,1,1.67,1.2V4a1.23,1.23,0,0,1-.08.38l2.45,2.4a1.17,1.17,0,0,1,.37-.08A1.3,1.3,0,1,1,10.77,8h0a1.17,1.17,0,0,1,.08-.37L8.6,5.38v5.23a1.28,1.28,0,0,1,.73,1.15,1.3,1.3,0,0,1-2.6,0,1.27,1.27,0,0,1,.67-1.11V5.07A1.27,1.27,0,0,1,6.73,4a1.17,1.17,0,0,1,.08-.37l-1.9-1.9L1,5.6a3.38,3.38,0,0,0,0,4.79H1L5.6,15a3.38,3.38,0,0,0,4.79,0h0L15,10.4a3.38,3.38,0,0,0,0-4.79Z"></path> </g> </g></svg>
                    </motion.div>

                </div>
            
        </div>

        <div class="page">

    </div>
    </AnimatePresence>
        </>
    );
    
}