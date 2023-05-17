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
            <Header />
            <Banner />
            {!loading && (
              <div className='transition-image final'>
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                  layoutId='main-image-1'
                />
              </div>
            )}
          </>
        }
      </AnimatePresence>
    </AnimateSharedLayout>

        

    
    )
}