import React from 'react';
import "./highlight.css";

const Highlight = ({ icon, value }) => {
  return (
    <div className="default-text highlight flex-center-start">{icon}{value}</div>
  )
}

export default Highlight