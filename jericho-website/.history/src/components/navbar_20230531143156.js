import { Link } from "react-router-dom";
import React from 'react';
import {easeInOut, motion} from 'framer-motion';
export default function navbar() {
    return (
        <motion.div id="nav-container"
            initial={{opacity:0, y:-400}}
            animate={{opacity:1, y:0}}
            transition={{duration:2, ease: easeInOut}}
        >
                <ul id="navbar">
                    <li> <Link to="/">home</Link></li>
                    <li> <a href="#page2">about</a></li>
                    <li><a href="#page3">work</a></li>
                    <li><a href="#page4">contact</a></li>
                </ul>
            </motion.div>
    )
}