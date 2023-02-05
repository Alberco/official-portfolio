'use client'
import React, { useState } from 'react'
import { Proyecto } from '../page'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Image, { StaticImageData } from "next/image";
import { RiCloseFill } from "react-icons/ri";

interface Props {
    data: Proyecto[]
}

interface ModalProyect {
  name: string,
  imagen?: StaticImageData | string
  repositorio?: string
  web?: string 
}

function Card({data}:Props){

  const [modal,setModal] = useState(true)
  const [proyecto,setProyecto] = useState<ModalProyect>({
    name: "string",
    imagen: undefined,
    repositorio: undefined,
    web:undefined
  })


  const handlerModals = (name:string,imagen:StaticImageData | undefined,repositorio:string = "",web:string="") => {
    setProyecto({...proyecto,name,imagen,repositorio,web})
    setModal(!modal)
  }
  const handlerModal = () => {
    setModal(!modal)
  }
  return (
    <div className='proyectos-bloque'>
        {
            data.map(item => (
              <div className="proyectos-bloque-card" key={item.id} onClick={()=>handlerModals(item.name,item.imagen,item.repositorio,item.web)}>
                <p>{item.name}</p>
                <ul>
                    {
                      item.lenguajes.map(lista =>(
                        <li key={lista + "dsfdf2"}>{lista}</li>
                        ))
                      }
                </ul>
                {  item.imagen && <Image src={item.imagen} className="proyectos-bloque-imagen"  alt="fondo1" width={300} height={400} /> }
                <IoArrowForwardCircleOutline className='proyectos-bloque-icon' />
              </div>
            ))
        }
        {
          modal ? (<></>) : (
            <div className='proyectos-bloque-modal'>
            {
              <div className='proyectos-bloque-modal-contenido'>
                <button className='proyectos-bloque-modal-icon' onClick={handlerModal}>
                  <RiCloseFill />
                </button>
                <p className='proyectos-bloque-modal-title' >{proyecto.name}</p>
                {  proyecto.imagen && <Image src={proyecto.imagen}  className="proyectos-bloque-modal-imagen"  alt="fondo1" width={600} height={600} /> }
                <div className='proyectos-bloque-modal-buttons'>
                    {  proyecto.web && <a href={proyecto.web} target="_blank">Web</a>}
                    {  proyecto.repositorio && <a href={proyecto.repositorio} target="_blank">Repositorio</a> }
                </div>
              </div>
            }
          </div>
          )
        }
    </div>
  )
}

export default Card