import React from 'react';
import "./partners.css";
import "./responsive.css";

const Partners = () => {
  return (
    <div className='partners flex-center-center content'>
      <div className="top default-text">Collaborated With</div>
      <div className="slider">
        <div className="slider-track">
          <img className='slide' src="https://ik.imagekit.io/yuanthoong/Aneka_Jaringan.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1673525342579" alt="Aneka Jaringan Holdings - Construction Engineering Company" />
          <img className='slide' src="https://ik.imagekit.io/yuanthoong/Dian_Makmur.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1673525339848" alt="Dian Makmur SDN BHD" />
          <img className='slide' src="https://ik.imagekit.io/yuanthoong/MCT_Logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673525341538" alt="MCT Berhad - Engineering Service Company" />
          <img className='slide' src="https://ik.imagekit.io/yuanthoong/performax-logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673525339764" alt="Performax SDN BHD - Timur Kaya SDN BHD" />
          <img className='slide' src="https://ik.imagekit.io/yuanthoong/siab.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673525342315" alt="Siab Holdings Berhad" />
          <img className='slide' src="https://ik.imagekit.io/yuanthoong/Sin_Tian_Hoe.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1673525339965" alt="Sin Tian Hoe Construction SDN BHD - Construction Company in Subang Jaya" />
          <img className='slide' src="https://ik.imagekit.io/yuanthoong/TME.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1673525342684" alt="TME Builders SDN BHD - Construction Company in Kuala Lumpur" />
          <img className='slide' src="https://ik.imagekit.io/yuanthoong/Tuju_Setia.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1673525339967" alt="Tuju Setia BHD - Construction Engineering Company" /> 
        </div>
      </div>
      <div className="bottom default-text">In The Past</div>
    </div>
  )
}

export default Partners