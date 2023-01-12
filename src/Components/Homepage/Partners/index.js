import React from 'react';
import "./partners.css";
import "./responsive.css";

const Partners = () => {
  return (
    <div className='partners flex-center-center content'>
      <div className="top default-text">Collaborated With</div>
      <div className="slider">
        <div className="slider-track">
          <img className='slide' src="Aneka Jaringan.PNG" alt="Aneka Jaringan" />
          <img className='slide' src="Dian Makmur.PNG" alt="Dian Makmur" />
          <img className='slide' src="MCT Logo.png" alt="MCT Logo" />
          <img className='slide' src="performax-logo.png" alt="Performax Logo" />
          <img className='slide' src="siab.png" alt="Siab Logo" />
          <img className='slide' src="Sin Tian Hoe.PNG" alt="Sin Tian Hoe" />
          <img className='slide' src="TME.PNG" alt="TME Builders" />
          <img className='slide' src="Tuju Setia.PNG" alt="Tuju Setia" /> 
        </div>
      </div>
      <div className="bottom default-text">In The Past</div>
    </div>
  )
}

export default Partners