import { Link } from "react-router-dom";
import React from 'react';
import {motion} from 'framer-motion';
export default function navbar() {
    return (
        <motion.div id="nav-container"
            initial={{opacity:0, }}
        >
                <ul id="navbar">
                    <li> <Link to="/">home</Link></li>
                    <li> <Link to="/work">work</Link></li>
                    <li><Link to="/background">background</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
            </motion.div>
    )
}