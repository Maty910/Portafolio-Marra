import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBrand } from './BrandContext.jsx'; // Importamos el contexto
import { useLanguage } from './LanguageContext.jsx';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Usamos el estado global
  const { hasAnimated, setHasAnimated } = useBrand();
  
  // Si ya animó antes, arrancamos terminados
  const [animateBrand, setAnimateBrand] = useState(hasAnimated);

  useEffect(() => {
    // 1. Scroll Logic
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // 2. Animación Inteligente
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        setAnimateBrand(true);
        setHasAnimated(true);
      }, 1000);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      };
    } else {
      setAnimateBrand(true);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated, setHasAnimated]);

  const isHome = location.pathname === '/';
  
  const getHeaderClass = () => {
    // Definimos la base y la transición de posición
    const base = 'fixed w-full z-50 transition-all duration-1000 ease-in-out flex justify-center items-center';

    if (isHome) {
      if (isScrolled) {
        // Estado Scrolled: Fondo negro, padding chico, arriba
        return `${base} top-0 py-3 backdrop-blur-md bg-black/90 shadow-lg`;
      }
      // Estado Inicial Home: Centrado verticalmente
      return `${base} top-1/2 transform -translate-y-1/2 py-4`;
    }
    // Otras páginas: Siempre arriba
    return `${base} top-0 py-3 backdrop-blur-md bg-black/90 shadow-lg`;
  };

  // --- TRANSICIONES ---
  const staggeredTransition = {
    transitionProperty: 'max-width, opacity, filter',
    transitionDuration: '6000ms, 1500ms, 1500ms', 
    transitionDelay: hasAnimated ? '0ms' : '1000ms, 0ms, 0ms', 
    transitionTimingFunction: 'ease-in-out, ease-out, ease-out'
  };

  // ELEMENTOS QUE SE VAN
  const fadedClass = `overflow-hidden inline-block align-bottom whitespace-nowrap ${
    animateBrand 
      ? 'max-w-0 opacity-0 blur-md text-white/30' 
      : 'max-w-[200px] md:max-w-[400px] opacity-100 blur-0 text-white' 
  }`;

  // MARRA (SOLO BRILLO)
  const highlightClass = `transition-all duration-[6000ms] ease-in-out inline-block align-bottom ${
    animateBrand 
      ? 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]' 
      : 'text-white drop-shadow-none'
  }`;

  // --- DEFINICIÓN DE RUTAS ---
  const { t, lang, toggleLanguage } = useLanguage();
  // Mapeamos los nombres visuales con las rutas reales de tu App.jsx
  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.projects'), path: '/projects' },
    { label: t('nav.images'), path: '/images' },
    { label: t('nav.experience'), path: '/experience' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <>
      <header className={getHeaderClass()}>
        <nav className="relative w-full max-w-7xl flex flex-col items-center text-center px-4 md:px-6 overflow-hidden">
          
          {/* LOGO / NOMBRE */}
          <div className="flex flex-col items-center justify-center w-full mb-2 md:mb-0 min-h-15 md:min-h-20">
            <h1 className="font-bebas leading-none whitespace-nowrap select-none flex justify-center items-end text-[10vw] md:text-[3.5rem] tracking-widest">
              
              <span className={fadedClass} style={staggeredTransition}>
                JOAQUÍN&nbsp;
              </span>

              <span className={highlightClass}>
                MARRA
              </span>

              <span className={fadedClass} style={staggeredTransition}>
                CCINI
              </span>
            </h1>
          </div>

          {/* MENÚ */}
          <ul className={`flex gap-4 md:gap-10 justify-center items-center list-none w-full flex-wrap transition-all duration-1000
              ${isScrolled ? 'opacity-100 mt-0' : 'opacity-80 mt-2 md:mt-4'}`}>
            
            {navItems.map((item) => {
              // Lógica para saber si este item está activo
              // Si es HOME ('/'), tiene que ser coincidencia exacta
              // Si es otra ruta, verificamos si el pathname empieza con esa ruta (útil para sub-rutas como /projects/algo)
              const isActive = item.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(item.path);

              return (
                <li key={item.label}>
                  <Link 
                    to={item.path}
                    className={`transition-colors duration-300 no-underline uppercase text-[10px] md:text-xs tracking-[0.2em] font-montserrat font-bold
                      ${isActive 
                        ? 'text-yellow-400 drop-shadow-[0_0_3px_rgba(250,204,21,0.4)]' // Estilo ACTIVO
                        : 'text-white/60 hover:text-white' // Estilo NORMAL
                      }`} 
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* LANGUAGE TOGGLE (responsive & accessible) */}
          <div className="absolute right-4 top-3 md:top-4 flex items-center">
            <button
              onClick={toggleLanguage}
              aria-label={lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
              title={lang === 'es' ? 'EN' : 'ES'}
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white/90 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <span className="text-[11px] font-montserrat uppercase tracking-widest">{lang === 'es' ? 'ES' : 'EN'}</span>
              <span className={`w-8 h-4 rounded-full p-0.5 bg-white/10 relative transition-all ${lang === 'es' ? 'justify-start' : 'justify-end'}`}> 
                <span className={`block w-3.5 h-3.5 rounded-full bg-white transition-transform ${lang === 'es' ? '' : 'transform translate-x-4'}`} />
              </span>
            </button>
          </div>

        </nav>
      </header>
      
      {!isHome && <div className="w-full h-32 md:h-40" />}
    </>
  );
}