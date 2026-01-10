import { Projects } from './Projects'
import './index.css'
import { Header} from './Header.jsx'
import { Footer} from './Footer.jsx'

export function Home () {
  // Puedes agregar un video de varias formas:
  // 1. Usar un <iframe> para incrustar desde YouTube (como ya tienes).
  // 2. Usar la etiqueta <video> para mostrar un archivo mp4 local o remoto.

  // Si tienes el archivo mp4 en tu proyecto (por ejemplo, en /public/videos/video.mp4), puedes usar:
  // <video src="/videos/video.mp4" controls width="733" height="412" />

  // Usar un archivo mp4 local te da más control (sin anuncios, sin sugerencias de YouTube, etc.), pero aumenta el peso de tu proyecto y el ancho de banda necesario.

  // Ejemplo reemplazando el iframe por un video local:
  return (
    <>
      <Header />
      <main className="bg-black w-full">
        <section className="relative flex justify-center w-full bg-black rounded-lg overflow-hidden backdrop-blur-[14px]">
          <video
            className="w-full"
            src="/videos/reel.mp4"
            muted
            autoPlay
            // poster="/videos/video-poster.jpg"
            preload="auto"
            name="reel"
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-0 place-self-center bg-black w-full p-2">
          <Projects projectName="La misma sombra" imgFileName="bajo la misma sombra.jpg"/>
          <Projects projectName="Intervalo" imgFileName="intervalo.jpg"/>
          <Projects projectName="Castillo de arena" imgFileName="castillo de arena.jpg"/>
          <Projects projectName="Cada cosa que no sé" imgFileName="masmedula.jpg"/>
        </section>
      </main>
      <Footer />
    </>
  )
}
