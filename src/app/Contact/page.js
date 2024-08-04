import React from 'react'
import Navmanger from '../GlobalComponents/Navmanger'
import "./Contact.Module.css"
import Image from 'next/image'
import OrangeFooter from '../GlobalComponents/OrangeFooter'
export default function page() {
  return (
    <div className='ContactPage'>
      <Navmanger/>
      <div className='Main_Section'>
            <button>
              Contact 
            </button>

            <h2>Contact Us</h2>
            <p>Nandi venture is a globally recognized company
              that help the bright minds with great ideas connect
              with the investors and provide them support that they need
              to built a successful bussiness.
            </p>
      </div>


  <div className='contact-section'>
      <div class="contact-info">
                <h2>Contact Us</h2>
                <ul>
                    <li><i class="fas fa-envelope"></i> info@example.com</li>
                    <li><i class="fas fa-phone"></i> 001985512-854</li>
                    <li><i class="fas fa-map-marker-alt"></i> Adam atom 123 Main Street xxxxxxxxxx, NH 1000 India</li>
                </ul>
                <h3>Social</h3>
                <div class="social">
                    <a href="#"><i class="fab fa-twitter"></i> @exampleAccount</a>
                    <a href="#"><i class="fab fa-facebook-f"></i> @exampleAccount</a>
                    <a href="#"><i class="fab fa-youtube"></i> @exampleAccount</a>
                    <a href="#"><i class="fab fa-vimeo-v"></i> @exampleAccount</a>
                    <a href="#"><i class="fab fa-instagram"></i> @exampleAccount</a>
                </div>
                <h3>Hours</h3>
                <p>Mon-Fri: 9:00 - 18:00</p>
                <p>Sat-Sun: Closed</p>
      </div>
            <div class="contact-form">
                <h2><b>Keep in touch</b></h2>
                <p>Naandi Ventures is a globally recognized company that helps the bright minds with great ideas connect with the investors and provide them support that they need to build a successful business.</p>
                <form className="form"action="#">
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="text" name="subject" placeholder="Subject"/>
                    <textarea name="message" placeholder="Your message here..."></textarea>
                    <button type="submit">Submit</button>
                </form>
    
        </div>
  </div>

<div className='contact-founder-container'>

  <div className="founder_news-container">
      <div className="heading">
      <h3>Founder News</h3>
      </div>
      <div className="founder-image-container">
        <div className="founder-section">
          <Image src={require('../Assests/founderimages.png')}/>
          <h4>INDUSTRI NEWS</h4>
          <p>3-day boot camp completed</p>
        </div>
        <div className="founder-section">
          <Image src={require('../Assests/founderimages.png')}/>
          <h4>INDUSTRI NEWS</h4>
          <p>3-day boot camp completed</p>
        </div>
        <div className="founder-section">
          <Image src={require('../Assests/founderimages.png')}/>
          <h4>INDUSTRI NEWS</h4>
          <p>3-day boot camp completed</p>
        </div>
      </div>
    </div>
</div>
    <OrangeFooter/>
</div>
  )
}
