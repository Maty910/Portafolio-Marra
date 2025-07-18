import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`pm-header ${isScrolled ? 'scrolled' : ''}`}>
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
  );
}