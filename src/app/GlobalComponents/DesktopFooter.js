import Image from 'next/image'
import React from 'react';

export default function DesktopFooter() {
  return (
    <div className='Desktop-Footer'>
        <div className='footer-logo-container'>
            <Image src={require("../Assests/mainlogo.png")}/>
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
            <Image src={require("../Assests/Close.png")}/>
            <Image src={require("../Assests/Close.png")}/>
            <Image src={require("../Assests/Close.png")}/>
        </div>
    </div>

  )
}
