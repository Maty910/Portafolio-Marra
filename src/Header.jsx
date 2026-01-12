import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [animateBrand, setAnimateBrand] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // 1. Scroll Logic
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // 2. Animación (Esperamos 1s para que el usuario se ubique)
    const timer = setTimeout(() => {
      setAnimateBrand(true);
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const isHome = location.pathname === '/';
  
  const getHeaderClass = () => {
    const base = 'fixed w-full z-50 transition-all duration-1000 ease-in-out flex justify-center items-center';

    if (isHome) {
      if (isScrolled) {
        return `${base} top-0 py-3 backdrop-blur-md bg-black/90 border-b border-white/5 shadow-lg`;
      }
      return `${base} top-1/2 transform -translate-y-1/2 py-4`;
    }
    return `${base} top-0 py-3 backdrop-blur-md bg-black/90 border-b border-white/5 shadow-lg`;
  };

  // --- CONFIGURACIÓN DE LA TRANSICIÓN MANUAL ---
  // Acá está el ajuste fino para la suavidad:
  // 1. max-width: Tarda 6 SEGUNDOS (6000ms). Es imperceptible, como una marea.
  // 2. opacity: Tarda 1.5s. Se borra relativamente rápido.
  // 3. delay: El movimiento espera 1 segundo entero a que las letras ya estén casi borradas.
  const staggeredTransition = {
    transitionProperty: 'max-width, opacity, filter',
    transitionDuration: '6000ms, 1500ms, 1500ms', 
    transitionDelay: '1000ms, 0ms, 0ms', // Esperamos 1s antes de empezar a achicar el espacio
    transitionTimingFunction: 'ease-in-out, ease-out, ease-out'
  };

  // ELEMENTOS QUE SE VAN (JOAQUÍN... CCINI)
  const fadedClass = `overflow-hidden inline-block align-bottom whitespace-nowrap ${
    animateBrand 
      ? 'max-w-0 opacity-0 blur-md text-white/30' // Final: Sin ancho, invisible
      : 'max-w-[400px] opacity-100 blur-0 text-white' // Inicio: Con ancho, visible
  }`;

  // ELEMENTO QUE QUEDA (MARRA)
  // - Blanco puro.
  // - Solo gana un brillo (drop-shadow) muy sutil al final.
  const highlightClass = `transition-all duration-[6000ms] ease-in-out inline-block align-bottom ${
    animateBrand 
      ? 'text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]' 
      : 'text-white drop-shadow-none'
  }`;

  return (
    <>
      <header className={getHeaderClass()}>
        <nav className="w-full max-w-7xl flex flex-col items-center text-center px-6">
          
          {/* LOGO / NOMBRE */}
          <div className="flex flex-col items-center justify-center w-full mb-1 md:mb-0 min-h-[60px] md:min-h-[100px]">
            <h1 className={`font-bebas leading-none whitespace-nowrap select-none flex justify-center items-end
                ${isScrolled 
                  ? 'text-[3rem] md:text-[3.5rem] tracking-wider' 
                  : 'text-[12vw] md:text-[7rem] tracking-widest'}`}>
              
              {/* Parte 1: JOAQUÍN */}
              {/* Aplicamos el estilo inline para controlar los tiempos exactos */}
              <span className={fadedClass} style={staggeredTransition}>
                JOAQUÍN&nbsp;
              </span>

              {/* Parte Central: MARRA */}
              <span className={highlightClass}>
                MARRA
              </span>

              {/* Parte 3: CCINI */}
              <span className={fadedClass} style={staggeredTransition}>
                CCINI
              </span>
            </h1>
          </div>

          {/* MENÚ DE NAVEGACIÓN */}
          <ul className={`flex gap-6 md:gap-10 justify-center items-center list-none w-full flex-wrap transition-all duration-1000
              ${isScrolled ? 'opacity-100 mt-0' : 'opacity-80 mt-2 md:mt-4'}`}>
            
            {['HOME', 'PROJECTS', 'IMAGES', 'EXTRAS', 'CONTACT'].map((item) => (
              <li key={item}>
                <Link 
                  className="text-white/60 hover:text-white transition-colors duration-500 no-underline uppercase text-[9px] md:text-xs tracking-[0.25em] font-montserrat font-bold" 
                  to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              </li>
            ))}

          </ul>
        </nav>
      </header>
      
      {/* Espaciador */}
      {!isHome && <div className="w-full h-32 md:h-40" />}
    </>
  );
}