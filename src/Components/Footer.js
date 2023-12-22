import React from 'react'
import './Footer.css'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='Footer'>
      <div className='left'>
        <label className='contact'>Contact Here</label>
        <div className='home'>
      <FaHome/>
      <label>Sargodha , Pakistan</label>
        </div>
        <div className='phone'>
      <FaPhone/>
      <label>+923186157770</label>
        </div>
      <div className='mail'>
      <FaMailBulk/>
      <label>warismuhammad652@gmail.com</label>
      </div>
    </div>
      <div className='right'>
        <h1>About the company </h1>
        <span>This is me Waris .I am freelancer . I enjoy discussing new projects and design chellenges</span>
        <br></br>
       <div className='social'>
          <FaFacebook/>
          <FaTwitter/>
          <FaLinkedin/>
       </div>
        
      </div>
        </div>
  )
}

export default Footer;