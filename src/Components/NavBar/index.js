import React from 'react';
import "./navbar.css";
import Button from './Button';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='flex-center-between'>
      <NavLink className="home" to='/'><img src="logo.PNG" alt="YuanThoong Logo" /></NavLink>
      <div className="buttons flex-center-between">
        <Button name="Project" link='projects'/>
        <Button name="About" link='about'/>
        <Button name="Contact" link='projects'/> 
      </div>
    </nav>
  )
}

export default NavBar