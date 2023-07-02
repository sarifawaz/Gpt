import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3_footer section_padding'>
      <div className='gpt3_footer-heading'>
        <h1 className='gradient_text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3_footer-btn'>
        <p>Reuest Only Access</p>
      </div>
      <div className='gpt3_footer-links'>
        <div className='gpt3_footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Created by Sari, Practising ReactJs.</p>
        </div>
        <div className='gpt3_footer-links_div'>
          <h4>Links</h4>
          <p>Links</p>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3_footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3_footer-links_div'>
          <h4>Get in Touch</h4>
          <p>Created by...</p>
          <p>+6894548</p>
          <p>info@info.net.com</p>
        </div>
      </div>
      <div className='gpt3_footer-copyright'>
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer