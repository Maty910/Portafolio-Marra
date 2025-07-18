import { Link } from 'react-router-dom';

// Component that renders the header of the page with a logo and a navigation bar

export function Header () {
  return (
    <header className="pm-header-home">
      <nav>
        <div className="logo">
          <h1>Joaquín Marraccini</h1>
          {/* <p>Dir. de Fotografía</p> */}
        </div>
        <ul className="pm-nav-home">
          <li className="nav-button"><Link to="/">HOME</Link></li>
          <li className="nav-button"><Link to="/projects">PROYECTOS</Link></li>
          <li className="nav-button"><Link to="/photos">FOTOGRAFÍA</Link></li>
          <li className="nav-button"><Link to="/contact">CONTACTO </Link></li>
        </ul>
      </nav>
    </header>
  )
}