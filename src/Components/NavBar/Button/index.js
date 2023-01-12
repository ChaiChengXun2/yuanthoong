import React from 'react';
import "./button.css";
import { NavLink } from 'react-router-dom';

const Button = ({ name, link }) => {
  return (
    <NavLink className="button default-text" to={`/${link}`}>{name}</NavLink>
  )
}

export default Button