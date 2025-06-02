import './App.css'
import { Header } from './Header.jsx' 
import { Footer } from './Footer'

export function PicturesSection () {
  return (
    <>
      <Header />
      <section className="pm-pictures-section">
        <h2 className='pm-subtitle'>Pictures:</h2>
        <div className="pm-pictures-container">
          <img src="/pictures/1.jpg" alt="Image description" />
          <img src="/pictures/2.jpg" alt="Image description" />
          <img src="/pictures/3.jpg" alt="Image description" />
          <img src="/pictures/4.jpg" alt="Image description" />
          <img src="/pictures/5.jpg" alt="Image description" />
          <img src="/pictures/6.jpg" alt="Image description" />
          <img src="/pictures/7.jpg" alt="Image description" />
          <img src="/pictures/8.jpg" alt="Image description" />
          <img src="/pictures/9.jpg" alt="Image description" />
          <img src="/pictures/10.jpg" alt="Image description" />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PicturesSection