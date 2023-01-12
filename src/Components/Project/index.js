import React from 'react';
import "./project.css";
import { FiLoader, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const projectCard = {
  hidden: {
    y: "10vh",
  }, 
  visible: {
    y: 0,
    transition: { 
      type: "tween",
      ease: "easeOut", 
      duration: 0.2,
    }
  }
}

const Project = ({ imgSrc, title, type, status, id }) => {
  return (
    <motion.div className='container flex-center-center'
      variants={projectCard}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount:0.5 }}
    >
      <Link className='project flex-center-center' to={`/projects/${id}`}>
        <img src={imgSrc} alt={`${title} Banner`} />
        <div className="project-information flex-center-center">
          <div className="project-title default-title">{title}</div>
          <div className="project-type default-text flex-center-center">{type} | {
            status 
            ? <><FiCheck />Completed</>
            : <><FiLoader />On Going</>
          }</div>
        </div>
      </Link>
    </motion.div>
  )
}

export default Project