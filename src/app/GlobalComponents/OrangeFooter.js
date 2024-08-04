import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

import twitter from "../Assests/Twitter.svg";
import facebook from "../Assests/Facebook.svg";
import instagram from "../Assests/Instagram.svg";
import github from "../Assests/GitHub.svg";
import BlackLogo from "../Assests/BlackLogo.png";

export default function OrangeFooter() {
  return (
    <div className='Orange-Footer'>
        <div className='footer-logo-container'>
            <Image src={BlackLogo} alt='logo'/>
        </div>
        <div className='footer-nav-links'>
            <ul>
                <li><Link href='/'>Portfolio</Link></li>
                <li><Link href='/OurFocus'>OurFocus</Link></li>
                <li><Link href='/Founders'>Founders</Link></li>
                <li><Link href='/Investors'>Investors</Link></li>
                <li><Link href='/Team'>Team</Link></li>
                <li><Link href='/News'>News</Link></li>
            </ul>
        </div>
        <div className='footer-social-links'>
            <Image src={twitter} alt='twitter'/>
            <Image src={facebook} alt='facebook'/>
            <Image src={instagram} alt='instagram'/>
            <Image src={github} alt='github'/>
        </div>
    </div>

  )
}
