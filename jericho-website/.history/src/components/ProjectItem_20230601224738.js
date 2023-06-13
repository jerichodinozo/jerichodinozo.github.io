import React from 'react';
import motion from 'framer-motion';

const ProjectItem = ({title}) => {
    return (
        <motion.div 
                        class="project-container"
                        initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{once:true}}
                            transition={{
                            ease: "easeInOut",
                            duration: 1.5,
                            delay: 0.4,
                            }}>
                        <div class="img"></div>
                        <div className="project-title"><StaggerAnimation className='project-title' word="PROJECT 1" /></div>
                    </motion.div>
    )
}
