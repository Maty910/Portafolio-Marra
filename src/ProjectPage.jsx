import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

// DATA: Centralizamos la info de los proyectos acá.
// En un futuro, esto podría venir de un archivo separado o una DB.
const projectsData = {
  'castillo-de-arena': {
    title: 'Castillo de Arena',
    description: 'Una exploración visual sobre la fragilidad de la memoria y el paso del tiempo. Rodado en locaciones naturales aprovechando la luz disponible del atardecer.',
    credits: { Director: 'Nombre Director', Color: 'Nombre Colorista', Camera: 'Arri Alexa Mini' },
    videoUrl: 'https://www.youtube.com/embed/kdsB5FriV-0?start=172'
  },
  'cada-cosa-que-no-sé': {
    title: 'Cada cosa que no sé',
    description: 'Videoclip musical con estética onírica. Trabajo de iluminación enfocado en contrastes fuertes y paletas de colores saturados.',
    credits: { Director: 'Nombre Director', Color: 'Nombre Colorista', Camera: 'Sony Venice' },
    videoUrl: 'https://www.youtube.com/embed/F8fFVuaMbu8'
  },
  'intervalo': {
    title: 'Intervalo',
    description: 'Cortometraje experimental. La cámara busca los espacios vacíos y los silencios entre los diálogos.',
    credits: { Director: 'Nombre Director', Color: 'Nombre Colorista', Camera: 'Red Komodo' },
    videoUrl: 'https://www.youtube.com/embed/l2T53phSMQM?start=405'
  },
  'la-misma-sombra': {
    title: 'La Misma Sombra',
    description: 'Lorem ipsum dolor sit amet, descripción del proyecto pendiente.',
    credits: { Director: 'Nombre Director', Camera: 'Blackmagic 6K' },
    videoUrl: null // Si no hay video, no se muestra
  }
};

function ProjectPage() {
  const { projectName } = useParams();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Normalizamos el nombre para buscar en la data
  const projectInfo = projectsData[projectName] || {
    title: projectName.replace(/-/g, ' '),
    description: 'Descripción no disponible.',
    credits: {},
    videoUrl: null
  };

  // Lógica de carga de imágenes (Manteniendo tu estructura de Vite)
  useEffect(() => {
    const selectImagesByProject = (name) => {
      // Vite necesita strings literales para los globs, por eso mantenemos el switch
      switch (name) {
        case 'castillo-de-arena':
          return import.meta.glob('./assets/Stills Castillos de arena/*.{png,jpg,jpeg,svg}');
        case 'cada-cosa-que-no-sé':
          return import.meta.glob('./assets/Stills ccqns/*.{png,jpg,jpeg,svg}');
        case 'la-misma-sombra':
          return import.meta.glob('./assets/Stills LMS/*.{png,jpg,jpeg,svg}');
        case 'intervalo':
          return import.meta.glob('./assets/Stills Intervalo/*.{png,jpg,jpeg,svg}');
        default:
          return {};
      }
    };

    const importAll = selectImagesByProject(projectName);

    const loadImages = async () => {
      try {
        const imagePaths = await Promise.all(
          Object.values(importAll).map((importFn) => importFn().then((mod) => mod.default))
        );
        setImages(imagePaths);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, [projectName]);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black fade-in">
      <Header />

      <main className="pt-24 md:pt-32 pb-20">
        
        {/* --- SECCIÓN HERO: VIDEO PRINCIPAL --- */}
        {/* Prioridad visual: El video va arriba, full width en mobile, contenedor "Cine" en desktop */}
        {projectInfo.videoUrl && (
          <section className="w-full px-0 md:px-8 lg:px-12 mb-12">
            <div className="relative w-full aspect-video max-w-7xl mx-auto shadow-[0_0_50px_rgba(255,255,255,0.05)]">
              <iframe
                className="absolute inset-0 w-full h-full md:rounded-sm"
                src={projectInfo.videoUrl}
                title={projectInfo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* --- SECCIÓN INFO DEL PROYECTO --- */}
        <section className="max-w-4xl mx-auto px-6 md:px-0 mb-20 text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start border-b border-white/10 pb-8">
            
            {/* Título y Descripción */}
            <div className="md:w-2/3">
              <h1 className="font-bebas text-5xl md:text-7xl leading-none tracking-wide mb-6 text-white">
                {projectInfo.title}
              </h1>
              <p className="font-inter font-light text-white/70 text-lg leading-relaxed max-w-2xl">
                {projectInfo.description}
              </p>
            </div>

            {/* Créditos / Ficha Técnica (Toque Profesional) */}
            <div className="md:w-1/3 w-full flex flex-col gap-4 font-montserrat text-sm bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="uppercase tracking-widest text-white/40 text-xs font-bold border-b border-white/10 pb-2 mb-1">
                Créditos
              </h3>
              {Object.entries(projectInfo.credits).length > 0 ? (
                Object.entries(projectInfo.credits).map(([role, name]) => (
                  <div key={role} className="flex justify-between">
                    <span className="text-white/50 uppercase text-xs">{role}</span>
                    <span className="text-white font-medium">{name}</span>
                  </div>
                ))
              ) : (
                <span className="text-white/30 italic">Sin créditos especificados</span>
              )}
            </div>
          </div>
        </section>

        {/* --- SECCIÓN STILLS (GALERÍA) --- */}
        {images.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-end gap-4 mb-8 px-2">
              <h3 className="font-bebas text-3xl md:text-4xl text-white tracking-wider">
                Stills
              </h3>
              <div className="h-px bg-white/20 flex-grow mb-2"></div>
              <span className="font-montserrat text-xs text-white/40 mb-2">
                {images.length} IMÁGENES
              </span>
            </div>

            {/* Grilla Masonry-style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="group relative cursor-zoom-in overflow-hidden rounded-sm aspect-video bg-white/5"
                >
                  <img 
                    src={image} 
                    alt={`Still ${index + 1}`} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110" 
                  />
                  {/* Overlay sutil al hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />

      {/* --- LIGHTBOX (MODAL) MEJORADO --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Botón Cerrar Flotante */}
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
            aria-label="Cerrar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <img 
            src={selectedImage} 
            alt="Vista completa" 
            className="max-w-full max-h-[90vh] rounded shadow-2xl scale-in-95 animate-in duration-300 object-contain select-none"
            onClick={(e) => e.stopPropagation()} // Evita cerrar si clickeas la foto
          />
        </div>
      )}
    </div>
  );
}

export default ProjectPage;