import React, { useCallback } from 'react';
import Title from '../../Title';
import "./aboutshort.css";
import "./responsive.css";

const AboutShort = () => {

  const calculateYear = useCallback((start, end) => {
    return end - start
  }, [])

  return (
    <div className='short-about flex-center-center content'>
      <Title title='YuanThoong' sub='Construction and Renovation'/>
      <div className="information default-text">
        Founded in 2007, YuanThoong began as a general works contractor. Powered by a diverse and skilled staff, we specialise in a wide range of construction and renovation works. Over the years, we have undertaken many challenges and accumulated skills, knowledge and experiences in project management and constructing solutions. 
        <br /><br />
        After {calculateYear(2007, new Date().getFullYear())} years, YuanThoong takes on a combination of roles, including main-contractor and sub-contractor for industrial or commercial projects under CIDB G6 category. With over {calculateYear(2007, new Date().getFullYear())} years of experience in the industry, our practical construction skills have provided us with the fundamentals to deliver renovation as a service. Today, we have built a reputable name for ourselves in the construction and renovation market.
        <br /><br />
        Our philosophy is simple. We are eager to communicate with stakeholders in order to provide reliable and satisfying services. Throughout the project, we will supervise closely on the quality of work done, to make sure it will be completed on time. Your objectives are our top priority and we will make sure that the final product will meet your expectations.
      </div>
    </div>
  )
}

export default AboutShort