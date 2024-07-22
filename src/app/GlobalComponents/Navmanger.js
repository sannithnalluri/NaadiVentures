"use client"
import React from 'react'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

export default function Navmanger() {
  return (
    <div>
        <div className='desktop'>
            <DesktopNavbar/>
        </div>
        <div className='Mobile'>
            <MobileNavbar/>
        </div>
    </div>
  )
}
