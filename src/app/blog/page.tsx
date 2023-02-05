'use client';

import React from 'react'
import './blog.scss'
import { RxArrowRight } from "react-icons/rx";
import { useRouter } from 'next/navigation';

function blog() {

  const blogTitle = [
    "Herramientas-para-mejorar-tu-productividad-con-CSS",
    "Optimizar-imagenes-para-utilizar-en-al-web",
    "Como-usar-fetch-SSR-y-CSR"];
  const router = useRouter();

  const handlerUrlBlog = (name:string) => {
    router.push(`/blog/${name}`)
  }

  return (
    <section className='blogs'>
      <h2 className='blogs-title'>Blog</h2> 
      <ul className='blogs-content'>
        {
          blogTitle.map((title) => (
            <li className='blogs-content-contenedor' onClick={() => handlerUrlBlog(title)}>
              <a className='blogs-content-title'>{title.replaceAll("-"," ")}</a>
              <span className='blogs-content-icon'><RxArrowRight /></span>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default blog