import './App.css'
import { Header } from './Header.jsx' 
import { Footer } from './Footer'

import {useState} from 'react'

export function PicturesSection () {
  const [selectedPicture, setSelectedPicture] = useState(null)

  const pictures = Array.from({ length: 10} , (_, i) => `/pictures/${i + 1}.jpg`)

  return (
    <>
      <Header />
        <section className="pm-pictures-section">
          <h2 className='pm-subtitle'>Pictures:</h2>
          <div className="pm-pictures-container">
            <p className='pm-pictures-text'>Click on the images to see them in full size.</p>
            {pictures.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Image ${i + 1}`}
                className="pm-picture"
                onClick={() => setSelectedPicture(src)} style={{ cursor: 'pointer' }} 
              />
            ))}
          </div>
        </section>
        {selectedPicture && (
          <div className="pm-modal" onClick={() => setSelectedPicture(null)}>
            <span className='pm-close' onClick={() => setSelectedPicture(null)}>&times;</span>
            <img className='pm-modal-content' src={selectedPicture} alt='Full view' />
          </div>
        )}
      <Footer />
    </>
  )
}

export default PicturesSection