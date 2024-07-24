import React from 'react';
import "./home.Module.css"
import Navmanger from '../GlobalComponents/Navmanger';
import Image from 'next/image';
import DesktopFooter from '../GlobalComponents/DesktopFooter';

export default function Hompage() {
  return (
    <div>
    <div className='herosection'>
    <Navmanger/>
    <h1>
        We Invest in Resilient  <span class="highlight">Founders Working</span> on Sustainable Impact
    </h1>
<p>Our mission at Naandi Ventures is to back resilient founders on their transformative journey towards greatness. We understand that entrepreneurship is a path paved with obstacles, and we’re here to provide the support, resources, and mentorship needed to help you navigate and conquer those challenges. Your vision is our inspiration, and together, we’ll forge a path to success .</p>

    <div className='hero-button'>
        <button className='button_1'>
            Invest with Naandi
        </button>
        <br/>
        <button className='button_2'>
          Become a Naandi Founder
        </button>
    </div>
    <div className='hero-box'>
        <h1>India's Early Growth Ventures</h1>
    </div>
    <div className='black-section'>
        <div className='section-content'>
            <h1>Who We Are</h1>
            <p>We are a dedicated team of BITS Pilani and Kellogg
                 School of Management alumni, driven by our passion for
                entrepreneurship. At Naandi Ventures, we specialize in 
                nurturing and supporting early-stage startups primarily
                within the Indian market, with a strong focus on the Technology,
                Food & Beverage, Education, and Social Impact sectors.</p>
            <button>
                Read More
            </button>
        </div>

        <div className='assest1'>
                    <Image src={require("../Assests/assest-1.jpeg")} 
                    alt="Picture of the author"/>
        </div>
    </div>
    <div className='vector'>
    <Image src={require("../Assests/orangevector.png")} alt='vector-Image'
     />
    </div>
    <div className='black-section'>
        <div className='black-section-inside'>

        <div className='assest2'>
            <Image src={require("../Assests/assest-2.png")} alt="Picture of the assest"/>
        </div>
        
        <div className='section-content2'>
            <h1>Who We Are</h1>
            <p>We are a dedicated team of BITS Pilani and Kellogg
                 School of Management alumni, driven by our passion for
                entrepreneurship. At Naandi Ventures, we specialize in 
                nurturing and supporting early-stage startups primarily
                within the Indian market, with a strong focus on the Technology,
                Food & Beverage, Education, and Social Impact sectors.</p>
            <button>
                Read More
            </button>
        </div>
        </div>
        
    </div>
    <div className='section-3'>
    </div>

    <div className='section-4'>
        <h1>Where Do We Get Our Startups from?</h1>
        <div className='service'>
            <div className='service-component'>
                <div className='image-component'>
                    <Image src={require("../Assests/company.png")} alt='university png'/>
                    <h4>University Connectt</h4>
                </div>
                <hr className='vertical-line'/>
            </div>
            <div className='service-component'>
                <div className='image-component'>
                    <Image src={require("../Assests/company.png")} alt='women png'/>
                    <h4>Women and Minority</h4>
                </div>
                <hr className='vertical-line'/>
            </div>
            <div className='service-component'>
                <div className='image-component'>
                    <Image src={require("../Assests/company.png")} alt='Incubator png'/>
                    <h4>Incubator Connect</h4>
                </div>
                <hr className='vertical-line'/>
            </div>
            <div className='service-component'>
                <div className='image-component'>
                    <Image src={require("../Assests/company.png")} alt='Global'/>
                    <h4>Global <br/> Connect</h4>
                </div>
                <hr className='vertical-line'/>
            </div>
            <div className='service-component'>
                <div className='image-component'>
                    <Image src={require("../Assests/company.png")} alt='Smb'/>
                    <h4>SMB <br/>Connect</h4>
                </div>
              
            </div>
        </div>
    </div>

    <div className='Section-5'>
        <h2>Where Do We Get Our Startups from?</h2>
        <div className='Service-section-2'>
            <div className='service-container'>
                <h3>01</h3>
                <span>We are focus on driving Sustainable and Scalable Impact</span>
            </div>
            <div className='service-container'>
                <h3>02</h3>
                <span>We are focus on driving Sustainable and Scalable Impact</span>
            </div>
            <div className='service-container'>
                <h3>03</h3>
                <span>We are focus on driving Sustainable and Scalable Impact</span>
            </div>
            <div className='service-container'>
                <h3>04</h3>
                <span>We are focus on driving Sustainable and Scalable Impact</span>
            </div>
        </div>
       
        
    </div>
    <DesktopFooter/>
    </div>
    </div>
  )
}
