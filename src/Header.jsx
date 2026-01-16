import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBrand } from './BrandContext.jsx'; 
import { useLanguage } from './LanguageContext.jsx';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const { hasAnimated, setHasAnimated } = useBrand();
  const [animateBrand, setAnimateBrand] = useState(hasAnimated);

  const { t, lang, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Umbral bajito para detectar scroll rápido
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    if (!hasAnimated) {
      // Mantenemos los 2.5s iniciales para leer el nombre completo
      const timer = setTimeout(() => {
        setAnimateBrand(true);
        setHasAnimated(true);
      }, 2500);
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
    const base = 'fixed w-full z-50 transition-all duration-500 ease-in-out flex justify-center items-center';

    if (isHome && !isScrolled) {
      // Home centrado: top-[50svh] evita saltos en mobile
      return `${base} top-[50svh] -translate-y-1/2 py-2 bg-transparent shadow-none border-b border-transparent`;
    }

    // Scrolled: Fijo arriba
    return `${base} top-0 transform-none py-2 backdrop-blur-md bg-black/90 shadow-lg border-b border-white/10`;
  };

  // --- TRANSICIONES ULTRA SUAVES ("SLOW MOTION") ---
  const staggeredTransition = {
    transitionProperty: 'max-width, opacity, filter',
    
    // max-width (7000ms): El desplazamiento es súper lento (7 segundos).
    // opacity (3000ms): El desvanecimiento también es más lento (3 segundos) para acompañar.
    transitionDuration: '4000ms, 3000ms, 3000ms', 
    
    // Sin delay: Todo arranca junto suavemente.
    transitionDelay: '0ms', 
    
    // Curva Bézier personalizada para una aceleración y frenado imperceptibles
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1), ease-out, ease-out'
  };

  const fadedClass = `overflow-hidden inline-block align-bottom whitespace-nowrap ${
    animateBrand 
      ? 'max-w-0 opacity-0 blur-md text-white/30' 
      : 'max-w-[200px] md:max-w-[400px] opacity-100 blur-0 text-white' 
  }`;

  const highlightClass = `transition-all duration-[7000ms] cubic-bezier(0.4, 0, 0.2, 1) inline-block align-bottom ${
    animateBrand 
      ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
      : 'text-white drop-shadow-none'
  }`;

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.projects'), path: '/projects' },
    { label: t('nav.images'), path: '/images' },
    { label: t('nav.experience'), path: '/experience' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  const setLang = (target) => {
    if (lang !== target) toggleLanguage();
  };

  return (
    <>
      <header className={getHeaderClass()}>
        <nav className="relative w-full max-w-7xl flex flex-col items-center text-center px-4 md:px-6 overflow-visible">
          
          {/* LOGO / NOMBRE */}
          {/* Ajusté el min-h para que quede compacto */}
          <div className="flex flex-col items-center justify-center w-full mb-0 min-h-7.5 md:min-h-17.5">
            <h1 className="font-bebas leading-none whitespace-nowrap select-none flex justify-center items-end text-[12vw] md:text-[3.5rem] tracking-widest transition-all duration-500">
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
          <ul className={`flex flex-wrap justify-center items-center gap-x-3 gap-y-1 md:gap-10 list-none w-full transition-all duration-1000 ease-in-out
              ${isScrolled ? 'opacity-100 mt-0' : 'opacity-80 mt-0'}`}>
            
            {navItems.map((item) => {
              const isActive = item.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(item.path);

              return (
                <li key={item.path} className="shrink-0">
                  <Link 
                    to={item.path}
                    className={`transition-colors duration-300 no-underline uppercase text-[9px] md:text-xs tracking-[0.2em] font-montserrat font-bold whitespace-nowrap
                      ${isActive 
                        ? 'text-yellow-400 drop-shadow-[0_0_3px_rgba(250,204,21,0.4)]' 
                        : 'text-white/60 hover:text-white'
                      }`} 
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* LANGUAGE SELECTOR */}
          <div className={`absolute right-4 md:right-4 top-3 md:top-1/2 md:-translate-y-1/2 flex items-center gap-1 md:gap-2 transition-opacity duration-700
              ${(isHome && !isScrolled) ? 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto' : 'opacity-100'}`}>
            
            <button 
              onClick={() => setLang('es')}
              className={`text-[9px] md:text-[11px] font-montserrat font-bold tracking-widest transition-all duration-300 outline-none
                ${lang === 'es' ? 'text-yellow-400 scale-110' : 'text-white/30 hover:text-white'}`}
            >
              ES
            </button>
            
            <span className="text-white/20 text-[9px] select-none hidden md:inline">/</span>
            
            <button 
              onClick={() => setLang('en')}
              className={`text-[9px] md:text-[11px] font-montserrat font-bold tracking-widest transition-all duration-300 outline-none
                ${lang === 'en' ? 'text-yellow-400 scale-110' : 'text-white/30 hover:text-white'}`}
            >
              EN
            </button>
          </div>

        </nav>
      </header>
      
      {!isHome && <div className="w-full h-24 md:h-40" />}
    </>
  );
}