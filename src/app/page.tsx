import './page.scss'
import { CardHome } from '@/components';


export default function Home() {

  return (
    <main className="container">
      <section className='intro'>
        <div className='intro-container uno'>
          <p className='intro-title'> Soy Guillermo Alberco Capistrano</p>
          <p className='intro-bloque'>
            Web Developer  - Frontend y Backend,
            Apasionado con los videojuegos JRPG y el mundo de Gundam.
          </p>
          <button className='intro-buttom'>Descargar CV</button>
        </div>
        <div className='intro-container dos'>
            <CardHome />
        </div>
      </section>
    </main>
  )
}
