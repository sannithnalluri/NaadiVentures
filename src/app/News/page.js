import React from 'react';
import './Founders.Module.css';
import Navmanger from '../GlobalComponents/Navmanger';
import image1 from "../Assests/gridimage1.png"
import Image from 'next/image';
import OrangeFooter from '../GlobalComponents/OrangeFooter';
import NewVector from "../Assests/NewsVector.svg";
import founderimages from "../Assests/founderimages.png";


export default function Page() {
  const items = [
    { image: image1, title: 'Title 1', description: 'Hyderabad’s green groups will monitor United Nations’ COP-26 conference 1' },
    {  image: image1, title: 'Title 2', description: 'Hyderabad’s green groups will monitor United Nations’ COP-26 conference 2' },
    {  image: image1 , title: 'Title 3', description: 'Humanity First: How These Volunteers Are Saving Lives By Connecting Covid Patients With Plasma Donors 3' },
    {  image: image1, title: 'Title 4', description: 'Humanity First: How These Volunteers Are Saving Lives By Connecting Covid Patients With Plasma Donors 4' },
    {  image: image1, title: 'Title 5', description: 'Description 5' },
    {  image: image1, title: 'Title 6', description: 'Description 6' },
  ];


  return (
    <div className='FoundersPage'>
      <Image src={NewVector} className='newsVector'/>
      <Navmanger />
      <div className='Grid'>
        <div className='new_button'>
          <h1>News</h1>
        </div>
        <h1>Founders News</h1>
        <div className='gridContainer'>
          {items.map((item, index) => (
            <div key={index} className='card'>
              <Image src={image1} alt={item.title} className='image' />
              <div className='content'>
                <h3 className='title'>FOUNDER NEWS</h3>
                <p className='description'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="founder_news-container">
      <div className="heading">
      <h3>Founder News</h3>
      </div>
      <div className="founder-image-container">
        <div className="founder-section">
          <Image src={founderimages}/>
          <h4>INDUSTRI NEWS</h4>
          <p>3-day boot camp completed</p>
        </div>
        <div className="founder-section">
          <Image src={founderimages}/>
          <h4>INDUSTRI NEWS</h4>
          <p>3-day boot camp completed</p>
        </div>
        <div className="founder-section">
          <Image src={founderimages}/>
          <h4>INDUSTRI NEWS</h4>
          <p>3-day boot camp completed</p>
        </div>
      </div>
    </div>
      </div>
      <OrangeFooter/>
    </div>
  );
}
