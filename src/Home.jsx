import { Projects } from './Projects'
import './App.css'
import { Header} from './Header.jsx'
import { Footer} from './Footer.jsx'

export function Home () {
  return (
  <>
    <Header />
      <main>
        <section className="pm-reel-container">
        <iframe 
          width="733" 
          height="412" 
          src="https://www.youtube.com/embed/kGhOKnBQQcE?autoplay=1&mute=1" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
          name="video-frame"
        ></iframe>
        </section>
        <section className="pm-projects-container">
          <Projects projectName="Bajo la misma sombra" imgFileName="bajo la misma sombra.jpg"/>
          <Projects projectName="Intervalo" imgFileName="intervalo.jpg"/>
          <Projects projectName="Castillo de arena" imgFileName="castillo de arena.jpg"/>
          <Projects projectName="Cada cosa que no sé" imgFileName="masmedula.jpg"/>
          <Projects projectName="Castillo de arena" imgFileName="castillo de arena.jpg"/>
          <Projects projectName="Castillo de arena" imgFileName="castillo de arena.jpg"/>
        </section>
      </main>
      <Footer />
    </>
  )
}
