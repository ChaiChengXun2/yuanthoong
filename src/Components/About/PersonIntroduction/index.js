import React from 'react';
import "./personintroduction.css";

const PersonIntroduction = ({ position, name, role, description }) => {
  return (
    <div className={`person-introduction flex-center-around ${position ? "even" : "odd"}`}>
      <img src="picture.jpg" alt="person" />
      <div className="information flex-center-center">
        <div className="name default-title">{name}</div>
        <div className="role default-text">{role}</div>
        <div className="details default-text">{description}</div>
      </div>
    </div>
  )
}

export default PersonIntroduction