'use client';
import './blogPage.scss';
import React from 'react'
import { usePathname } from 'next/navigation';
import { RiDonutChartLine } from "react-icons/ri";

function blogName() {
    let segment = usePathname()
    let filtrado = segment?.substring(6).replaceAll("-"," ")

    const data = [
    {
        id:211234,
        title: "Herramientas para mejorar tu productividad con CSS",
        content: "Utilizar los recursos más apropiados es imprescindible para desarrollar con el mayor éxito cualquier página web. A continuación se describen varias herramientas útiles que conviene tener en cuenta a la hora de detectar errores en los desarrollos, mejorar la productividad y conseguir los mejores diseños.",
        content2: "Una vez que tu sitio web comience a crecer, tendrás que vigilar el código. A medida que el código se expande, el CSS puede llegar a ser, de repente, difícil de mantener, y usted puedes terminar sobrescribiendo una regla CSS con otra. Esto complica las cosas y probablemente vas a terminar con un montón de errores.",
        imgs: [`blog1.jpg`],
        list: [
            "https://uigarage.net/","https://www.cattocss.com/","https://www.cssgradienttext.com/",
            "https://www.java5cript.com/",
            "https://www.frontendpractice.com/",
            "https://hypercolor.dev/#gradients",
            "https://simpleicons.org/",
            "https://github.com/micromata/awesome-css-learning",
            "https://animista.net/play/entrances/swirl-in/swirl-in-left-fwd", 
            "https://javascript.info/custom-elements",
            "https://yellowlab.tools/",
            "https://startdesignsystem.com/resource-get-started", 
            "https://flukeout.github.io/#",
            "https://layout.bradwoods.io/",
            "https://www.svgator.com/help/getting-started/svgator-player-js-api",
            "https://unicornicons.com/icons",
            "https://hype4.academy/tools/glassmorphism-generator", 
            "https://easings.co/",  
            "https://projects.verou.me/animatable/#", 
            "https://randoma11y.com/",  
            "https://web.dev/learn/", 
            "https://caninclude.glitch.me/",
            "https://codepen.io/2022/popular/pens",
            "https://getwaves.io/",
            "https://bennettfeely.com/clippy/",
        ]
    },
    {
        id:2112341434423,
        title: "Optimizar imagenes para utilizar en al web",
        content: "TinyPNG utiliza técnicas inteligentes de compresión con pérdida para reducir el tamaño del archivo de sus archivos WEBP, JPEG y PNG. Al disminuir selectivamente el número de colores en la imagen, se requieren menos bytes para almacenar los datos. ¡El efecto es casi invisible, pero hace una gran diferencia en el tamaño del archivo!",
        content2: "PNG es útil porque es el único formato ampliamente compatible que puede almacenar imágenes parcialmente transparentes. El formato utiliza compresión, pero los archivos aún pueden ser grandes. Use TinyPNG para reducir las imágenes de sus aplicaciones y sitios. Utilizará menos ancho de banda y se cargará más rápido",
        imgs: [""],
        list: ["https://tinypng.com/"]
    },
    {
        id:21123412232323,
        title: "Como usar fetch SSR y CSR",
        content: "De forma predeterminada, Siguiente.js representa previamente cada página. Esto significa que Next.js genera HTML para cada página por adelantado, en lugar de que todo lo haga JavaScript del lado del cliente. El pre-renderizado puede resultar en un mejor rendimiento y SEO",
        content2:"Cada HTML generado está asociado con un código JavaScript mínimo necesario para esa página. Cuando el navegador carga una página, su código JavaScript se ejecuta y hace que la página sea totalmente interactiva. (Este proceso se llama hidratación)",
        imgs: [""],
        list: ["https://nextjs.org/docs/basic-features/pages#pre-rendering"],
    }
    ]

    const datablog = data.filter(item => item.title === filtrado)

  return (
    <section className='blogspage'>
        {
         datablog.map(item => (
            <div key={item.id + "007"}>
                <p className='blogspage-title'>{item.title}</p>
                <p className='blogspage-content'>{item.content}</p>
                {item.list && 
                (<ul className='listas'>
                    {item.list.map((lista) => (
                        <li key={lista.length + "3344"} className="listas-links">
                            <a href={`${lista}`} className="listas-hrf" target="_blank">{lista}</a>
                            <span><RiDonutChartLine className='listas-icon' /></span>
                        </li>
                    ))}
                </ul>)}
                <p className='blogspage-content'>{item.content2}</p>
            </div>
         ))
        }
    </section>
  )
}

export default blogName