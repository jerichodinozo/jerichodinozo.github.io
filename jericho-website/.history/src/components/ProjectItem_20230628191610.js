import React from 'react';
import {motion} from 'framer-motion';
import StaggerAnimation from './StaggerAnimation';

const ProjectItem = ({title, id}) => {
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
            <div class="img" id=""></div>
            <div className="project-title"> {title}</div>
        </motion.div>
    )
}

export default ProjectItem;
