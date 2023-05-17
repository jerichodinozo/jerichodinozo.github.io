import React from "react";
import { Link } from "react-router-dom"
import Navbar from './../components/navbar'


import ScrollReveal from"scrollreveal";
import Fade from 'react-reveal/Fade';

import MovingComponent from 'react-moving-text';
import Letters from 'react-moving-text';


import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Banner from '.././components/Banner';



export default function homepage() {
    return (

<AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        
          <>
           
            <Banner />
            
         
        
      </AnimatePresence>
    </AnimateSharedLayout>

        

    
    )
}