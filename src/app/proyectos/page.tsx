import './proyecto.scss';
import Image, { StaticImageData } from "next/image";
import fondo from './fondo13.jpg'
import captura1 from '../../../public/captura.png'
import captura2 from '../../../public/captura4.png'
import captura3 from '../../../public/captura5.png'
import captura4 from '../../../public/captura2.png'
import captura5 from '../../../public/captura3.png'
import captura6 from '../../../public/captura6.png'
import captura7 from '../../../public/captura7.png'
import captura8 from '../../../public/captura8.png'
import Card from './components/Card';


export interface Proyecto { 
  id: string
  name: string
  imagen?: StaticImageData
  alt: string
  lenguajes: Array<string>
  repositorio?: string
  web?: string 
}


async function proyectos() {

  const proyectos : Proyecto[] = [
    {"id":"sdsd22313",name:"Proyecto Manga",imagen:captura1,alt:"captura",lenguajes:["javascript","html","css"],web:"https://chipper-entremet-aa4328.netlify.app/"},
    {"id":"sdsd223433",name:"Valorant Web",imagen:captura2,alt:"captura2",lenguajes:["react","typescript","style-component"],web:"https://valorantapp.netlify.app/"},
    {"id":"sds321233433",name:"Jardineria Web",imagen:captura3,alt:"captura3",lenguajes:["react","javascript","css"],web:"https://jardineriapp.netlify.app/"},
    {"id":"sds323233",name:"Dashboard",imagen:captura4,alt:"captura4",lenguajes:["react","javascript","tailwind css"],web:"https://epic-one.vercel.app/"},
    {"id":"sd3232d3233",name:"Portafolio v1",imagen:captura5,alt:"captura5",lenguajes:["react","javascript","tailwind css"],web:"https://portafolioalberco.netlify.app/"},
    {"id":"sd3232d1233233",name:"Shopping List",imagen:captura6,alt:"capturad5",lenguajes:["python","django","boostrap 5"],repositorio:"https://github.com/Alberco/Shopping-List"},
    {"id":"sd3232123123233233",name:"Tienda Online Rest",imagen:captura8,alt:"capturad5",lenguajes:["python","django","django-rest"],repositorio:"https://github.com/Alberco/django-rest-products"},
    {"id":"sd321231232d1233233",name:"Youtube Download",imagen:captura7,alt:"capturad5",lenguajes:["python","tkinter"],repositorio:"https://github.com/Alberco/youtube-descarga"},
  ]
  
  return (
    <section className="proyectos">
      <div className="proyectos-content">
          <h2 className="proyectos-title">Mira todos mis repositorios en mi cuenta de github.</h2>
          <button className="proyectos-buttom">Repositorios</button>
          <Image src={fondo} width={900} height={300} alt="fondo1"  className="proyectos-img" priority/>
      </div>
      <div className="proyectos-content2">
          <p className="proyectos-content2-titulo">Proyectos</p>
      </div>
      <Card data={proyectos} />
    </section>
  )
}

export default proyectos
