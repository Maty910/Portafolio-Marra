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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

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
    const base = 'fixed w-full z-50 transition-all duration-500 ease-in-out flex justify-center items-center';

    if (isHome && !isScrolled) {
      // Home centrado: Usamos top-[50svh]
      return `${base} top-[50svh] -translate-y-1/2 py-2 bg-transparent shadow-none border-b border-transparent`;
    }

    // Scrolled: Fijo arriba, un poco más compacto (py-2)
    return `${base} top-0 transform-none py-2 backdrop-blur-md bg-black/90 shadow-lg border-b border-white/10`;
  };

  const staggeredTransition = {
    transitionProperty: 'max-width, opacity, filter',
    transitionDuration: '6000ms, 1500ms, 1500ms', 
    transitionDelay: hasAnimated ? '0ms' : '1000ms, 0ms, 0ms', 
    transitionTimingFunction: 'ease-in-out, ease-out, ease-out'
  };

  const fadedClass = `overflow-hidden inline-block align-bottom whitespace-nowrap ${
    animateBrand 
      ? 'max-w-0 opacity-0 blur-md text-white/30' 
      : 'max-w-[150px] md:max-w-[400px] opacity-100 blur-0 text-white' 
  }`;

  const highlightClass = `transition-all duration-[6000ms] ease-in-out inline-block align-bottom ${
    animateBrand 
      ? 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]' 
      : 'text-white drop-shadow-none'
  }`;

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.projects'), path: '/projects' },
    { label: t('nav.images'), path: '/photos' },
    { label: t('nav.experience'), path: '/experience' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  const setLang = (target) => {
    if (lang !== target) toggleLanguage();
  };

  return (
    <>
      <header className={getHeaderClass()}>
        {/* PX-8 en mobile para darle aire a los costados y que el toggle no pise el contenido */}
        <nav className="relative w-full max-w-7xl flex flex-col items-center text-center px-8 md:px-12 overflow-visible">
          
          {/* LOGO / NOMBRE */}
          {/* Bajé el min-h a 30px en mobile para pegar más el menú */}
          <div className="flex flex-col items-center justify-center w-full mb-0 min-h-[30px] md:min-h-[70px]">
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
          {/* Ajustes de espacio: gap-x-3 (más pegaditos horizontalmente), flex-wrap (bajan si no entran) */}
          <ul className={`flex flex-wrap justify-center items-center gap-x-3 gap-y-1 md:gap-10 list-none w-full transition-all duration-1000 ease-in-out
              ${isScrolled ? 'opacity-100 mt-0 md:mt-0' : 'opacity-80 mt-1 md:mt-2'}`}>
            
            {navItems.map((item) => {
              const isActive = item.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(item.path);

              return (
                <li key={item.path} className="shrink-0">
                  <Link 
                    to={item.path}
                    // Fuente un poco más chica en mobile para asegurar que entren
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
          {/* right-4 o right-6 para despegarlo del borde. 
              Alineación vertical centrada con respecto a TODO el header, 
              pero como el menú está pegado al logo, queda visualmente equilibrado. */}
          <div className={`absolute right-4 md:right-0 top-3 flex flex-row md:flex-row items-center gap-1 md:gap-2 transition-opacity duration-700
              ${(isHome && !isScrolled) ? 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto' : 'opacity-100'}`}>
            
            <button 
              onClick={() => setLang('es')}
              className={`text-[9px] md:text-[11px] font-montserrat font-bold tracking-widest transition-all duration-300 outline-none
                ${lang === 'es' ? 'text-yellow-400 scale-110' : 'text-white/30 hover:text-white'}`}
            >
              ES
            </button>
            
            {/* En mobile ocultamos la barra divisora para ahorrar espacio o la hacemos horizontal si preferís */}
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