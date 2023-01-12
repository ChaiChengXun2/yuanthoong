import React, { useEffect } from 'react'
import AboutShort from './AboutShort'
import LandingPage from './LandingPage'
import Partners from './Partners'
import FeaturedProjects from "./FeaturedProjects";
import Footer from "../Footer";
import NavigationBar from "../NavigationBar";

const Homepage = ({ ccx }) => {

  useEffect(() => {
    document.title = "Yuan Thoong SDN BHD | Construction and Renovations";
  }, [])

  return (
    <>
      <NavigationBar />
      <LandingPage />
      <AboutShort />
      <Partners />
      <FeaturedProjects ccx={ccx}/>
      <Footer />
    </>
  )
}

export default Homepage