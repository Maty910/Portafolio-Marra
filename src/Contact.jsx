import { useEffect } from 'react';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

export function Contact() {
  
  // Scroll al top al entrar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-yellow-400 selection:text-black fade-in font-sans flex flex-col justify-between">
      <Header />

      <main className="pt-2 pb-20 max-w-4xl mx-auto px-6 md:px-12 grow w-full">
        
        {/* --- ENCABEZADO DE SECCIÓN --- */}
        <div className="mb-2 border-b border-white/10 pb-6">
          
          {/* Kicker */}
          <span className="text-yellow-400 font-montserrat text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 block ml-1">
            — Get in Touch —
          </span>

          {/* Título Principal */}
          <h1 className="font-bebas text-5xl md:text-7xl tracking-widest text-white leading-none mb-4">
            CONTACT & ABOUT
          </h1>
        </div>

        {/* --- CONTENIDO PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          
          {/* COLUMNA 1: ABOUT ME (Breve bio) */}
          <div className="space-y-6">
            <h2 className="text-white font-bebas text-2xl tracking-wider">
              About Me
            </h2>
            <div className="font-montserrat text-white/70 text-sm md:text-base leading-relaxed space-y-4">
              <p>
                I am Joaquin Marraccini, a Cinematographer and Photographer based in Buenos Aires, Argentina. 
                Passion for visual storytelling drives every frame I capture.
              </p>
              <p>
                Whether it is a feature film, music video, or commercial project, my goal is to create 
                immersive atmospheres through lighting and composition.
              </p>
              <div className="pt-4 flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                Available for freelance projects
              </div>
            </div>
          </div>

          {/* COLUMNA 2: CONTACT INFO */}
          <div className="space-y-8">
            
            {/* EMAIL BLOCK */}
            <div className="group">
              <span className="text-xs font-montserrat text-white/40 tracking-[0.2em] uppercase block mb-2">
                Email Me
              </span>
              <a 
                href="mailto:marraccinijoaquin@gmail.com" 
                className="font-bebas text-3xl md:text-4xl text-white group-hover:text-yellow-400 transition-colors duration-300 wrap-break-words"
              >
                marraccinijoaquin@gmail.com
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="space-y-6">
              <span className="text-xs font-montserrat text-white/40 tracking-[0.2em] uppercase block mb-2">
                Follow My Work
              </span>
              
              <div className="flex flex-col gap-4">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/joaco_marra/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border border-white/10 p-4 rounded-sm hover:border-yellow-400/50 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="text-white/80 group-hover:text-yellow-400 transition-colors">
                     {/* Icono simple de Instagram (SVG inline) */}
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </div>
                  <div>
                    <span className="block font-bebas text-xl text-white group-hover:text-yellow-400 transition-colors">@joaco_marra</span>
                    <span className="block font-montserrat text-[10px] text-white/40 tracking-widest uppercase">Instagram</span>
                  </div>
                </a>

                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/@joaquinmarraccini" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border border-white/10 p-4 rounded-sm hover:border-yellow-400/50 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="text-white/80 group-hover:text-yellow-400 transition-colors">
                     {/* Icono simple de YouTube (SVG inline) */}
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  </div>
                  <div>
                    <span className="block font-bebas text-xl text-white group-hover:text-yellow-400 transition-colors">@joaquinmarraccini</span>
                    <span className="block font-montserrat text-[10px] text-white/40 tracking-widest uppercase">YouTube</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="pt-6 border-t border-white/10">
              <span className="font-bebas text-white/50 tracking-wider">Based in Buenos Aires, Argentina 🇦🇷</span>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;