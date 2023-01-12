import React from 'react';
import "./featured.css";
import Title from "../../Title";
import Project from '../../Project';
import { Link } from 'react-router-dom';

const FeaturedProjects = ({ ccx }) => {
  return (
    <div className='featured-projects flex-center-center content'>
      <Title title='Featured Projects' sub='Some Of Our Works' />
      <div className="gay-grid">
        {
          ccx && 
          ccx.slice(0, 4).map((project, i) => {
            return (
              <Project id={project.id - 1} imgSrc={project.banner_url} title={project.name}  type={project.type} status={project.status} key={i}/>
            )
          })
        }
      </div>
      <Link className="default-button" to='/projects'>View All Project</Link>
    </div>
  )
}

export default FeaturedProjects