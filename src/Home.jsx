import { Projects } from './Projects'
import './App.css'

export function Home () {
  return (
  <>
    <header>
        <nav>
          <div className="logo">
            <h1>Joaquín Marraccini</h1>
            <p>Dir. de Fotografía</p>
          </div>
          <ul className="nav">
            <li className="nav-button"><a href="#home">Home</a></li>
            <li className="nav-button"><a href="#projects">Projects</a></li>
            <li className="nav-button"><a href="#about">About</a></li>
            <li className="nav-button"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="pm-reel-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/kc0lnXQw6K4?si=UZrEYnTwnjc4gjcJ&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen
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
