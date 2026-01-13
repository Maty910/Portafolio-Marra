import { useState, useEffect } from 'react';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { useLanguage } from './LanguageContext.jsx';

export function ImagesSection() {
  const [selectedPicture, setSelectedPicture] = useState(null);

  // Generamos el array de fotos
  const photos = Array.from({ length: 10 }, (_, i) => `/photos/${i + 1}.jpg`);

  // Scroll al top cuando entramos a la sección
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useLanguage();

  return (
    <div className="bg-black min-h-screen text-white selection:bg-yellow-400 selection:text-black fade-in font-sans">
      <Header />

      <main className="pt-2 pb-20 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- ENCABEZADO DE SECCIÓN --- */}
        <div className="mb-2 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col items-start">
            
            {/* KICKER / SUBTÍTULO DE SECCIÓN (Consistencia UX) */}
            <span className="text-yellow-400 font-montserrat text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 ml-1">
              {t('images.kicker')}
            </span>

            {/* Título Principal */}
            <h1 className="font-bebas text-5xl md:text-7xl tracking-widest text-white leading-none">
              {t('images.title')}
            </h1>

            {/* Bajada / Descripción */}
            <p className="font-montserrat text-white/40 text-xs md:text-sm tracking-[0.2em] mt-3 uppercase ml-1">
              {t('images.description')}
            </p>
          </div>
          
          {/* Contador de imágenes (Oculto en muy pequeños, visible en md) */}
          <span className="font-montserrat text-[10px] md:text-xs text-white/30 tracking-widest mb-1 uppercase hidden md:block">
            {photos.length} {t('images.countLabel')}
          </span>
        </div>

        {/* --- MASONRY LAYOUT (Estilo Pinterest) --- */}
        {/* column-count CSS es ideal para masonry vertical puro */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((src, i) => (
            <div
              key={i}
              onClick={() => setSelectedPicture(src)}
              className="group relative cursor-zoom-in overflow-hidden rounded-sm break-inside-avoid mb-6 bg-gray-900"
            >
              <img
                src={src}
                alt={`Fotografía ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100 group-hover:brightness-110"
              />
              
              {/* Overlay sutil al hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
              
              {/* Icono de lupa opcional al hover (UX: indica que se puede ampliar) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                 <svg className="w-8 h-8 text-white/80 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                 </svg>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- LIGHTBOX (MODAL) --- */}
      {selectedPicture && (
        <div 
          className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedPicture(null)}
        >
          {/* Botón Cerrar */}
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-yellow-400 transition-colors p-2 z-50 group" 
            aria-label="Cerrar modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <img 
            src={selectedPicture} 
            alt="Vista completa" 
            className="max-w-full max-h-[90vh] rounded-sm shadow-2xl scale-in-95 animate-in duration-300 object-contain select-none"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ImagesSection;