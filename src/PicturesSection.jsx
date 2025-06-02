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
        <img src=".././public/pictures/1.jpg" alt="Image description" />
        <img src=".././public/pictures/2.jpg" alt="Image description" />
        <img src=".././public/pictures/3.jpg" alt="Image description" />
        <img src=".././public/pictures/4.jpg" alt="Image description" />
        <img src=".././public/pictures/5.jpg" alt="Image description" />
        <img src=".././public/pictures/6.jpg" alt="Image description" />
        <img src=".././public/pictures/7.jpg" alt="Image description" />
        <img src=".././public/pictures/8.jpg" alt="Image description" />
        <img src=".././public/pictures/9.jpg" alt="Image description" />
        <img src=".././public/pictures/10.jpg" alt="Image description" />
      </div>
    </section>
    <Footer />
    </>
  )
}

export default PicturesSection