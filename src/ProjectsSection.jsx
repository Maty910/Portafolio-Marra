import { Projects } from './Projects'
import { Header } from './Header'
import './App.css'

function ProjectsSection () {
  return (
    <>
      <Header/>
      <h2 className='pm-subtitle' >Projects:</h2>
      <section className="pm-projects-container">
        <Projects projectName="Castillo de arena" imgFileName="castillo de arena.jpg"/>
        <Projects projectName="Cada cosa que no sé" imgFileName="masmedula.jpg"/>
        <Projects projectName="a       Valen __________aa" imgFileName="valen foto.jpg"/>
        <Projects projectName="Foto Naranja" imgFileName="paisaje.jpg"/>
        <Projects projectName="Castillo de arena" imgFileName="castillo de arena.jpg"/>        <Projects projectName="Castillo de arena" imgFileName="castillo de arena.jpg"/>
      </section>
    </>
  )
}

export default ProjectsSection