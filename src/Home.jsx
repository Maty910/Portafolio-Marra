import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { Projects } from './Projects.jsx';

export function Home() {
  
  // Datos de ejemplo para los proyectos destacados
  const featuredProjects = [
    { name: "La misma sombra", img: "bajo la misma sombra.jpg", cat: "Fiction" },
    { name: "Intervalo", img: "intervalo.jpg", cat: "Fiction" },
    { name: "Castillo de arena", img: "castillo de arena.jpg", cat: "Documentary" },
    { name: "Cada cosa que no sé", img: "masmedula.jpg", cat: "Video Art" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white fade-in relative font-sans">
      <Header />

      {/* --- 1. REEL SECTION (100% Pantalla) --- */}
      <section className="relative w-full h-screen overflow-hidden">
        <video 
          autoPlay loop muted playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          {/* RUTA CORREGIDA: Apunta a la carpeta public/videos/ */}
          <source src="/videos/reel.mp4" type="video/mp4" />
          {/* Fallback por si no carga */}
          <img src="/img/reel-poster.jpg" alt="Reel Background" className="w-full h-full object-cover" />
        </video>

        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className="absolute bottom-10 left-0 w-full z-20 flex justify-center animate-bounce">
          <div className="text-white/50 flex flex-col items-center gap-2">
            <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase">Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* --- 2. FEATURED PROJECTS --- */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto bg-black relative z-20">
        
        <div className="mb-12 border-b border-white/10 pb-6">
          <span className="text-yellow-400 font-montserrat text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 block">
            — Selected Work —
          </span>
          <h2 className="font-bebas text-4xl md:text-5xl tracking-widest text-white leading-none">
            LATEST PROJECTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {featuredProjects.map((proj, i) => (
            <Projects 
              key={i}
              projectName={proj.name}
              imgFileName={proj.img}
              category={proj.cat}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link 
            to="/projects" 
            className="group border border-white/20 px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
          >
            <span className="font-montserrat text-xs tracking-[0.3em] uppercase font-bold group-hover:tracking-[0.4em] transition-all">
              View All Projects
            </span>
          </Link>
        </div>

      </section>

      {/* --- 3. ABOUT ME SECTION --- */}
      <section className="py-20 bg-gray-900 border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* IMAGEN DE PERFIL */}
            <div className="md:col-span-5 relative group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-sm relative">
                {/* RUTA CORREGIDA: Apunta a public/img/ */}
                <img 
                  src="/img/profile.jpg" 
                  alt="Joaquín Marraccini" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 border border-white/10 group-hover:border-yellow-400/50 transition-colors duration-500 pointer-events-none" />
              </div>
            </div>

            {/* TEXTO */}
            <div className="md:col-span-7 md:pl-8">
              <span className="text-yellow-400 font-montserrat text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                — Perfil —
              </span>
              
              <h2 className="font-bebas text-4xl md:text-6xl tracking-widest text-white leading-none mb-6">
                ABOUT ME
              </h2>

              <div className="font-montserrat text-white/80 text-sm md:text-base leading-loose space-y-4 tracking-wide text-justify md:text-left">
                <p>
                  I am <strong className="text-white">Joaquín Marraccini</strong>, Director of Photography and Photographer.
                </p>
                <p>
                  My focus is on visual storytelling, using light and color to enhance the narrative.
                </p>
                <p>
                  With experience in advertising, music videos, and fiction, I always seek the best aesthetic and technical quality in every project.
                </p>
              </div>

              <div className="mt-8">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-white transition-colors duration-300 font-montserrat text-xs tracking-[0.2em] uppercase font-bold"
                >
                  <span>Lets Talk</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}