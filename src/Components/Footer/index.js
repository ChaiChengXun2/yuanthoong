import React from 'react';
import "./footer.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsInstagram, BsWhatsapp, BsFacebook } from "react-icons/bs";
import "./responsive.css";

const Footer = () => {
  return (
    <div className='contact flex-center-center content'>
      <div className="contact-me flex-center-center">
        <div className="default-text">Interested In Our Services?</div>
        <a className="default-button flex-center-center" href='https://wa.me/60126989326' rel="noreferrer" target='_blank'><BsWhatsapp />Contact Us</a>
      </div>
      <footer className='flex-center-center'>
        <div className='social-media flex-center-center'>
          <a href='https://www.instagram.com/comsitemy/' rel="noreferrer" target="_blank"><BsInstagram /></a>
          <a href='https://wa.me/60126989326' rel="noreferrer" target="_blank"><BsWhatsapp /></a>
          <a href='https://www.facebook.com/profile.php?id=100088453232965' rel="noreferrer" target="_blank"><BsFacebook /></a>
        </div>
        <div className='text flex-center-center'><AiOutlineCopyrightCircle /> Copyright 2022 YuanThoong. All Rights Reserved</div>
      </footer>
    </div>
  )
}

export default Footer