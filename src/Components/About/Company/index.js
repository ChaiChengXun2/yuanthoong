import React from 'react';
import "./company.css";

const Company = () => {
  return (
    <div className='high flex-center-center'>
      <div className="portrait-container flex-center-center">
        <img src="logo.PNG" alt="YuanThoong Logo" />
      </div>
      <div className="information flex-center-center">
        <div className="name default-title">YuanThoong</div>
        <div className="des default-text">Construction & Renovation</div>
        <div className="details default-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
    </div>
  )
}

export default Company