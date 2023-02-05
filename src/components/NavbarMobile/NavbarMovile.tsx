import Link from 'next/link';
import React from 'react'
import './NavbarMovile.scss'

import { RiHome6Line ,
    RiLayoutGridLine, 
    RiChatVoiceLine ,
    RiMessage2Line,
    RiGithubLine,
    RiGoogleLine,
    RiLinkedinBoxLine,
    RiInstagramLine, 
    RiFacebookCircleLine } from "react-icons/ri";

function NavbarMovile() {
    const pathNames =  [ { 
        path : "/",
        name : "Home",
        icon : <RiHome6Line />
    },
    {
        path : "/proyectos",
        name : "Proyectos",
        icon : <RiLayoutGridLine />
    },
    {
        path : "/blog",
        name : "Blog",
        icon : <RiChatVoiceLine />
    },
    {
        path : "/contacto",
        name : "Contacto",
        icon : <RiMessage2Line />
  }]
  return (
        <nav className='navbar2'>
        <ul className='navbar2-container2'>
            {
                pathNames.map(ruta =>(
                    <li className='navbar2-link2' key={ruta.name + "003"}>
                        <Link href={ruta.path}>{ruta.icon}</Link>
                    </li>
                    
                ))
            }
        </ul>
    </nav>
  )
}

export default NavbarMovile