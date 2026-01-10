import { Header } from './Header.jsx'
import { Footer } from './Footer'

import { useState } from 'react'

export function PicturesSection() {
  const [selectedPicture, setSelectedPicture] = useState(null)

  const photos = Array.from({ length: 10 }, (_, i) => `/photos/${i + 1}.jpg`)

  return (
    <>
      <Header />
      <section className="bg-pm-black w-full py-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm md:text-base font-montserrat text-pm-white mb-6">Cliqueá en las imágenes para verlas en tamaño completo.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((src, i) => (
              <button key={i} onClick={() => setSelectedPicture(src)} className="w-full block rounded-lg overflow-hidden focus:outline-none" aria-label={`Abrir imagen ${i + 1}`}>
                <img src={src} alt={`Imagen ${i + 1}`} className="w-full h-[30vw] md:h-[20vw] object-cover rounded-lg cursor-zoom-in" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedPicture && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setSelectedPicture(null)}>
          <button className="absolute top-6 right-6 text-4xl text-pm-gray hover:text-pm-white" onClick={() => setSelectedPicture(null)} aria-label="Cerrar modal">&times;</button>
          <img src={selectedPicture} alt="Vista completa" className="max-w-[85vw] max-h-[90vh] rounded" />
        </div>
      )}

      <Footer />
    </>
  )
}

export default PicturesSection