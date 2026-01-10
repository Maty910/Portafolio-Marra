import { Projects } from './Projects'
import { Header } from './Header'
import { Footer } from './Footer'

function ProjectsSection () {
  return (
    <>
      <Header />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0 place-self-center bg-black w-full p-2">
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