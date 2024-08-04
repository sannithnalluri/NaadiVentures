import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

export default function OrangeFooter() {
  return (
    <div className='Orange-Footer'>
        <div className='footer-logo-container'>
            <Image src={require("../Assests/BlackLogo.png")} alt='logo'/>
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
            <Image src={require("../Assests/Twitter.svg")} alt='twitter'/>
            <Image src={require("../Assests/Facebook.svg")} alt='facebook'/>
            <Image src={require("../Assests/Instagram.svg")} alt='instagram'/>
            <Image src={require("../Assests/Github.svg")} alt='github'/>
        </div>
    </div>

  )
}
