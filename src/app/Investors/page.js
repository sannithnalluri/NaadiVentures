import React from 'react';
import Navmanger from '../GlobalComponents/Navmanger';
import "./Investor.Module.css";
import Image from 'next/image';
import mainlogo from "../Assests/mainlogo.png";
import InvestorVector from "../Assests/InvestorVector.svg";
import OrangeFooter from '../GlobalComponents/OrangeFooter';

export default function InvestorPage() {
  return (
    <div>
      <div className='Investor_hero_section'>
        <Navmanger />
        <div className='heading'>
          <div className='leftarrow'></div>
          <h1>Pitch To Us</h1>
          <div className='leftarrow'></div>
        </div>
        <h1>Naandi Prospective Company Investment Form</h1>
      </div>
      <div className='Investor_Form_Section'>
        <div className='Vector_section'>
          <Image src={mainlogo} className='main-logo' alt="Main Logo" />
          <Image src={InvestorVector} className='vector_image' alt="Investor Vector" />
        </div>
        <div className='Form_section'>
          <form className='contactForm'>
            <div className='row'>
              <div className='formGroup'>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName' name='firstName' required />
              </div>
              <div className='formGroup'>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' name='lastName' required />
              </div>
            </div>
            <div className='formGroup'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' required />
            </div>
            <div className='formGroup'>
              <label htmlFor='companyName'>Company Name</label>
              <input type='text' id='companyName' name='companyName' required />
            </div>
            <div className='formGroup'>
              <label htmlFor='companyLocation'>Company Location</label>
              <input type='text' id='companyLocation' name='companyLocation' required />
            </div>
            <div className='formGroup'>
              <label htmlFor='entityType'>Entity Type</label>
              <input type='text' id='entityType' name='entityType' required />
            </div>
            <div className='formGroup'>
              <label htmlFor='description'>Description</label>
              <textarea id='description' name='description' rows='4' required></textarea>
            </div>
            <div className='formGroup'>
              <label htmlFor='currentRevenue'>Current Revenue</label>
              <input type='text' id='currentRevenue' name='currentRevenue' required />
            </div>
            <div className='formGroup'>
              <label htmlFor='hearAboutUs'>Where did you hear about us?</label>
              <input type='text' id='hearAboutUs' name='hearAboutUs' required />
            </div>
            <div className='formGroup'>
              <label htmlFor='yourLocation'>Your Location</label>
              <input type='text' id='yourLocation' name='yourLocation' required />
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
      <OrangeFooter/>
    </div>
  );
}
