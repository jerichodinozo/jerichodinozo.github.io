import React from 'react';
import {motion} from 'framer-motion';

const container = {
    hidden: { y: 1000 },
    show: {
        y: 0,
        transition: {
            staggerChildren: 0.5
        }
    }
}

const item = {
    hidden: { y: 1000 },
    show: { y: 0,
        transition: {
            staggerChildren: 0.5
        } }
  }

  const Stagger = () => {
    return (
        <motion.div id="name-">

        </motion.div>
    );
  }

export default Stagger;