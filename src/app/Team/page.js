import React from 'react'
import Navmanger from '../GlobalComponents/Navmanger'
import OrangeFooter from '../GlobalComponents/OrangeFooter'
import"./Team.Module.css";
import Image from 'next/image';
import github from "../Assests/Vector-3.svg";
import instagram from "../Assests/Vector-2.svg";
import facebook from "../Assests/Vector.svg";
import twitter from "../Assests/Vector-1.svg";
import founder1 from "../Assests/founder1.png";
import founder2 from "../Assests/founder2.png";
import founder3 from "../Assests/founder3.png";
import vector from "../Assests/TeamsVector.png";

export default function page() {
  return (
    <div className='Team-page'>
        <Navmanger/>
        <div className='Teams'>
            <div className='tema-tag'>
                    <h3>Team</h3>
            </div>
            <h2>Our Team</h2>
            <div className='Teams-Container'>
                <div className='Team-member-Container'>
                        <Image src={founder1}/>
                    <div className='Text-Container'>
                        <h1>Vikas Katragadda</h1>
                        <h3>Co-Founder and Operating Partner</h3>
                        <ul>
                            <li><a><Image src={github}/></a></li>
                            <li><a><Image src={instagram}/></a></li>
                            <li><a><Image src={twitter}/></a></li>
                            <li><a><Image src={facebook}/></a></li>
                        </ul>
                    </div>
                </div>
                <div className='Team-member-Container'>
                        <Image src={founder2}/>
                    <div className='Text-Container'>
                        <h1>Vikas Katragadda</h1>
                        <h3>Co-Founder and Operating Partner</h3>
                        <ul>
                            <li><a><Image src={github}/></a></li>
                            <li><a><Image src={instagram}/></a></li>
                            <li><a><Image src={twitter}/></a></li>
                            <li><a><Image src={facebook}/></a></li>
                        </ul>
                    </div>
                </div>
                <div className='Team-member-Container'>
                        <Image src={founder3}/>
                    <div className='Text-Container'>
                        <h1>Vikas Katragadda</h1>
                        <h3>Co-Founder and Operating Partner</h3>
                        <ul>
                            <li><a><Image src={github}/></a></li>
                            <li><a><Image src={instagram}/></a></li>
                            <li><a><Image src={twitter}/></a></li>
                            <li><a><Image src={facebook}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <h2>Advisor</h2>
           
            <div className='Teams-Container2'>
                <div className='Team-member-Container'>
                        <Image src={founder1}/>
                    <div className='Text-Container'>
                        <h1>Vikas Katragadda</h1>
                        <h3>Co-Founder and Operating Partner</h3>
                        <ul>
                            <li><a><Image src={github}/></a></li>
                            <li><a><Image src={instagram}/></a></li>
                            <li><a><Image src={twitter}/></a></li>
                            <li><a><Image src={facebook}/></a></li>
                        </ul>
                    </div>
                </div>
                <div className='Team-member-Container'>
                        <Image src={founder2}/>
                    <div className='Text-Container'>
                        <h1>Vikas Katragadda</h1>
                        <h3>Co-Founder and Operating Partner</h3>
                        <ul>
                            <li><a><Image src={github}/></a></li>
                            <li><a><Image src={instagram}/></a></li>
                            <li><a><Image src={twitter}/></a></li>
                            <li><a><Image src={facebook}/></a></li>
                        </ul>
                    </div>
                </div>
                <div className='Team-member-Container'>
                        <Image src={founder3}/>
                    <div className='Text-Container'>
                        <h1>Vikas Katragadda</h1>
                        <h3>Co-Founder and Operating Partner</h3>
                        <ul>
                            <li><a><Image src={github}/></a></li>
                            <li><a><Image src={instagram}/></a></li>
                            <li><a><Image src={twitter}/></a></li>
                            <li><a><Image src={facebook}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='Vecotor'>
                <Image src={vector}/>
            </div>
        </div>
        <div className='TeamsFooter'>
        <OrangeFooter/>
        </div>
    </div>
  )
}
