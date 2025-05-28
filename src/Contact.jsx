import './App.css'
import { Header } from './Header'
import { Footer } from './Footer'

export function Contact () {
  return (
  <>
    <Header />
    <section className="pm-contact-section">
      <h2 className='pm-contact-subtitle'>Contact:</h2>
      <div className="pm-contact-container">
        <p className='pm-contact-a'>If you want to get in touch, you can contact me at: <br /> <b>joaquinmarraccini@gmail.com</b></p>
        <p className='pm-contact-a'>Or you can find me on my Instagram<a href="https://www.instagram.com/joaco_marra/" target="_blank" rel="noopener noreferrer"><b>@joaco_marra</b></a></p>
      </div>
      <div className="pm-contact-container">
        <p className='pm-contact-a'>You can also find me on my Vimeo<a href="https://vimeo.com/joaquinmarraccini" target="_blank" rel="noopener noreferrer"><b>@joaquinmarraccini</b></a></p>
        <p className='pm-contact-a'>Or on my YouTube<a href="https://www.youtube.com/@joaquinmarraccini" target="_blank" rel="noopener noreferrer"><b>@joaquinmarraccini</b></a></p>
      </div>
      <p className='pm-contact-location'>Buenos Aires, Argentina 🇦🇷</p>
    </section>
    <Footer />
  </>
  )
}

export default Contact