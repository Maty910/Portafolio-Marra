import { Header } from './Header'
import { Footer } from './Footer'

export function Contact() {
  return (
    <>
      <Header />
      <section className="bg-pm-black w-full py-12">
        <div className="max-w-4xl mx-auto px-4 grid gap-4">
          <p className="text-base md:text-lg font-montserrat text-pm-white">
            Si querés ponete en contacto, hacelo a través de: <br />
            <b className="block mt-1">marraccinijoaquin@gmail.com</b>
          </p>

          <p className="text-base md:text-lg font-montserrat text-pm-white">
            También podés encontrarme en Instagram{' '}
            <a href="https://www.instagram.com/joaco_marra/" target="_blank" rel="noopener noreferrer" className="underline ml-1">
              <b>@joaco_marra</b>
            </a>
          </p>

          <p className="text-base md:text-lg font-montserrat text-pm-white">
            O en mi YouTube{' '}
            <a href="https://www.youtube.com/@joaquinmarraccini" target="_blank" rel="noopener noreferrer" className="underline ml-1">
              <b>@joaquinmarraccini</b>
            </a>
          </p>

          <p className="text-center mt-6 font-bebas text-pm-white">Buenos Aires, Argentina 🇦🇷</p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact