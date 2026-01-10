import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determinar si estamos en home
  const isHome = location.pathname === '/';
  
  // Determinar las clases del header usando Tailwind
  const getHeaderClass = () => {
    const base = 'fixed w-full z-10 transition-all duration-300 flex justify-center items-center';

    if (isHome) {
      if (isScrolled) {
        // Al hacer scroll, agregamos un fondo oscuro translúcido para que se lea bien sobre cualquier contenido
        return `${base} top-0 py-2 backdrop-blur-md bg-black/80 shadow-lg rounded-b-lg`;
      }
      return `${base} top-1/2 transform -translate-y-1/2 py-[6vh]`;
    }

    // En otras secciones
    return `${base} top-0 py-2 backdrop-blur-md bg-black/80 shadow-lg rounded-b-lg`;
  };

  return (
    <>
      <header className={getHeaderClass()}>
        <nav className="w-full max-w-6xl flex flex-col items-center text-center px-4">
          <div className="logo flex flex-col items-center w-full">
            <h1
              className={`font-bebas h1-span leading-none transition-all duration-500 whitespace-nowrap select-none
                ${isScrolled 
                  ? 'text-[3.2rem] md:text-[3.6rem] tracking-[0.08em]' 
                  : 'text-[10vw] md:text-[5.5rem] tracking-[0.15em]'}`}
            >
              {/* ESTRATEGIA VISUAL "MARRA":
                  Usamos 'text-white/40' (blanco al 40% de opacidad) para las partes secundarias.
                  Usamos 'text-white' puro y un drop-shadow para que "Marra" brille.
              */}
              <span className="text-white/40 transition-colors duration-300 hover:text-white/60">Joaquín </span>
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] filter">Marra</span>
              <span className="text-white/40 transition-colors duration-300 hover:text-white/60">ccini</span>
            </h1>
          </div>

          <ul className="flex gap-8 md:gap-12 justify-center items-center py-0 list-none w-full mt-4 flex-wrap">
            <li><Link className="text-white/80 hover:text-white transition-colors no-underline uppercase text-xs md:text-sm tracking-[0.2em] font-montserrat font-medium" to="/">HOME</Link></li>
            <li><Link className="text-white/80 hover:text-white transition-colors no-underline uppercase text-xs md:text-sm tracking-[0.2em] font-montserrat font-medium" to="/projects">PROYECTOS</Link></li>
            <li><Link className="text-white/80 hover:text-white transition-colors no-underline uppercase text-xs md:text-sm tracking-[0.2em] font-montserrat font-medium" to="/photos">FOTOGRAFÍA</Link></li>
            {/* Agregué el link a EXTRAS que querías antes */}
            <li><Link className="text-white/80 hover:text-white transition-colors no-underline uppercase text-xs md:text-sm tracking-[0.2em] font-montserrat font-medium" to="/extras">EXTRAS</Link></li>
            <li><Link className="text-white/80 hover:text-white transition-colors no-underline uppercase text-xs md:text-sm tracking-[0.2em] font-montserrat font-medium" to="/contact">CONTACTO</Link></li>
          </ul>
        </nav>
      </header>
      
      {!isHome && <div style={{ height: 'calc(10vh + 17vh)', width: '100%' }} />}
    </>
  );
}