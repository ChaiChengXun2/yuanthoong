import React, { useEffect } from 'react';
import "./projectdetails.css";
import "./responsive.css";
import { useParams } from "react-router-dom";
import Highlight from './Highlight';
import { GoLocation, GoCalendar } from "react-icons/go";
import { GrGroup } from "react-icons/gr";
import Point from "./Point";
import BackTab from "../BackTab";
import Footer from "../Footer";

const ProjectDetails = ({ ccx }) => {
  const { id } = useParams();

  useEffect(() => {
    if (ccx) {
      document.title = `${ccx[id].name} | Yuan Thoong SDN BHD`;
    } else {
      document.title = "An Error Has Occured"
    }
  }, [ccx, id])

  return (
    ccx[id]
    ? <div className="container flex-center-center content">
        <BackTab />
        <div className="project-details flex-start-center">
          <div className="image-container flex-center-start">
            <img src={ccx[id].banner_url} alt={`${ccx[id].name} Banner`} className='banner'/>
            <div className='flex-center-between'>
              <img src={ccx[id].image_one} alt={`First Representation of ${ccx[id].name}`} className='image'/>
              <img src={ccx[id].image_two} alt={`Second Representation of ${ccx[id].name}`} className='image'/>
              <img src={ccx[id].image_three} alt={`Third Representation of ${ccx[id].name}`} className='image'/>
            </div>
          </div>
          <div className="information flex-start-center">
            <div className="header">
              <div className="name default-title name">{ccx[id].name}</div>
              <div className="name default-text partner">Partered with <span>{ccx[id].partner}</span></div>
              <Highlight icon={<GoLocation />} value={ccx[id].location}/>
              <Highlight icon={<GoCalendar />} value={ccx[id].duration}/>
              <Highlight icon={<GrGroup />} value={ccx[id].workforce}/>
            </div>
            <div className="details default-text">
              <div className="information-header default-title">Overview</div>
              <div className="overview-information default-text">{ccx[id].overview}</div>
            </div>
            <div className="details default-title">
              <div className="information-header">What We Are Responsible For</div>
              <div className="points">
                {
                  JSON.parse(ccx[id].responsible).responsible && 
                  JSON.parse(ccx[id].responsible).responsible.map((item, i) => {
                    return (<Point value={item} key={i} />)
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    : "An error has occured"
  )
}

export default ProjectDetails