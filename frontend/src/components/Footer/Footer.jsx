import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>We bring delicious meals to your doorstep with speed, care, and quality. Our platform connects hungry customers with trusted local restaurants. Enjoy fresh ingredients, fast delivery, and a seamless ordering experience. Built with modern technology to ensure your satisfaction, every time you order.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
              <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
              </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-253-938-3663</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
          
        </div>
        <hr></hr>
        <p className="footer-copyright">Copyright 2024 © Tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer