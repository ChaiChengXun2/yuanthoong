import React from 'react';
import "./point.css";

const Point = ({ value }) => {
  return (
    <div className='point default-text'><span>-</span>{value}</div>
  )
}

export default Point