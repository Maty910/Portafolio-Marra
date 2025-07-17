import { Projects } from './Projects'
import { Header } from './Header'
import { Footer } from './Footer'

import './App.css'

function ProjectsSection () {
  return (
    <>
      <Header />
      <section className="pm-projects-container">
        <Projects projectName="La misma sombra" imgFileName="bajo la misma sombra.jpg"/>
        <Projects projectName="Intervalo" imgFileName="intervalo.jpg"/>
        <Projects projectName="Castillo de arena" imgFileName="castillo de arena.jpg"/>
        <Projects projectName="Cada cosa que no sé" imgFileName="masmedula.jpg"/>
      </section>
      <Footer />
    </>
  )
}

export default ProjectsSection