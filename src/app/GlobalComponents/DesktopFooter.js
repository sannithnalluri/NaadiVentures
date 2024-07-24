import Image from 'next/image'
import React from 'react';

export default function DesktopFooter() {
  return (
    <div className='Desktop-Footer'>
        <div className='footer-logo-container'>
            <Image src={require("../Assests/mainlogo.png")} alt='logo'/>
        </div>
        <div className='footer-nav-links'>
            <ul>
                <li><a>Products</a></li>
                <li><a>Products</a></li>
                <li><a>Products</a></li>
                <li><a>Products</a></li>
                <li><a>Products</a></li>
                <li><a>Products</a></li>
            </ul>
        </div>
        <div className='footer-social-links'>
            <Image src={require("../Assests/Close.png")} alt='close png'/>
            <Image src={require("../Assests/Close.png")} alt='instagram'/>
            <Image src={require("../Assests/Close.png")} alt='linkedin'/>
        </div>
    </div>

  )
}
