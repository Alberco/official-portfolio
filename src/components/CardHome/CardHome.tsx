import React from 'react'
import { RiArrowDownCircleLine } from 'react-icons/ri'
import './card.scss'


function CardHome() {
  
 const cardInformation = [
    {codigo:"card-uno", name:"Backend"},
    {codigo:"card-dos", name:"Frontend"},
    {codigo:"card-tres", name:"BD"},
 ]
  return (
    <>
    {
        cardInformation.map((item) => (
            <div className={`card card-container ${item.codigo}`} key={item.name + "004"} >
                <p className='card-title'>{item.name}</p>
                <RiArrowDownCircleLine  className='card-icon icon-arrow' />
            </div>
        ))
    }
    </>
  )
}

export default CardHome