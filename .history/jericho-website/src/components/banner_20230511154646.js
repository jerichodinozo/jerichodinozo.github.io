import React from "react";
import {motion} from "framer-motion";

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
  
  const Banner = () => {
    const [playMarquee, setPlayMarquee] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setPlayMarquee(true);
      }, 2000);
    }, []);
    return (
      <motion.div className='banner' variants={banner}>
        <BannerRowTop title={"brand"} />
        <BannerRowCenter title={"experience"} playMarquee={playMarquee} />
        <BannerRowBottom title={"studio"} />
      </motion.div>
    );
  };
  
  const AnimatedLetters = ({ title, disabled }) => (
    <motion.span
      className='row-title'
      variants={disabled ? null : banner}
      initial='initial'
      animate='animate'>
      {[...title].map((letter) => (
        <motion.span
          className='row-letter'
          variants={disabled ? null : letterAni}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
  
  

export default function banner() {

}