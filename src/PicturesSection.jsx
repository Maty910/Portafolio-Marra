import './App.css'
import { Header } from './Header.jsx' 
import { Footer } from './Footer'

import {useState} from 'react'

export function PicturesSection () {
  const [selectedPicture, setSelectedPicture] = useState(null)

  const photos = Array.from({ length: 10 }, (_, i) => `/photos/${i + 1}.jpg`)

  return (
    <>
      <Header />
        <section className="pm-pictures-section">
          <h2 className='pm-subtitle'>Fotos:</h2>
          <div className="pm-pictures-container">
            <p className='pm-pictures-text'>Haz clic en las imágenes para verlas en tamaño completo.</p>
            {photos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Imagen ${i + 1}`}
                className="pm-picture"
                onClick={() => setSelectedPicture(src)} style={{ cursor: 'pointer' }} 
              />
            ))}
          </div>
        </section>
        {selectedPicture && (
          <div className="pm-modal" onClick={() => setSelectedPicture(null)}>
            <span className='pm-close' onClick={() => setSelectedPicture(null)}>&times;</span>
            <img className='pm-modal-content' src={selectedPicture} alt='Vista completa' />
          </div>
        )}
      <Footer />
    </>
  )
}

export default PicturesSection