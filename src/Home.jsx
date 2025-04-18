import { Projects } from './Projects'
import './App.css'
import { Header} from './Header.jsx'

export function Home () {
  return (
  <>
    <Header />
      <main>
        <section className="pm-reel-container">
        <iframe width="733" height="412" src="https://www.youtube.com/embed/S0fbNTftQhc" title="VIDEO SON MALOS final 1 prueba" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen
        ></iframe>
        </section>
        <section className="pm-projects-container">
          <Projects projectName="Castillo de arena" imgFileName="castillo de arena.jpg"/>
          <Projects projectName="Cada cosa que no sé" imgFileName="masmedula.jpg"/>
          <Projects projectName="a       Valen __________aa" imgFileName="valen foto.jpg"/>
          <Projects projectName="Foto Naranja" imgFileName="paisaje.jpg"/>
          <Projects projectName="Castillo de arena" imgFileName="castillo de arena.jpg"/>
          <Projects projectName="Castillo de arena" imgFileName="castillo de arena.jpg"/>
        </section>
      </main>
    </>
  )
}
