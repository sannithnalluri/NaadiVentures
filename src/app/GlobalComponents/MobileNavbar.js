import Image from 'next/image'
import React, { useState } from 'react'
import "./MobileNav.Module.css";
import Link from 'next/link';
import mainlogo from "../Assests/mainlogo.png";


export default function DesktopNavbar() {
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    return (
        <div>
            <nav className={`mobile-container ${isMenuClicked ? 'is-menu-clicked' : ''}`}>
                <div className='mobile-logo-container'>
                    <Image src={mainlogo} alt="Main Logo" />
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
                <li><Link href='/'>Portfolio</Link></li>
                <li><Link href='/OurFocus'>OurFocus</Link></li>
                <li><Link href='/Founders'>Founders</Link></li>
                <li><Link href='/Investors'>Investors</Link></li>
                <li><Link href='/Team'>Team</Link></li>
                <li><Link href='/News'>News</Link></li>
                        </ul>
                        <button className='moblie-contact-button'>
                          <Link href="/Contact">Contact Us</Link> 
                        </button>
                    </div>
                )}
            </nav>
        </div>
    );
}
