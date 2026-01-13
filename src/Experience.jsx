import { useEffect, useState } from 'react';
import Footer from './Footer';
import { Header } from './Header';
import { useLanguage } from './LanguageContext.jsx';
// DESCOMENTAR EN TU PROYECTO REAL:
// import { Header } from './Header.jsx';
// import { Footer } from './Footer.jsx';

// --- HELPER: SACAR FOTO DE YOUTUBE AUTOMÁTICAMENTE ---
// Esta función extrae el ID del video y devuelve la URL de la imagen.
const getYouTubeThumbnail = (url) => {
  if (!url) return null;
  // Soporta links cortos (youtu.be), largos (youtube.com/watch) y embed
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  
  if (match && match[2].length === 11) {
    // Retorna la imagen en máxima resolución
    return `https://img.youtube.com/vi/${match[2]}/maxresdefault.jpg`;
  }
  return null;
};

// --- DATOS DE EXPERIENCIA TÉCNICA ---
const experienceData = [
  { 
    id: 1, 
    title: 'Boquitas Pintadas', 
    artist: 'Tan Bionica, Nicki Nicole', 
    role: 'Gaffer', 
    dp: 'DP Name', 
    year: '2023', 
    // Si ponés null en img, intenta usar el videoUrl para sacar la foto
    img: null, 
    videoUrl: 'https://www.youtube.com/embed/orvldq8aASI?si=RrXbn7VQybDeUv9M' 
  },
  { 
    id: 2, 
    title: 'Tus Cosas', 
    artist: 'Tan Bionica, Pato Sardelli', 
    role: 'Gaffer', 
    dp: 'DP Name', 
    year: '2023', 
    img: null,
    videoUrl: 'https://www.youtube.com/embed/UKB8ww78MuQ?si=8wVDkyDXkiQ8-cvw' 
  },
  { 
    id: 3, 
    title: 'OOPS!', 
    artist: 'Ángela Torres', 
    role: 'Steadicam', 
    dp: 'DP Name', 
    year: '2023', 
    img: null,
    videoUrl: 'https://www.youtube.com/embed/i6W5cT0biOY?si=N8Ip06C5UthWR7dS' 
  },
  { 
    id: 4, 
    title: 'LUZ ROJA', 
    artist: 'Ángela Torres', 
    role: 'Electrician', 
    dp: 'DP Name', 
    year: '2023', 
    img: null,
    videoUrl: 'https://www.youtube.com/embed/xkHeDpT0_IE?si=rTUG8vJBfYAKEF9o' 
  },
  { 
    id: 5, 
    title: 'VERTIGO', 
    artist: 'Ángela Torres', 
    role: 'Best Boy', 
    dp: 'DP Name', 
    year: '2023', 
    img: null,
    videoUrl: 'https://www.youtube.com/embed/b339BRRyekg?si=dkxrmNtRdgMIx09i' 
  },
  { 
    id: 6, 
    title: 'Amor de Chat (Remix)', 
    artist: 'ECKO, Roman El Original', 
    role: 'Technician', 
    dp: 'DP Name', 
    year: '2023', 
    img: null,
    videoUrl: 'https://www.youtube.com/embed/ObJ3T_ElBRU?si=0DQaafvS0QOHHt6N' 
  },
  { 
    id: 7, 
    title: 'Para Qué Volver (Remix)', 
    artist: 'ECKO, Miguelito, El Negro Tecla', 
    role: 'Gaffer', 
    dp: 'DP Name', 
    year: '2023', 
    img: null,
    videoUrl: 'https://www.youtube.com/embed/sKzXtfKny3o?si=dNWcXe2XBhXly3td' 
  },
  { 
    id: 8, 
    title: 'Que Explote', 
    artist: 'El Negro Tecla', 
    role: 'Electrician', 
    dp: 'DP Name', 
    year: '2023', 
    img: null,
    videoUrl: 'https://www.youtube.com/embed/sj4PW7yh25Q?si=iMtkxcUUzC3jblHv' 
  },
  { 
    id: 9, 
    title: 'Short Film', 
    artist: 'Nico Torres, Pika, Julian Kominek', 
    role: '1st AC', 
    dp: 'DP Name', 
    year: '2022', 
    img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000',
    videoUrl: '' 
  },
  { 
    id: 10, 
    title: 'Una Copa', 
    artist: 'Homer el Mero Mero, Emanero', 
    role: 'Gaffer', 
    dp: 'DP Name', 
    year: '2022', 
    img: null,
    videoUrl: 'https://www.youtube.com/embed/tfQPtZqjbPs?si=JkS9IgwYL2RRn6-H' 
  },
  { 
    id: 11, 
    title: 'SUPEROFERTAS', 
    artist: 'MARTTEIN', 
    role: 'Technician', 
    dp: 'DP Name', 
    year: '2022', 
    img: null,
    videoUrl: 'https://www.youtube.com/embed/ZcLrRYDFyPk?si=cOuuCli4BWtJLiyn' 
  },
  { 
    id: 12, 
    title: 'Instagram Content', 
    artist: 'Solidrums', 
    role: 'Camera Op', 
    dp: 'DP Name', 
    year: '2022', 
    img: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80&w=1000',
    videoUrl: '' 
  },
  { 
    id: 13, 
    title: 'Cobrás con Nave', 
    artist: 'Comercial', 
    role: 'Gaffer', 
    dp: 'DP Name', 
    year: '2022', 
    img: null,
    videoUrl: 'https://www.youtube.com/embed/apffn_E1jgk?si=kiFVt2iZ68_Vbzy1' 
  },
];

const Experience = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useLanguage();

  return (
    <div className="bg-black min-h-screen text-white selection:bg-yellow-400 selection:text-black fade-in font-sans">
      <Header />

      <main className="pt-2 pb-20 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- HEADER DE SECCIÓN --- */}
        <div className="mb-2 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col items-start">
            <span className="text-yellow-400 font-montserrat text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 ml-1">
              {t('experience.kicker')}
            </span>
            <h1 className="font-bebas text-5xl md:text-7xl tracking-widest text-white leading-none">
              {t('experience.title')}
            </h1>
            <p className="font-montserrat text-white/40 text-xs md:text-sm tracking-[0.2em] mt-3 uppercase ml-1">
              {t('experience.roles')}
            </p>
          </div>
          
          <span className="font-montserrat text-xs text-white/30 hidden md:block tracking-widest mb-1 uppercase">
            {experienceData.length} {t('experience.credits')}
          </span>
        </div>

        {/* --- GRID DE TARJETAS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {experienceData.map((item) => {
            // Lógica para elegir la imagen:
            // 1. Si hay item.img manual, usa esa.
            // 2. Si no, intenta sacar el thumbnail de YouTube.
            // 3. Si falla, usa un placeholder oscuro.
            const thumbnail = item.img || getYouTubeThumbnail(item.videoUrl) || 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000';
            
            return (
              <div 
                key={item.id} 
                className="group relative bg-gray-900 overflow-hidden rounded-sm cursor-pointer shadow-md hover:shadow-yellow-400/10 transition-shadow duration-500"
                onClick={() => item.videoUrl && setSelectedVideo(item)}
              >
                
                {/* IMAGEN Y OVERLAY */}
                <div className="aspect-video w-full overflow-hidden relative">
                  <img 
                    src={thumbnail} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  
                  {/* Overlay Oscuro Base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
                  
                  {/* Icono Play al Hover */}
                  {item.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                      <div className="bg-yellow-400/90 text-black p-3 rounded-full shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Badge de ROL */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-yellow-400 text-black font-bebas text-xs px-2 py-1 tracking-wider rounded-sm shadow-lg">
                      {item.role}
                    </span>
                  </div>
                </div>

                {/* INFO CARD */}
                <div className="p-5 relative bg-black border-t border-white/5 group-hover:border-yellow-400/30 transition-colors duration-300">
                  
                  <p className="text-white/50 font-montserrat text-[10px] tracking-[0.2em] uppercase mb-1 truncate">
                    {item.artist}
                  </p>

                  <h3 className="text-white font-bebas text-2xl tracking-wide leading-none mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 border-t border-white/10 pt-3 mt-auto">
                    <span className="text-white/30 text-[9px] uppercase tracking-wider">DP</span>
                    <span className="text-white/80 font-montserrat text-[10px] uppercase tracking-widest font-bold">
                      {item.dp}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </main>

      {/* --- MODAL DE VIDEO --- */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl rounded-sm overflow-hidden border border-white/10">
            
            <button 
              className="absolute -top-12 right-0 md:top-4 md:right-4 text-white/50 hover:text-yellow-400 transition-colors z-50 flex items-center gap-2 group"
              onClick={(e) => { e.stopPropagation(); setSelectedVideo(null); }}
            >
              <span className="text-xs uppercase tracking-widest font-bold hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">{t('experience.close')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <iframe
              className="w-full h-full"
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Experience;
