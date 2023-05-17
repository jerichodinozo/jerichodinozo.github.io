import {motion} from 'framer-motion';
import React from 'react';

const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };
  
  const letterAni = {
    initial: { y: 400 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
      
    },
  };
  
  const StaggerAnimation = () => {
    
    return (
      <motion.div  variants={banner}>
        <BannerRowTop title={"JERICHO"} />
        <BannerRowTop title={"JERICHO"} />
      </motion.div>
    );
  };
  
  const AnimatedLetters = ({ title, disabled }) => (
    <motion.div 
      className='stag-div'
      variants={disabled ? null : banner}
      initial='initial'
      animate='animate'
      >
      {[...title].map((letter) => (
        <motion.div
          variants={disabled ? null : letterAni}>
          {letter}
        </motion.div>
      ))}
    </motion.div>
  );
  
  const BannerRowTop = ({ title }) => {
    return (
      <div>
        <AnimatedLetters title={title} />
      </div>
    );
  };

export default StaggerAnimation;