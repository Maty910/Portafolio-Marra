import { useEffect } from 'react';
import { useLanguage } from './LanguageContext.jsx';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

// Importá acá la foto que quieras mostrar (idealmente alguien filmando o en set)
import profileImg from './assets/profile/profile.jpeg'; // ⚠️ Asegurate de tener esta imagen o cambiá el nombre

export default function Contact() {
  
  // Scroll al top al entrar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useLanguage();

  return (
    <div className="bg-black min-h-screen text-white selection:bg-yellow-400 selection:text-black fade-in font-sans flex flex-col justify-between">
      <Header />

      <main className="pt-2 pb-20 max-w-5xl mx-auto px-6 md:px-12 grow w-full">
        
        {/* --- ENCABEZADO DE SECCIÓN --- */}
        <div className="mb-8 md:mb-12 border-b border-white/10 pb-6">
          <span className="text-yellow-400 font-montserrat text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase mb-1 block ml-1">
            {t('contact.kicker')}
          </span>
        </div>

        {/* --- CONTENIDO PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* COLUMNA 1: FOTO + ABOUT ME */}
          <div className="space-y-8">
            
            {/* IMAGEN DE CONTACTO (NUEVA) */}
            <div className="group relative w-full aspect-video overflow-hidden rounded-sm bg-gray-900 border border-white/10">
              <img 
                src={profileImg} 
                alt="On Set" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
              />
              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            </div>

            {/* TEXTO BIO */}
            <div className="space-y-6">
              <h2 className="text-white font-bebas text-3xl tracking-wider border-l-2 border-yellow-400 pl-4">
                {t('contact.aboutTitle')}
              </h2>
              
              <div className="font-montserrat text-white/70 text-sm md:text-base leading-relaxed space-y-4 text-justify">
                {t('contact.aboutLines').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                
                <div className="pt-4 flex items-center gap-3 text-white/90 text-xs tracking-widest uppercase font-bold">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                  </span>
                  {t('contact.available')}
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA 2: CONTACT INFO */}
          {/* Le damos un poco de padding top en desktop para alinear visualmente con el texto si la foto es alta */}
          <div className="space-y-10 md:pt-0">
            
            {/* EMAIL BLOCK */}
            <div className="group">
              <span className="text-xs font-montserrat text-white/40 tracking-[0.2em] uppercase block mb-3">
                {t('contact.emailLabel')}
              </span>
              <a 
                href="mailto:marraccinijoaquin@gmail.com" 
                className="block font-bebas text-xl md:text-2xl text-white group-hover:text-yellow-400 transition-colors duration-300 wrap-break-word leading-none"
              >
                marraccini<br className="md:hidden"/>joaquin<br className="hidden"/>@gmail.com
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="space-y-6">
              <span className="text-xs font-montserrat text-white/40 tracking-[0.2em] uppercase block mb-3">
                {t('contact.follow')}
              </span>
              
              <div className="flex flex-col gap-4">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/joaco_marra/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 border border-white/10 p-5 rounded-sm hover:border-yellow-400/50 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="text-white/80 group-hover:text-yellow-400 transition-colors bg-white/5 p-3 rounded-full">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </div>
                  <div>
                    <span className="block font-bebas text-xl md:text-2xl text-white group-hover:text-yellow-400 transition-colors">@joaco_marra</span>
                    <span className="block font-montserrat text-[10px] text-white/40 tracking-widest uppercase">Instagram</span>
                  </div>
                </a>

                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/@joaquinmarraccini" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 border border-white/10 p-5 rounded-sm hover:border-yellow-400/50 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="text-white/80 group-hover:text-yellow-400 transition-colors bg-white/5 p-3 rounded-full">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  </div>
                  <div>
                    <span className="block font-bebas text-xl md:text-2xl text-white group-hover:text-yellow-400 transition-colors">@joaquinmarraccini</span>
                    <span className="block font-montserrat text-[10px] text-white/40 tracking-widest uppercase">YouTube</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="pt-8 border-t border-white/10">
              <span className="font-bebas text-white/30 tracking-widest text-lg block mb-2">{t('contact.location')}</span>
              <span className="font-montserrat text-white/80 text-sm tracking-wide">{t('contact.based')}</span>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}