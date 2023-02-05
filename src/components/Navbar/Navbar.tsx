import Link from 'next/link'
import React from 'react'
import { RiHome6Line ,
         RiLayoutGridLine, 
         RiChatVoiceLine ,
         RiMessage2Line,
         RiGithubLine,
         RiLinkedinBoxLine,
         RiInstagramLine, 
         RiFacebookCircleLine } from "react-icons/ri";
import icon from './logo2.png'
import './navbar.scss'
import Image from 'next/image';

function Navbar() {

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
  const redes = [
    {"name":"Github",icon:<RiGithubLine />,url:"https://github.com/Alberco"},
    {"name":"Linkedin",icon:<RiLinkedinBoxLine />,url:"https://pe.linkedin.com/in/guillermo-alberco-capistrano-43909b156"},
    {"name":"Instangran",icon:<RiInstagramLine />,url:"https://www.instagram.com/guillermoalberco/"},
    {"name":"Facebook",icon:<RiFacebookCircleLine />,url:"https://www.facebook.com/guillermo.alberco"},
  ]

  return (
    <nav className='navbar'>
        <ul className='navbar-container'>
            <li>
                <Link href={"/"}>
                    <Image className='navbar-logo' src={icon} width={50} height={50} alt="icon gundam" priority />
                </Link>
            </li>
        </ul>
        <ul className='navbar-container'>
            {
                pathNames.map(ruta =>(
                    <li className='navbar-link' key={ruta.name + "003"}>
                        <Link href={ruta.path}>{ruta.icon}</Link>
                    </li>
                    
                ))
            }
        </ul>
        <ul className='navbar-container'>
            {
                redes.map(sociales =>(
                    <a href={sociales.url}  className='navbar-link' key={sociales.name + "002"} target="_blank">
                        {sociales.icon}
                    </a>
                ))
            }
        </ul>
    </nav>
  )
}

export default Navbar