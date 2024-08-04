import Image from 'next/image'
import React from 'react'
import "./Desktop.Module.css";
import Link from 'next/link';
import mainlogo from "../Assests/mainlogo.png";

export default function DesktopNavbar() {
  return (
    <div>
        <nav className='nav-container'>
            <div className='logo container'>
                <Image src={mainlogo} alt='mainlogo'/>
            </div>
            <div className='nav-links'>
                <ul>
                <li><Link href='/'>Portfolio</Link></li>
                <li><Link href='/OurFocus'>OurFocus</Link></li>
                <li><Link href='/Founders'>Founders</Link></li>
                <li><Link href='/Investors'>Investors</Link></li>
                <li><Link href='/Team'>Team</Link></li>
                <li><Link href='/News'>News</Link></li>
                </ul>
                <button className='contact-button' >
                    <Link href='/Contact'>
                    ContactUs
                    </Link>
                </button>
            </div>
        </nav>

    </div>
  )
}
