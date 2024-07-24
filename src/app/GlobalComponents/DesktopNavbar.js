import Image from 'next/image'
import React from 'react'
import "./Desktop.Module.css";

export default function DesktopNavbar() {
  return (
    <div>
        <nav className='nav-container'>
            <div className='logo container'>
                <Image src={require("../Assests/mainlogo.png")} alt='mainlogo'/>
            </div>
            <div className='nav-links'>
                <ul>
                    <li><a>Portfolio</a></li>
                    <li><a>OurFocus</a></li>
                    <li><a>Founders</a></li>
                    <li><a>Investors</a></li>
                    <li><a>Team</a></li>
                    <li><a>News</a></li>
                </ul>
                <button className='contact-button' >
                    ContactUs
                </button>
            </div>
        </nav>

    </div>
  )
}
