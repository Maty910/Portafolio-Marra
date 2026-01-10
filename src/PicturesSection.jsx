import { useState, useEffect } from 'react';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

export function PicturesSection() {
  const [selectedPicture, setSelectedPicture] = useState(null);

  // Generamos el array de fotos
  const photos = Array.from({ length: 10 }, (_, i) => `/photos/${i + 1}.jpg`);

  // Scroll al top cuando entramos a la sección
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black fade-in">
      <Header />

      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- ENCABEZADO DE SECCIÓN --- */}
        <div className="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-bebas text-5xl md:text-6xl tracking-widest text-white leading-none">
              FOTOGRAFÍA
            </h1>
            <p className="font-montserrat text-white/40 text-xs md:text-sm tracking-[0.2em] mt-2 uppercase">
              Selección Personal
            </p>
          </div>
          
          <span className="font-montserrat text-xs text-white/30 hidden md:block tracking-widest mb-1">
            {photos.length} IMÁGENES
          </span>
        </div>

        {/* --- MASONRY LAYOUT (Estilo Pinterest) --- */}
        {/* Usamos columnas CSS en lugar de grid para que las alturas sean variables */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((src, i) => (
            <div
              key={i}
              onClick={() => setSelectedPicture(src)}
              // break-inside-avoid es clave para que la foto no se corte entre columnas
              // mb-6 da el espaciado vertical entre items
              className="group relative cursor-zoom-in overflow-hidden rounded-sm break-inside-avoid mb-6 bg-white/5"
            >
              <img
                src={src}
                alt={`Fotografía ${i + 1}`}
                loading="lazy"
                // w-full ajusta el ancho a la columna, h-auto respeta el ratio original
                className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110 opacity-90 group-hover:opacity-100"
              />
              
              {/* Overlay sutil al hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </main>

      {/* --- LIGHTBOX (MODAL) --- */}
      {selectedPicture && (
        <div 
          className="fixed inset-0 z-100 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedPicture(null)}
        >
          {/* Botón Cerrar */}
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50" 
            aria-label="Cerrar modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <img 
            src={selectedPicture} 
            alt="Vista completa" 
            className="max-w-full max-h-[90vh] rounded shadow-2xl scale-in-95 animate-in duration-300 object-contain select-none"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default PicturesSection;