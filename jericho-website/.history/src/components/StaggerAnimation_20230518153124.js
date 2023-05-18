import {motion, useAnimation} from 'framer-motion';
import React, {useEffect} from 'react';
import { useInView } from 'react-intersection-observer';



const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };
  
  const letterAni = {
    initial: { y: 400},
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.5,
      },
      
    },
  };
  
const StaggerAnimation = ({word}) => {
  const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
    
    }, [controls, inView]);
    
    return (
      <motion.div  variants={banner}>
        <BannerRowTop title={word} />
      </motion.div>
    );
  };
  
  const AnimatedLetters = ({ title, disabled }) => {
    return(
    <motion.div 
      className='stag-div'
      variants={disabled ? null : banner}
      whileInView = 'animate'
      viewport={{}}
      initial='initial'
      
      >
      {[...title].map((letter) => (
        <motion.div
          variants={disabled ? null : letterAni}>
          {letter}
        </motion.div>
      ))}
    </motion.div>
    )
    
    };
  
  const BannerRowTop = ({ title }) => {
    return (
      <div>
        <AnimatedLetters title={title} />
      </div>
    );
  };

export default StaggerAnimation;