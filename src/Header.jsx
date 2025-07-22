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
  
  // Determinar las clases del header
  const getHeaderClass = () => {
    let classes = 'pm-header';
    
    if (isHome) {
      // En home: solo aplicar scrolled si se hizo scroll
      if (isScrolled) {
        classes += ' scrolled';
      }
    } else {
      // En otras secciones: siempre fijo en top
      classes += ' fixed-top';
    }
    
    return classes;
  };

  return (
    <>
      <header className={getHeaderClass()}>
        <nav>
          <div className="logo">
            <h1>Joaquín Marraccini</h1>
          </div>
        <ul className="nav">
          <li className="nav-button"><Link to="/">HOME</Link></li>
          <li className="nav-button"><Link to="/projects">PROYECTOS</Link></li>
          <li className="nav-button"><Link to="/photos">FOTOGRAFÍA</Link></li>
          <li className="nav-button"><Link to="/contact">CONTACTO</Link></li>
        </ul>
      </nav>
      </header>
      
      {/* Espaciador solo para secciones que no sean home */}
      {!isHome && <div className="header-spacer"></div>}
    </>
  );
}