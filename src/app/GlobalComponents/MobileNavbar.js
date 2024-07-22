import Image from 'next/image'
import React, { useState } from 'react'
import "./MobileNav.Module.css";

export default function DesktopNavbar() {
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    return (
        <div>
            <nav className={`mobile-container ${isMenuClicked ? 'is-menu-clicked' : ''}`}>
                <div className='mobile-logo-container'>
                    <Image src={require("../Assests/mainlogo.png")} alt="Main Logo" />
                </div>
                <div onClick={() => setIsMenuClicked(!isMenuClicked)}>
                    {isMenuClicked ?
                        <Image src={require('../Assests/Close.png')} width={50} height={50} alt="Close Menu" /> :
                        <Image src={require('../Assests/Menu.png')} width={50} height={50} alt="Open Menu" />
                    }
                </div>
                {isMenuClicked && (
                    <div className='mobile-nav-links'>
                        <ul>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#ourfocus">Our Focus</a></li>
                            <li><a href="#founders">Founders</a></li>
                            <li><a href="#investors">Investors</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#news">News</a></li>
                        </ul>
                        <button className='moblie-contact-button'>
                            Contact Us
                        </button>
                    </div>
                )}
            </nav>
        </div>
    );
}
