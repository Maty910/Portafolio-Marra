import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

// DATA: Info actualizada de los proyectos
const projectsData = {
  'castillo-de-arena': {
    title: 'Castillos de Arena',
    description: 'En este documental nos adentramos en la vida de Adrián, quien trabaja en un estacionamiento y siempre busca la manera de ponerle una impronta personal a su día a día tan rutinario.',
    credits: {
      'Directora': 'Maria del Pilar Judez',
      'Dirección de Fotografía': 'Joaquin Marraccini',
      'Productora': 'Micaela Cantello',
      'Guionista': 'Agustin Gianotti',
      'Directora de Arte': 'Maria Celeste Chaile',
      'Sonidista': 'Emma Dupuy',
      'Montaje': 'Camil Inda Arias'
    },
    videoUrl: 'https://www.youtube.com/embed/kdsB5FriV-0?start=172'
  },
  'intervalo': {
    title: 'Intervalo',
    description: 'Un chico apasionado por las películas, va al cine a ver un reestreno, lo que no se espera es conectar con un personaje de la película de una manera especial.',
    credits: {
      'Directora': 'Maria del Pilar Judez',
      'Dirección de Fotografía': 'Joaquin Marraccini',
      'Productora': 'Micaela Cantello',
      'Guionista': 'Agustin Gianotti',
      'Directora de Arte': 'Lina Brcic Piekar - Ana Arenas',
      'Sonidista': 'Emma Dupuy',
      'Montaje': 'Camil Inda Arias'
    },
    videoUrl: 'https://www.youtube.com/embed/l2T53phSMQM?start=405'
  },
  'la-misma-sombra': {
    title: 'La Misma Sombra',
    description: 'Una señora llamada Patricia y su hija Malena, atraviesan una tarde llena de idas y vueltas, que va a cambiar el futuro de ambas.',
    credits: {
      'Directora': 'Maria del Pilar Judez',
      'Dirección de Fotografía': 'Joaquin Marraccini',
      'Productora': 'Martina Bo',
      'Guionista': 'Francisco Molina',
      'Directora de Arte': 'Francisca Etchetto',
      'Sonidista': 'Emma Dupuy',
      'Montaje': 'Guadalupe Portela'
    },
    videoUrl: null // No se proporcionó URL
  },
  // Mantenemos este por si acaso, aunque no pasaste data nueva
  'cada-cosa-que-no-sé': {
    title: 'Cada cosa que no sé',
    description: 'Videoclip musical con estética onírica. Trabajo de iluminación enfocado en contrastes fuertes y paletas de colores saturados.',
    credits: { 
      'Director': 'Nombre Director', 
      'Color': 'Nombre Colorista', 
      'Camera': 'Sony Venice' 
    },
    videoUrl: 'https://www.youtube.com/embed/F8fFVuaMbu8'
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

  // Scroll al top al cambiar de proyecto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectName]);

  // Carga de imágenes (Mantiene la lógica de carpetas original)
  useEffect(() => {
    const selectImagesByProject = (name) => {
      switch (name) {
        case 'castillo-de-arena':
          // Asegurate que la carpeta en assets se llame "Stills Castillos de arena"
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

      <main className="pt-28 md:pt-36 pb-20">
        
        {/* --- NAVEGACIÓN DE CONTEXTO (BREADCRUMB) --- */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6 md:mb-10 flex items-center gap-3">
          <Link 
            to="/projects" 
            className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:-translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="font-bebas tracking-widest text-lg md:text-xl pt-0.5">PROJECTS</span>
          </Link>
          
          <span className="text-white/20">/</span>
          
          <span className="font-bebas tracking-widest text-lg md:text-xl text-white pt-0.5 opacity-80 cursor-default">
            {projectInfo.title.toUpperCase()}
          </span>
        </div>

        {/* --- SECCIÓN HERO: VIDEO PRINCIPAL --- */}
        {projectInfo.videoUrl && (
          <section className="w-full mb-12 md:mb-16">
            <div className="w-full md:max-w-7xl md:mx-auto md:px-12">
              <div className="relative w-full aspect-video shadow-[0_0_30px_rgba(0,0,0,0.5)] md:shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                <iframe
                  className="absolute inset-0 w-full h-full md:rounded-sm"
                  src={projectInfo.videoUrl}
                  title={projectInfo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        )}

        {/* --- SECCIÓN INFO DEL PROYECTO --- */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 mb-24">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-between items-start border-b border-white/10 pb-12">
            
            {/* Título y Descripción */}
            <div className="md:w-3/5">
              <h1 className="font-bebas text-5xl md:text-7xl leading-none tracking-wide mb-6 text-white drop-shadow-lg selection:bg-yellow-400 selection:text-black">
                {projectInfo.title}
              </h1>
              <p className="font-montserrat font-light text-white/80 text-sm md:text-base leading-7 tracking-wide max-w-2xl selection:bg-yellow-400 selection:text-black">
                {projectInfo.description}
              </p>
            </div>

            {/* Ficha Técnica */}
            <div className="md:w-2/5 w-full flex flex-col gap-5">
              <h3 className="font-bebas text-2xl tracking-widest text-white/90 mb-1 selection:bg-yellow-400 selection:text-black">
                CREDITS
              </h3>
              
              <div className="flex flex-col gap-3 font-montserrat text-sm border-l border-white/20 pl-6 selection:bg-yellow-400 selection:text-black">
                {Object.entries(projectInfo.credits).length > 0 ? (
                  Object.entries(projectInfo.credits).map(([role, name]) => (
                    <div key={role} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                      <span className="text-white/40 uppercase text-xs tracking-wider font-semibold selection:bg-yellow-400 selection:text-black">{role}</span>
                      <span className="text-white font-medium tracking-wide text-right selection:bg-yellow-400 selection:text-black">{name}</span>
                    </div>
                  ))
                ) : (
                  <span className="text-white/30 italic selection:bg-yellow-400 selection:text-black">Information not available</span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN STILLS (GALERÍA) --- */}
        {images.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 md:px-12">
            <div className="flex items-end gap-4 mb-8 px-2">
              <h3 className="font-bebas text-3xl md:text-4xl text-white tracking-wider selection:bg-yellow-400 selection:text-black">
                STILLS
              </h3>
              <div className="h-px bg-white/10 grow mb-2"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />

      {/* --- LIGHTBOX (MODAL) --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-100 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50"
            aria-label="Cerrar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <img 
            src={selectedImage} 
            alt="Vista completa" 
            className="max-w-full max-h-[90vh] rounded shadow-2xl object-contain select-none"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectPage;