import React, { useState } from 'react';
import "./navigationbar.css";
import "./responsive.css";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBar from './NavBar';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='flex-center-between navigation-bar'>
      <NavLink className="brand default-text flex-center-center" to='/'><img src="logo.PNG" alt="YuanThoong Logo" /></NavLink>
      <div className="hamburger" onClick={() => setOpenMenu(true)}><GiHamburgerMenu /></div>
      <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </nav>
  )
}

export default NavigationBar