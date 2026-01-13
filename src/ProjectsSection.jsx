import { useEffect } from 'react';
import { Projects } from './Projects.jsx'; // Importamos la tarjeta individual
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { useLanguage } from './LanguageContext.jsx';

function ProjectsSection() {
  
  // 1. Definimos tus datos aquí para mantener el render limpio y poder contar cuántos hay
  const myProjects = [
    { name: "La misma sombra", img: "bajo la misma sombra.jpg", cat: "Fiction" },
    { name: "Intervalo", img: "intervalo.jpg", cat: "Fiction" },
    { name: "Castillo de arena", img: "castillo de arena.jpg", cat: "Documentary" },
    { name: "Cada cosa que no sé", img: "masmedula.jpg", cat: "Video Clip" },
  ];

  // 2. Scroll al inicio al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useLanguage();

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black fade-in font-sans">
      <Header />

      <main className="pt-2 pb-20 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- ENCABEZADO DE SECCIÓN (Idéntico a Fotografía para consistencia) --- */}
        <div className="mb-2 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col items-start">
            
            {/* SUBTÍTULO / KICKER */}
            <span className="text-yellow-400 font-montserrat text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 ml-1 selection:bg-yellow-400 selection:text-black fade-in">
              {t('projects.kicker')}
            </span>

            {/* TÍTULO PRINCIPAL */}
            <h1 className="font-bebas text-5xl md:text-6xl tracking-widest text-white leading-none selection:bg-yellow-400 selection:text-black fade-in">
              {t('projects.title')}
            </h1>

            {/* BAJADA */}
            <p className="font-montserrat text-white/40 text-xs md:text-sm tracking-[0.2em] mt-2 uppercase ml-1 selection:bg-yellow-400 selection:text-black fade-in">
              {t('projects.intro')}
            </p>
          </div>
          
          {/* CONTADOR DINÁMICO */}
          <span className="font-montserrat text-xs text-white/30 hidden md:block tracking-widest mb-1 uppercase selection:bg-yellow-400 selection:text-black fade-in">
            {myProjects.length} {t('projects.countLabel')}
          </span>
        </div>

        {/* --- GRID DE PROYECTOS --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {myProjects.map((proj, index) => (
            <Projects 
              key={index}
              projectName={proj.name}
              imgFileName={proj.img}
              category={proj.cat} // Pasamos la categoría si querés que varíe
            />
          ))}
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default ProjectsSection;